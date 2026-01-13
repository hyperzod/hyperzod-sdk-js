export default function PageBuilderApi(http) {
  const base = "/public/v1/page-builder/client";
  return {
    // Get Merchant Page
    getMerchantPage(params = {}) {
      return http.get(`${base}/page/merchant`, { params });
    },
    // Get Section
    getSection(params = {}) {
      return http.get(`${base}/section`, { params });
    },
  };
}
