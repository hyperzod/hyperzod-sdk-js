const Request = require('../../Request');

module.exports = {
    // List Banners
    listBanners(payload) {
        const url = `/store/v1/promotional/banners`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Coupons
    listCoupons(payload) {
        const url = `/store/v1/promotional/coupons`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    listAvailableCoupons(payload) {
        const url = `/store/v1/promotional/coupons/available`
        return Request.get(`${url}`, { params: { ...payload }})
    },

}