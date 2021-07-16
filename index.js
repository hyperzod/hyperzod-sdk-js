const Repository = require('./Repository/Request')
const AuthManager = require('./AuthManager')
const {RepositoryFactory} = require('./Repository/RepositoryFactory')

// Modules To Import
const Global = RepositoryFactory.get('global')
const Auth = RepositoryFactory.get('auth')

const setApiKey = (key) => {
    Repository.defaults.headers['x-api-key'] = key;
}

const init = async (payload) => {

    if(payload && payload.xApiKey && payload.tenant) {
        // Set Api Key for Tenant
        setApiKey(payload.xApiKey)
        return { tenant_id: payload.tenant }
    }
    if(!payload.tenant && !payload.xApiKey) {
        // Get Tenant From Domain
        const tenantResp = await Global.getTenantByDomain({ domain: 'www.google.com' })
        if(tenantResp.data.success) {
            // Set Tenant Data
            const tenantData = tenantResp.data.data
            // Get API Key from Tenant
            const apiKey = await Global.getApiKeyByTenant(tenantData)
            if(apiKey.data.success) {
                // Set Api Key for Tenant
                setApiKey(apiKey.data.data.api_key)
            }
        }
        
        return tenantResp
    }
    return null
}


module.exports = {
    init,
    AuthManager,
    Global,
    Auth
}
