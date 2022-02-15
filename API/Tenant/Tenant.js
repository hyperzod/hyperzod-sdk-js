const Request = require('../../Request');

module.exports = {
    // Get Boot Settings
    getBootSettings(payload) {
        const url = `/store/v1/boot`
        return Request.get(`${url}`, { params: { ...payload } })
    },

    // Is is Serviceable Area
    isServiceableArea(payload) {
        const url = `/store/v1/isStoreServiceable`
        return Request.post(`${url}`, payload)
    }
}