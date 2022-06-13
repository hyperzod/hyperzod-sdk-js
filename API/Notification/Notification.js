const Request = require('../../Request');

module.exports = {
    //Push Auth 
    pushAuth(payload) {
        const url = `public/v1/notification/push/token`
        return Request.post(`${url}`, payload)
    },
}