const axios = require('axios')
// const axiosRetry = require('axios-retry')

// Get Base URL
const api_url_dev = 'https://api.hyperzod.dev';
const api_url_production = 'https://api.hyperzod.app';

const API = axios.create({
  headers: { 'Content-Type': 'application/json' }
});

API.interceptors.request.use(async config => {
  config.baseURL = (window.HYPERZOD_API_ENV == 'production' ? api_url_production : api_url_dev);
  return config;
}, error => Promise.reject(error));

// axiosRetry(API, { retries: 3 });

module.exports = API


