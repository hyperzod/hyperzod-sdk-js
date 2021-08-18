const Request = require('./Repository/Request')

class AuthManager {
    setAuthToken = (token) => {
        Request.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

module.exports = new AuthManager()