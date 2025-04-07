const Request = require('../../Request');


module.exports = {
    // Check User is in Segment
    checkUserInSegment: function(payload) {
        const url = `/admin/v1/stats/segments/checkUser`
        return Request.get(`${url}`, { params: { ...payload } });
    }
}