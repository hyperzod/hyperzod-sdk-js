const Request = require('../../Request');

module.exports = {
    // Get Page
    getPage(payload) {
        const url = `/store/v1/page`
        return Request.get(`${url}`, { params: { ...payload } })
    },
}