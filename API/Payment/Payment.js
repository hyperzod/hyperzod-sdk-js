const Request = require('../../Request');

module.exports = {
    //Create Paymemt 
    createPayment(method, payload) {
        const url = `/payment/pgcallback/${payload.payment_type}/${method}`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}