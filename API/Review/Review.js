const Request = require('../../Request');

module.exports = {
    // Review Merchant
    reviewMerchant(payload) {
        const url = `/store/v1/review`
        return Request.post(`${url}`, payload )
    },

    getTopMerchantReviews(merchant_id) {
        const url = `/store/v1/review/top-merchant-reviews`
        return Request.get(`${url}`, { params: { merchant_id } })
    }
}