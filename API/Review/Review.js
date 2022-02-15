const Request = require('../../Request');

module.exports = {
    // Review Merchant
    reviewMerchant(payload) {
        const url = `/store/v1/review`
        return Request.post(`${url}`, payload )
    },
}