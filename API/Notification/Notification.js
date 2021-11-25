const Request = require('../../Request');

module.exports = {
    //Push Auth 
    placeOrder(payload) {
        const url = `/notification/push/auth`
        return Request.post(`${url}`, payload)
    },
}