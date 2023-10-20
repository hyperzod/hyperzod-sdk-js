const Request = require('../../Request');

module.exports = {
    // List Product Tags
    listProductTags(payload) {
        const url = `/store/v1/catalog/productTags`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Product Labels
    listProductLabels(payload) {
        const url = `/store/v1/catalog/productLabels`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Product Categories
    listProductCategories(payload) {
        const url = `/store/v1/catalog/productCategories`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Get Product Category
    getProductCategory(payload) {
        const url = `/store/v1/catalog/productCategories/getById`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Product by category
    productsByCategory(payload) {
        const url = `/store/v1/search/product-category/products`;
        return Request.get(`${url}`, { params: { ...payload } });
    },
  
    // Paginated products categories
    categoriesList(payload) {
        const url = `/store/v1/search/product-category/list`;
        return Request.get(`${url}`, { params: { ...payload } });
    },

    // List Products
    listProducts(payload, page) {
        const url = `/store/v1/catalog/products?page=${page}`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Get Product
    getProduct(payload) {
        const url = `/store/v1/catalog/product/getById`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Search Product
    searchProduct(payload) {
        const url = `/store/v1/catalog/search`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}