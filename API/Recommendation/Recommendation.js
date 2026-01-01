export default function createRecommendationModule(http) {
  const base = "/store/v1/recommend";
  return {
    recommendProductsWithinMerchant(payload) {
      return http.post(`${base}/products/merchant`, payload);
    },

    recommendMerchantsForUser(payload) {
      const { data, headers, ...rest } = payload || {};
      return http.post(`${base}/merchants`, data || rest, {
        ...(headers && { headers }),
      });
    },

    recommendProductsForUser(payload) {
      return http.post(`${base}/products`, payload);
    },

    recommendSimilarItems(payload) {
      return http.post(`${base}/similarItems`, payload);
    },
  };
};
