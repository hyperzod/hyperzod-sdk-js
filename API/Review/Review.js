const Request = require('../../Request');

module.exports = {
    // Review Merchant
    reviewMerchant(payload) {
        const url = `/review/create`
        return Request.post(`${url}`, payload )
    },
}