const Request = require('../../Request');

module.exports = {
    // Get Search
    getSearch(payload) {
        const url = `/store/v1/search`

        return Request.get(`${url}`, { params: { ...payload }});
    },

    // Product by category
    getProductsByCategory(payload) {
        const url = `/store/v1/search/product-category/products`;
        return Request.get(`${url}`, { params: { ...payload } });
    },
  
    // Paginated products categories
    getProductCategories(payload) {
        const url = `/store/v1/search/product-category/list`;
        return Request.get(`${url}`, { params: { ...payload } });
    },

    getProduct(payload) {
        const url = `/store/v1/search/product/view`;
        return Request.get(`${url}`, { params: { ...payload } });
      },
    
    searchMerchantProducts(payload) {
      const url = `/store/v1/search/merchant/products`;
      return Request.get(`${url}`, { params: { ...payload } });
    },
    
    getProductLabels(payload) {
      const url = `/store/v1/search/product-label/list`;
      return Request.get(`${url}`, { params: { ...payload } });
    },

    getMerchantData(payload) {
      const url = `/store/v1/search/merchant/view`;
      return Request.get(`${url}`, { params: { ...payload } });
    },
}