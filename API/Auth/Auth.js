const Request = require('../../Request');

module.exports = {
    // Login User
    login(payload) {
        const url = `/auth/v1/user/login`
        return Request.post(`${url}`, payload)
    },

    // Generate OTP
    otp(payload) {
        const url = `/auth/v1/user/otp/generate`
        return Request.post(`${url}`, payload)
    },

    // Verify User via OTP
    otpVerify(payload) {
        const url = `/auth/v1/user/otp/verify`
        return Request.post(`${url}`, payload)
    },

    // Chnage password
    changePassword(payload) {
        const url = `/auth/v1/user/resetPassword`
        return Request.post(`${url}`, payload)
    },

    //Signup User
    signup(payload) {
        console.log(payload)
        const url = `/auth/v1/user/register`
        return Request.post(`${url}`, payload)
    },

    // Update User
    updateUser(payload) {
        const url = `/auth/v1/user/${payload.user_id}`
        return Request.put(`${url}`, payload)
    },

    // Logged In User
    getLoggedInUser(payload) {
        const url = `/auth/v1/me`
        return Request.get(`${url}`, { params: { ...payload } })
    },

    // Logout User
    logout(payload) {
        const url = `/auth/v1/logout`
        return Request.post(`${url}`, payload)
    }
}