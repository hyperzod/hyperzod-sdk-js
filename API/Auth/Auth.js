const Request = require('../../Request');

module.exports = {
    // Login User
    login(payload) {
        const url = `/auth/login`
        return Request.post(`${url}`, payload)
    },

    // Verify User via OTP
    verifyPhone(payload) {
        const url = `/auth/otp/verify`
        return Request.post(`${url}`, payload)
    },

    // Update User
    updateUser(payload) {
        const url = `/auth/user/update`
        return Request.post(`${url}`, payload)
    },

    // Logged In User
    getLoggedInUser(payload) {
        const url = `/auth/me`
        return Request.get(`${url}`, { params: { ...payload } })
    },

    // Logout User
    logout(payload) {
        const url = `/auth/logout`
        return Request.post(`${url}`, payload)
    }
}