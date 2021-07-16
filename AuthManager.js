const Repository = require('./Repository/Repository')

class AuthManager {
    setAuthToken = (token) => {
        Repository.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

module.exports = new AuthManager()