const axios = require("axios");

// Get Base URL
const baseURLS = {
  default: {
    dev: "https://api.hyperzod.dev",
    production: "https://api.hyperzod.app",
  },
  secondary: {
    dev: "https://api-dev.hyperzod53.com",
    production: "https://api.hyperzod53.com",
  },
};

const API = axios.create({
  headers: { "Content-Type": "application/json" },
});

function getBaseURL() {
  const apiType =
    window.shouldUseSecondaryApi == true ? "secondary" : "default";
  return baseURLS[apiType][window.HYPERZOD_API_ENV];
}

API.interceptors.request.use(
  async (config) => {
    config.baseURL = getBaseURL();
    return config;
  },
  (error) => Promise.reject(error)
);

module.exports = API;
