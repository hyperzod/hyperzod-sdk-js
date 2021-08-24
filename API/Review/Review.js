const Request = require('../../Request');

module.exports = {
    // Review Merchant
    reviewMerchant(payload) {
        const url = `/review/customer/merchant`
        return Request.post(`${url}`, payload )
    },
}