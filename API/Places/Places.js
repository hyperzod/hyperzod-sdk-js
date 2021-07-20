const Request = require('../../Request');

module.exports = {
    // Search Places
    searchPlaces(payload) {
        const places_search = `/places-search/search`
        return Request.post(`${places_search}`, payload)
    },

    // Reverse Geocode
    reverseGeocode(payload) {
        const reverse_geocode = `/places-search/reverse-geocode`
        return Request.post(`${reverse_geocode}`, payload)
    }
}