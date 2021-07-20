const Request = require('../Request');

module.exports = {
    // Get Tenant By Domain
    getTenantByDomain(payload) {
        const url = `/tenant/getTenantIdByDomain`
        return Request.get(`${url}`, { params: { ...payload } })
    },

    // Get API Key By Tenant
    getApiKeyByTenant(payload) {
        const url = `/api-key/getApiKeyByTenantId`
        return Request.get(`${url}`, { params: { ...payload } })
    }
}