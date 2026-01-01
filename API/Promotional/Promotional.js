export default function createPromotionalModule(http) {
  const base = "/store/v1/promotional";
  return {
    // List Banners
    listBanners(params = {}) {
      return http.get(`${base}/banners`, { params });
    },

    // List Coupons
    listCoupons(params = {}) {
      return http.get(`${base}/coupons`, { params });
    },

    listAvailableCoupons(params = {}) {
      return http.get(`${base}/coupons/available`, { params });
    },
  };
}
