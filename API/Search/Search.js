export default function SearchApi(http) {
  const base = "/store/v1/search";
  return {
    // Get Search
    getSearch(params = {}) {
      return http.get(`${base}`, { params });
    },

    // Product by category
    getProductsByCategory(params = {}) {
      return http.get(`${base}/product-category/products`, { params });
    },

    // Paginated products categories
    getProductCategories(params = {}) {
      return http.get(`${base}/product-category/list`, { params });
    },

    getProductCategoriesByIds(params = {}) {
      return http.get(`${base}/product-category/list-by-ids`, { params });
    },

    getProduct(params = {}) {
      return http.get(`${base}/product/view`, { params });
    },

    //Get Product by Ids
    getProductByIds(params = {}) {
      return http.get(`${base}/product/list-by-ids`, { params });
    },

    //Search Merchant Products
    searchMerchantProducts(params = {}) {
      return http.get(`${base}/merchant/products`, { params });
    },

    getProductLabels(params = {}) {
      return http.get(`${base}/product-label/list`, { params });
    },

    getMerchantData(params = {}) {
      return http.get(`${base}/merchant/view`, { params });
    },

    // Find Nearby Merchants
    findNearByMerchants(payload) {
      const { data, headers, ...rest } = payload || {};
      return http.post(`${base}/merchant/nearby`, data || rest, {
        ...(headers && { headers }),
      });
    },
  };
};
