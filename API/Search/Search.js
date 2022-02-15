const Request = require('../../Request');

module.exports = {
    // Get Search
    
    getSearch(payload) {
        const url = `/store/v1/search`

        return Request.get(`${url}`, { params: { ...payload }});
    },
}