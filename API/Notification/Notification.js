const Request = require('../../Request');

module.exports = {
    //Push Auth 
    pushAuth(payload) {
        const url = `/store/v1/notification/push/auth/customer`
        return Request.post(`${url}`, payload)
    },
}