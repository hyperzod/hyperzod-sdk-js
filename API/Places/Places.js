export default function createPlacesModule(http) {
  const base = "/store/v1/places";
  return {
    // Search Places
    searchPlaces(params = {}) {
      return http.get(`${base}/search`, { params });
    },

    // Fetch Place
    fetchPlace(params = {}) {
      return http.get(`${base}/getByPlaceId`, { params });
    },

    // Reverse Geocode
    reverseGeocode(params = {}) {
      return http.get(`${base}/reverseGeocode`, { params });
    },
  };
}
