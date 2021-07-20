const Request = require('../../Request');

module.exports = {
    // List Banners
    listBanners(payload) {
        const url = `/promotional/banners/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Coupons
    listCoupons(payload) {
        const url = `/promotional/coupons/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}