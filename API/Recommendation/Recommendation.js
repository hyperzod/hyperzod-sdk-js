const Request = require('../../Request');

module.exports = {

  recommendProductsWithinMerchant(payload) {
    const url = `/store/v1/recommend/products/merchant`
    return Request.post(`${url}`, payload)
},

  recommendMerchantsForUser(payload) {
    const url = `/store/v1/recommend/merchants`
    return Request.post(`${url}`, payload.data, {headers: payload.headers})
},

  recommendProductsForUser(payload) {
    const url = `/store/v1/recommend/products`
    return Request.post(`${url}`, payload)
},

};