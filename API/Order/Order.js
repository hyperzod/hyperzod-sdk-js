const Request = require('../../Request');

module.exports = {
    //Place Order 
    placeOrder(payload) {
        const url = `/store/v1/order`
        return Request.post(`${url}`, payload)
    },

    //fetch Orders 
    getOrders(payload) {
        const url = `/store/v1/order/getOrdersByUserId`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    //fetch Orders
    getOrder(payload) {
        const url = `/store/v1/order`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    //fetch order schedulling slots
    getOrderSchedulling(payload) {
        const url = `/store/v1/order/getSchedulingSlots`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    //fetch custom order form
    getCustomOrderForm(type, payload) {
        const url = `/store/v1/order/custom-forms/${type}`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}