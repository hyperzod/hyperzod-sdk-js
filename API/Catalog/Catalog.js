const Request = require('../../Request');

module.exports = {
    // List Product Tags
    listProductTags(payload) {
        const url = `/catalog/product-tags/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Product Labels
    listProductLabels(payload) {
        const url = `/catalog/product-label/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Product Categories
    listProductCategories(payload) {
        const url = `/catalog/product-category/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Get Product Category
    getProductCategory(payload) {
        const url = `/catalog/product-category/view`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // List Prducts
    listProducts(payload, page) {
        const url = `/catalog/product/list?page=${page}`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Get Product
    getProduct(payload) {
        const url = `/catalog/product/view`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Search Product
    searchProduct(payload) {
        const url = `/catalog/search`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}