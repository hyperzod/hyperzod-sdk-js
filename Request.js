const axios = require('axios')
const axiosRetry = require('axios-retry')

// Get Base URL
const baseURL = 'https://api.hyperzod.dev';

// const getAuthToken = () => {
//     const user = JSON.parse(window.localStorage.getItem('loggedInUser'))
//     if (user) {
//         return `Bearer ${user.access_token}`
//     }
//     return null
// }

const API = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json', 'x-api-key': 'pEM60tPXkrUuC7WBva6hVUV8EZYd3i' }
});

axiosRetry(API, { retries: 3 });

module.exports = API


