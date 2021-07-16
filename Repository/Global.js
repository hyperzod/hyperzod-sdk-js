const Repository = require('./Repository');

module.exports = {
    // Get Tenant By Domain
    getTenantByDomain(payload) {
        const get_tenant_by_domain = `/tenant/getTenantIdByDomain`
        return Repository.get(`${get_tenant_by_domain}`, { params: { ...payload } })
    },

    // Get API Key By Tenant
    getApiKeyByTenant(payload) {
        const get_tenant_api = `/api-key/getApiKeyByTenantId`
        return Repository.get(`${get_tenant_api}`, { params: { ...payload } })
    },

    // Get Boot Settings
    getBootSettings(payload) {
        const get_boot_settings = `/app/client/boot`
        return Repository.get(`${get_boot_settings}`, { params: { ...payload } })
    },

    // Search Places
    searchPlaces(payload) {
        const places_search = `/places-search/search`
        return Repository.post(`${places_search}`, payload)
    },

    // Reverse Geocode
    reverseGeocode(payload) {
        const reverse_geocode = `/places-search/reverse-geocode`
        return Repository.post(`${reverse_geocode}`, payload)
    }
}