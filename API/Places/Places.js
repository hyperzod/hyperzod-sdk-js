const Request = require('../../Request');

module.exports = {
    // Search Places
    searchPlaces(payload) {
        const url = `/store/v1/places/search`
        return Request.get(`${url}`, { params: { ...payload } })
    },

    //Featch Place
    fetchPlace(payload) {
        const url = `/store/v1/places/getByPlaceId`
        return Request.get(`${url}`, { params: { ...payload } })
    },

    // Reverse Geocode
    reverseGeocode(payload) {
        const url = `/store/v1/places/reverseGeocode`
        return Request.get(`${url}`, { params: { ...payload } })
    }
}