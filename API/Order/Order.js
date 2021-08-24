const Request = require('../../Request');

module.exports = {
    //Place Order 
    placeOrder(payload) {
        const url = `/order/create`
        return Request.post(`${url}`, payload)
    },

    //fetch Orders 
    getOrders(payload) {
        const url = `/order/user/orders`
        return Request.get(`${url}`, { params: { ...payload }})
    },

}