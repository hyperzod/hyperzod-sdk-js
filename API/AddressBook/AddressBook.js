export default function createAddressModule(http) {
  const base = "/store/v1";
  return {
    // Create Address
    createAddress(payload) {
      return http.post(`${base}/address`, payload);
    },

    // Update Address
    updateAddress(payload) {
      return http.put(`${base}/address`, payload);
    },

    // Delete Address
    deleteAddress(params = {}) {
      return http.delete(`${base}/address`, { params });
    },

    // Get Address
    getAddress(params = {}) {
      return http.get(`${base}/address/getByAddressId`, { params });
    },

    // List Addresses
    listAddresses(params = {}) {
      return http.get(`${base}/address`, { params });
    },
  };
}
