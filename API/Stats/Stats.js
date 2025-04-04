const Request = require('../../Request');


module.exports = {
    // Check User is in Segment
    checkUserInSegment: function(data) {
        const url = `/admin/v1/stats/segments/checkUser`
        return Request.post(`${url}`, data);
    }
}