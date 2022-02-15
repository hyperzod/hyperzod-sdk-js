const Request = require('../../Request');

module.exports = {
    // Find Nearby Merchants
    findNearByMerchants(payload) {
        const url = `/store/v1/merchant/nearby`
        return Request.post(`${url}`, payload)
    },

    // List Featured Merchants
    listFeaturedMerchants(payload) {
        const url = `/store/v1/merchant/merchant-featured/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Sponsored Merchants
    listSponsoredMerchants(payload) {
        const url = `/store/v1/merchant/merchant-sponsored/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Get Merchant Menu
    getMerchantMenu(payload) {
        const url = `/store/v1/merchant/menu`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Merchant Categories
    listMerchantCategories(payload) {
        payload.status = true;
        const url = `/store/v1/merchant/categories`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}