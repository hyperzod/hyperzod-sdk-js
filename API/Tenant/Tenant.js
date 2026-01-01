export default function createTenantModule(http) {
  const base = "/store/v1";
  return {
    // Get Boot Settings
    getBootSettings(params = {}) {
      return http.get(`${base}/boot`, { params });
    },

    // Is Serviceable Area
    isServiceableArea(payload) {
      return http.post(`${base}/isStoreServiceable`, payload);
    },
  };
}
