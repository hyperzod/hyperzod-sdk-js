const Request = require('./Request')
const { RequestFactory } = require('./RequestFactory')

// Modules To Import
const Global = RequestFactory.get('global')
const Tenant = RequestFactory.get('tenant')
const Places = RequestFactory.get('places')
const Auth = RequestFactory.get('auth')
const Merchant = RequestFactory.get('merchant')
const Catalog = RequestFactory.get('catalog')
const Promotional = RequestFactory.get('promotional')
const AddressBook = RequestFactory.get('addressBook')
const Cart = RequestFactory.get('cart')
const Wallet = RequestFactory.get('wallet')
const Search = RequestFactory.get('search')
const Order = RequestFactory.get('order')
const Review = RequestFactory.get('review')
const Page = RequestFactory.get('page')
const Payment = RequestFactory.get('payment')
const Notification = RequestFactory.get('notification')
const Home = RequestFactory.get('home')

const setApiKey = (key) => {
    Request.defaults.headers['x-api-key'] = key;
}

const setAuthToken = (token) => {
    if(token === null) {
        delete Request.defaults.headers.Authorization
        return;
    } else {
        Request.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

const boot = async (host, payload) => {
    Request.defaults.headers['x-domain'] = host;

    const resp = await Tenant.getBootSettings(payload)

    if (resp.data.success) {
        // Set Api Key for Tenant
        setApiKey(resp.data.data.api_key)
        delete Request.defaults.headers['x-domain']
    }

    return resp;
}

const init = async (payload) => {

    if (payload && payload.xApiKey && payload.tenant) {
        // Set Api Key for Tenant
        setApiKey(payload.xApiKey)
        return { tenant_id: payload.tenant }
    }
    if (!payload.tenant && !payload.xApiKey) {
        // Get Tenant From Domain
        const tenantResp = await Global.getTenantByDomain({ domain: 'www.google.com' })
        if (tenantResp.data.success) {
            // Set Tenant Data
            const tenantData = tenantResp.data.data
            // Get API Key from Tenant
            const apiKey = await Global.getApiKeyByTenant(tenantData)
            if (apiKey.data.success) {
                // Set Api Key for Tenant
                setApiKey(apiKey.data.data.api_key)
            }
        }

        return tenantResp
    }
    return null
}


module.exports = {
    boot,
    init,
    setAuthToken,
    Global,
    Tenant,
    Places,
    Auth,
    Merchant,
    Catalog,
    Promotional,
    AddressBook,
    Cart,
    Wallet,
    Search,
    Order,
    Review,
    Page,
    Payment,
    Notification,
    Home
}
