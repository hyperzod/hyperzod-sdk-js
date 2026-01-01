export default function createMerchantModule(http) {
  const base = "/store/v1/merchant";
  return {
    // Find Nearby Merchants
    findNearByMerchants(payload) {
      const { data, headers, ...rest } = payload || {};
      return http.post(`${base}/nearby`, data || rest, {
        ...(headers && { headers }),
      });
    },

    // List merchants by id
    listMerchantsById(params = {}) {
      return http.get(`${base}/listByIds`, { params });
    },

    // List Featured Merchants
    listFeaturedMerchants(params = {}) {
      return http.get(`${base}/merchant-featured/list`, { params });
    },

    // List Sponsored Merchants
    listSponsoredMerchants(params = {}) {
      return http.get(`${base}/merchant-sponsored/list`, { params });
    },

    // Get Merchant Menu
    getMerchantMenu(payload) {
      const { data, headers, ...rest } = payload || {};
      return http.get(`${base}/menu`, {
        params: data || rest,
        ...(headers && { headers }),
      });
    },

    // Get Nearest Merchant
    nearestMerchant(payload) {
      return http.post(`${base}/nearest`, payload);
    },

    // List Merchant Categories
    listMerchantCategories(params = {}) {
      return http.get(`${base}/categories`, {
        params: { ...params, status: true },
      });
    },

    // New merchant menu
    getNewMerchantMenu(payload) {
      const { data, headers, ...rest } = payload || {};
      return http.get(`${base}/menu/test`, {
        params: data || rest,
        ...(headers && { headers }),
      });
    },

    // Is merchant delivering
    isMerchantDelivering(payload) {
      const { data, headers, ...rest } = payload || {};
      return http.post(`${base}/check-delivering`, data || rest, {
        ...(headers && { headers }),
      });
    },
  };
};
