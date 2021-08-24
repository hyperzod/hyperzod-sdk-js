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
  headers: {'Content-Type' : 'application/json', 'x-api-key': 'rZw4wZRMx3dj8fCVxdCUj56462h2pP'}
});

axiosRetry(API, { retries: 3 });

module.exports = API

