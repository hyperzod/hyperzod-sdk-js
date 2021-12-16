const Request = require('../../Request');

module.exports = {
    //Create Paymemt 
    createPayment(method, payload) {
        const url = `/payment/pg/callback/${method}`
        return Request.get(`${url}`, { params: { ...payload } })
    },

    //Stripe Payment Intent 
    stripeIntent(payload) {
        const url = `/payment/pg/paymentIntent/stripe`
        return Request.post(`${url}`,  payload)
    },
}