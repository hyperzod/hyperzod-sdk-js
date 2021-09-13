const Request = require('../../Request');

module.exports = {
    // Get Page
    getPage(payload) {
        const url = `/page/fetch`
        return Request.get(`${url}`, { params: { ...payload } })
    },

}