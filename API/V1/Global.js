export default function GlobalApi(http) {
  return {
    // Get Tenant By Domain
    getTenantByDomain(params = {}) {
      return http.get(`/tenant/getTenantIdByDomain`, { params });
    },

    // Get API Key By Tenant
    getApiKeyByTenant(params = {}) {
      return http.get(`/api-key/getApiKeyByTenantId`, { params });
    },
  };
}
