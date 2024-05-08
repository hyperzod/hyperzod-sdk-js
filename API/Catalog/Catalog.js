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

    // Search Product
    searchProduct(payload) {
        const url = `/store/v1/catalog/search`
        return Request.get(`${url}`, { params: { ...payload }})
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

    // Get products list by ids
    getProductsByIds(payload) {
        const url = `/store/v1/catalog/products/listByIds`
        return Request.get(`${url}`, {params: { ...payload }})
    }
}