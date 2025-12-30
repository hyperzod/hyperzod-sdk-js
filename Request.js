const axios = require("axios");

// Get Base URL
const api_url_dev = "https://api.hyperzod.dev";
const api_url_production = "https://api.hyperzod.app";

const API = axios.create({
  headers: { "Content-Type": "application/json" },
});

function getBaseURL() {
  const baseUrl = window.HYPERZOD_API_CONFIG.baseURL;
  return baseUrl
    ? baseUrl
    : window.HYPERZOD_API_ENV == "production"
    ? api_url_production
    : api_url_dev;
}

API.interceptors.request.use(
  async (config) => {
    config.baseURL = getBaseURL();
    return config;
  },
  (error) => Promise.reject(error)
);

module.exports = API;
