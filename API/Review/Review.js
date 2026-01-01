export default function createReviewModule(http) {
  const base = "/store/v1/review";
  return {
    // Review Merchant
    reviewMerchant(payload) {
      return http.post(`${base}`, payload);
    },

    getTopMerchantReviews(params = {}) {
      return http.get(`${base}/top-merchant-reviews`, { params });
    },
  };
}
