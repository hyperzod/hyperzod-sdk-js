export default function createCatalogModule(http) {
  const base = "/store/v1";
  return {
    // List Product Tags
    listProductTags(params = {}) {
      return http.get(`${base}/catalog/productTags`, { params });
    },

    // List Product Labels
    listProductLabels(params = {}) {
      return http.get(`${base}/catalog/productLabels`, { params });
    },

    // List Product Categories
    listProductCategories(params = {}) {
      return http.get(`${base}/catalog/productCategories`, { params });
    },

    // Get Product Category
    getProductCategory(params = {}) {
      return http.get(`${base}/catalog/productCategories/getById`, { params });
    },

    // Search Product
    searchProduct(params = {}) {
      return http.get(`${base}/catalog/search`, { params });
    },

    // List Products
    listProducts(params = {}, page) {
      const queryParams = page ? { ...params, page } : params;
      return http.get(`${base}/catalog/products`, { params: queryParams });
    },

    // Get Product
    getProduct(params = {}) {
      return http.get(`${base}/catalog/products/getById`, { params });
    },

    // Get products list by ids
    getProductsByIds(params = {}) {
      return http.get(`${base}/catalog/products/listByIds`, { params });
    },
  };
}
