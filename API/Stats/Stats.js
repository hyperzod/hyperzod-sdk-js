const Request = require('../../Request');


module.exports = {
    // Check User is in Segment
    checkUserInSegment: function(payload) {
        const url = `/store/v1/stats/checkUserInSegment`
        return Request.get(`${url}`, { params: { ...payload } });
    }
}