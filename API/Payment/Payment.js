const Request = require('../../Request');

module.exports = {
    //Create Paymemt 
    createPayment(data, payload) {
        const url = `/payment/pgcallback/${data.method}?tenant_id=${data.id}`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}