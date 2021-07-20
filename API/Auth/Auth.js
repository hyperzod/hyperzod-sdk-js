const Request = require('../../Request');

module.exports = {
    // Login User
    login(payload) {
        const login = `/auth/login`
        return Request.post(`${login}`, payload)
    },

    // Verify User via OTP
    verifyPhone(payload) {
        const verify_otp = `/auth/otp/verify`
        return Request.post(`${verify_otp}`, payload)
    },

    // Update User
    updateUser(payload) {
        const update_user = `/auth/user/update`
        return Request.post(`${update_user}`, payload)
    },
}