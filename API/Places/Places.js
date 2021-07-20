const Request = require('../../Request');

module.exports = {
    // Search Places
    searchPlaces(payload) {
        const url = `/places-search/search`
        return Request.post(`${url}`, payload)
    },

    // Reverse Geocode
    reverseGeocode(payload) {
        const url = `/places-search/reverse-geocode`
        return Request.post(`${url}`, payload)
    }
}