const Request = require('../../Request');

module.exports = {
    //Push Auth 
    pushAuth(payload) {
        const url = `/notification/push/auth`
        return Request.post(`${url}`, payload)
    },
}