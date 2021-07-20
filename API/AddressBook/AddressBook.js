const Request = require('../../Request');

module.exports = {
    // Create Address
    createAddress(payload) {
        const url = `/address/create`
        return Request.post(`${url}`, payload)
    },

    // Update Address
    updateAddress(payload) {
        const url = `/address/update`
        return Request.post(`${url}`, payload)
    },

    // Delete Address
    deleteAddress(payload) {
        const url = `/address/delete`
        return Request.post(`${url}`, payload)
    },

    // Get Address
    getAddress(payload) {
        const url = `/address/fetch`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Addresses
    listAddresses(payload) {
        const url = `/address/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}