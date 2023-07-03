const Request = require('../../Request');

module.exports = {
    // Get Merchant Page
    getMerchantPage(payload) {
        const url = `/public/v1/page-builder/builder/page`
        return Request.get(`${url}`, { params: { ...payload } })
    },
}