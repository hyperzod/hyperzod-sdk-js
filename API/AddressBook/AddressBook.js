const Request = require('../../Request');

module.exports = {
    // Create Address
    createAddress(payload) {
        const url = `/store/v1/address`
        return Request.post(`${url}`, payload)
    },

    // Update Address
    updateAddress(payload) {
        const url = `/store/v1/address`
        return Request.put(`${url}`, payload)
    },

    // Delete Address
    deleteAddress(payload) {
        console.log(payload);
        const url = `/store/v1/address`
        return Request.delete(`${url}`, { params: { ...payload }})
    },

    // Get Address
    getAddress(payload) {
        const url = `/store/v1/address/getByAddressId`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Addresses
    listAddresses(payload) {
        const url = `/store/v1/address`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}