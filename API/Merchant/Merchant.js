const Request = require('../../Request');

module.exports = {
    // Find Nearby Merchants
    findNearByMerchants(payload) {
        const url = `/merchant/merchant/location/nearby`
        return Request.post(`${url}`, payload)
    },

    // List Featured Merchants
    listFeaturedMerchants(payload) {
        const url = `/merchant/merchant-featured/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Sponsored Merchants
    listSponsoredMerchants(payload) {
        const url = `/merchant/merchant-sponsored/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Get Merchant Menu
    getMerchantMenu(payload) {
        const url = `/merchant/menu`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Merchant Categories
    listMerchantCategories(payload) {
        const url = `/merchant/merchant-categories/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}