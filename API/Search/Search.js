const Request = require('../../Request');

module.exports = {
    // Get Search
    
    getSearch(payload) {
        const url = `/search/search`

        return Request.get(`${url}`, { params: { ...payload }});
    },
}