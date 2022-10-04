const Request = require('../../Request');

module.exports = {
    // Create Paymemt 
    createPayment(method, payload) {
        const url = `/store/v1/payment/pg/callback/${method}`
        return Request.get(`${url}`, { params: { ...payload } })
    },

    // Payment Intent 
    createPaymentIntent(pg_mode, payload) {
        const url = `/store/v1/payment/pg/paymentIntent/${pg_mode}`
        return Request.post(`${url}`, payload)
    },
}