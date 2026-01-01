import axios from "axios";
import createSDKError from "./SDKError.js";

const BASE_URLS = {
  default: {
    dev: "https://api.hyperzod.dev",
    production: "https://api.hyperzod.app",
  },
  secondary: {
    dev: "https://api-dev.hyperzod53.com",
    production: "https://api.hyperzod53.com",
  },
};

// Helper to get default tenant (works in browser and Node.js)
function getDefaultTenant() {
  if (typeof window !== "undefined" && window.location) {
    return window.location.hostname;
  }
  return null;
}

function normalizeError(error, requestId) {
  if (error.response) {
    const data = error.response.data || {};
    const config = error.config || {};
    return createSDKError({
      message: data.message || error.message || "Request failed",
      code: data.code || "API_ERROR",
      status: error.response.status,
      requestId: data.request_id || requestId,
      url: config.url || config.baseURL || "unknown",
      method: config.method?.toUpperCase() || "unknown",
      raw: error,
    });
  }

  const config = error.config || {};
  return createSDKError({
    message: error.message || "Network error occurred",
    code: error.code || "NETWORK_ERROR",
    requestId: requestId,
    url: config.url || config.baseURL || "unknown",
    method: config.method?.toUpperCase() || "unknown",
    raw: error,
  });
}

export default function createHttpClient({
  env = "dev",
  apiVariant = "default",
  tenant = getDefaultTenant(),
  requestId,
  getAuthToken,
  timeout = 30000,
  customHeaders = {},
  retries = 0,
}) {
  if (!requestId) {
    throw new Error("HttpClient requires a requestId");
  }

  const baseURL = BASE_URLS[apiVariant]?.[env];
  if (!baseURL) {
    throw new Error(
      `Invalid API configuration: variant "${apiVariant}" or env "${env}" not found`
    );
  }

  const client = axios.create({
    baseURL,
    timeout,
    headers: {
      "Content-Type": "application/json",
      "X-Apm-Transaction-Id": requestId,
      ...(tenant && { "X-Tenant": tenant }),
      ...customHeaders,
    },
  });

  // Attach auth token dynamically per request
  client.interceptors.request.use(
    (config) => {
      const token = getAuthToken?.();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        delete config.headers.Authorization;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (res) => res.data,
    (err) => Promise.reject(normalizeError(err, requestId))
  );

  return {
    get(url, config) {
      return client.get(url, config);
    },
    post(url, data, config) {
      return client.post(url, data, config);
    },
    put(url, data, config) {
      return client.put(url, data, config);
    },
    delete(url, config) {
      return client.delete(url, config);
    },
  };
}
