const Request = require('../../Request');

module.exports = {
    //Place Order 
    placeOrder(payload) {
        const url = `/order/create`
        return Request.post(`${url}`, payload)
    },

    //fetch Orders 
    getOrders(payload, page) {
        const url = `/order/list`
        return Request.post(`${url}`, payload, { params: { ...page }})
    },

    //fetch Orders
    getOrder(payload) {
        const url = `/order`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    getOrderSchedulling(payload) {
        const url = `/order/scheduling-slots`
        return Request.get(`${url}`, { params: { ...payload }})
    }
}