const Request = require('../../Request');

module.exports = {
    //Create Paymemt 
    createPayment(method, payload) {
        const url = `/payment/pgcallback/${method}`
        return Request.get(`${url}`, { params: { ...payload } })
    },
}