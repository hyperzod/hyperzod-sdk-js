const Request = require('../../Request');

module.exports = {
    //Place Order 
    placeOrder(payload) {
        const url = `/store/v1/order`
        return Request.post(`${url}`, payload)
    },

    //fetch Orders 
    getOrders(payload, page) {
        const url = `/store/v1/order/getOrdersByUserId`
        return Request.post(`${url}`, payload, { params: { ...page }})
    },

    //fetch Orders
    getOrder(payload) {
        const url = `/store/v1/order`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    getOrderSchedulling(payload) {
        const url = `/store/v1/order/getSchedulingSlots`
        return Request.get(`${url}`, { params: { ...payload }})
    }
}