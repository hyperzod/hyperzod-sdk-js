const Repository = require('../Repository');

const login = `/auth/login`
const verify_otp = `/auth/otp/verify`
const update_user = `/auth/user/update`

module.exports = {
    // Login User
    login(payload) {
        return Repository.post(`${login}`, payload)
    },

    // Verify User via OTP
    verifyPhone(payload) {
        return Repository.post(`${verify_otp}`, payload)
    },

    // Update User
    updateUser(payload) {
        return Repository.post(`${update_user}`, payload)
    },
}