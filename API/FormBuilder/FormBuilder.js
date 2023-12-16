const Request = require('../../Request');

module.exports = {
    //fetch custom forms
    getCustomForm(service, type, payload) {
        const url = `/store/v1/form-builder/${service}/${type}`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}