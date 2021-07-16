const Repository = require('./Repository');

const get_tenant_by_domain = `/tenant/getTenantIdByDomain`
const get_tenant_api = `/api-key/getApiKeyByTenantId`
const get_boot_settings = `/app/client/boot`
const places_search = `/places-search/search`
const reverse_geocode = `/places-search/reverse-geocode`

module.exports = {
    // Get Tenant By Domain
    getTenantByDomain(payload) {
        return Repository.get(`${get_tenant_by_domain}`, { params: { ...payload } })
    },

    // Get API Key By Tenant
    getApiKeyByTenant(payload) {
        return Repository.get(`${get_tenant_api}`, { params: { ...payload } })
    },

    // Get Boot Settings
    getBootSettings(payload) {
        return Repository.get(`${get_boot_settings}`, { params: { ...payload } })
    },

    // Search Places
    searchPlaces(payload) {
        return Repository.post(`${places_search}`, payload)
    },

    // Reverse Geocode
    reverseGeocode(payload) {
        return Repository.post(`${reverse_geocode}`, payload)
    }
}