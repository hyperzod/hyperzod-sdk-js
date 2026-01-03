import axios from "axios";
import SDKError from "./SDKError.js";

const UPLOAD_BASE_URLS = {
  dev: "https://upload.hyperzod.dev",
  production: "https://upload.hyperzod.app",
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
    return SDKError({
      message: data.message || error.message || "Upload failed",
      code: data.code || "UPLOAD_ERROR",
      status: error.response.status,
      requestId: data.request_id || requestId,
      url: config.url || config.baseURL || "unknown",
      method: config.method?.toUpperCase() || "POST",
      raw: error,
    });
  }

  const config = error.config || {};
  return SDKError({
    message: error.message || "Network error during upload",
    code: error.code || "NETWORK_ERROR",
    requestId: requestId,
    url: config.url || config.baseURL || "unknown",
    method: config.method?.toUpperCase() || "POST",
    raw: error,
  });
}

export default function UploadClient({
  env = "dev",
  tenant = getDefaultTenant(),
  requestId,
  getAuthToken,
  timeout = 60000, // Longer timeout for uploads
  customHeaders = {},
}) {
  if (!requestId) {
    throw new Error("UploadClient requires a requestId");
  }

  const baseURL = UPLOAD_BASE_URLS[env];
  if (!baseURL) {
    throw new Error(`Invalid upload environment: "${env}" not found`);
  }

  const client = axios.create({
    baseURL,
    timeout,
    headers: {
      "X-Apm-Transaction-Id": requestId,
      ...(tenant && { "X-Tenant": tenant }),
      ...customHeaders,
    },
  });

  // Attach auth token dynamically (same pattern as HttpClient)
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
    (res) => res,
    (err) => Promise.reject(normalizeError(err, requestId))
  );

  return {
    post(url, data, config) {
      return client.post(url, data, config);
    },
  };
}
