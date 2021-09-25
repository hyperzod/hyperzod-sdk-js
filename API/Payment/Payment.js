const Request = require('../../Request');

module.exports = {
    //Create Paymemt 
    createPayment(payload) {
        const url = `/payment/pgcallback/paypal?tenant_id=1`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}