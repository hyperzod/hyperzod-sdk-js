const Repository = require('../Repository');

module.exports = {
    // Login User
    login(payload) {
        const login = `/auth/login`
        return Repository.post(`${login}`, payload)
    },

    // Verify User via OTP
    verifyPhone(payload) {
        const verify_otp = `/auth/otp/verify`
        return Repository.post(`${verify_otp}`, payload)
    },

    // Update User
    updateUser(payload) {
        const update_user = `/auth/user/update`
        return Repository.post(`${update_user}`, payload)
    },
}