const Request = require('../../Request');

module.exports = {
    // Get Home Page data
    homeData(payload) {
        const url = `/store/v1/home`
        return Request.post(`${url}`, payload.data, {headers: payload.headers})
    },
}   