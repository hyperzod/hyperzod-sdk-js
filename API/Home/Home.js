const Request = require('../../Request');

module.exports = {
    // Get Home Page data
    homeData(payload) {
        const url = `/home`
        return Request.post(`${url}`, payload)
    },
}