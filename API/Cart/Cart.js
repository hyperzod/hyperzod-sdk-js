const Request = require('../../Request');

module.exports = {
    // Update Cart
    updateCart(payload) {
        const url = `/cart/add-to-cart`
        return Request.post(`${url}`, payload)
    },

    // Delete Cart
    deleteCart(payload) {
        const url = `/cart/delete-cart`
        return Request.post(`${url}`, payload)
    },

    // Apply Coupon
    applyCoupon(payload) {
        const url = `/cart/apply-coupon`
        return Request.post(`${url}`, payload)
    },

    // Remove Coupon
    removeCoupon(payload) {
        const url = `/cart/remove-coupon`
        return Request.post(`${url}`, payload)
    },

    // Fetch Cart
    getCart(payload) {
        const url = `/cart/list`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Validate Cart
    validateCart(payload) {
        const url = `/cart/validate-cart`
        return Request.post(`${url}`, payload)
    },

    // Validate Product
    validateProduct(payload) {
        const url = `/cart/validate-product`
        return Request.post(`${url}`, payload)
    },

    //Place Order 
    placeOrder(payload) {
        const url = `/order/create`
        return Request.post(`${url}`, payload)
    },
}