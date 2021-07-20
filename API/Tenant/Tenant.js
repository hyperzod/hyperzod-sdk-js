const Request = require('../../Request');

module.exports = {
    // Get Boot Settings
    getBootSettings(payload) {
        const url = `/app/client/boot`
        return Request.get(`${url}`, { params: { ...payload } })
    },

    // Is is Serviceable Area
    isServiceableArea(payload) {
        const url = `/tenant/is-serviceable-area`
        return Request.post(`${url}`, payload)
    }
}