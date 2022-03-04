const Request = require('../../Request');

module.exports = {
    // Update Cart
    updateCart(payload) {
        const url = `/store/v1/cart`
        return Request.post(`${url}`, payload)
    },

    // Delete Cart
    deleteCart(payload) {
        const url = `/store/v1/cart`
        return Request.delete(`${url}`, { params: { ...payload }})
    },

    // Apply Coupon
    applyCoupon(payload) {
        const url = `/store/v1/cart/coupon/apply`
        return Request.post(`${url}`, payload)
    },

    // Remove Coupon
    removeCoupon(payload) {
        const url = `/store/v1/cart/coupon/remove`
        return Request.post(`${url}`, payload)
    },

    // Fetch Cart
    getCart(payload) {
        const url = `/store/v1/cart`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Validate Cart
    validateCart(payload) {
        const url = `/store/v1/cart/validate`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Validate Product
    validateProduct(payload) {
        const url = `/store/v1/cart/validate/product`
        return Request.post(`${url}`, payload)
    },
}