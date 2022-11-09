const Request = require('./Request')
const { RequestFactory } = require('./RequestFactory')
const { v4 } = require('uuid')

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
const Upload = RequestFactory.get('upload')
const Home = RequestFactory.get('home')

window.HYPERZOD_API_ENV = 'dev'; // dev, production

let myuuid = v4();

localStorage.setItem('UUID', myuuid);
Request.defaults.headers['X-Apm-Transaction-Id'] = myuuid;


const setAuthToken = (token) => {
    if (token === null) {
        delete Request.defaults.headers.Authorization
        return;
    } else {
        Request.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

const boot = async (host, payload) => {
    Request.defaults.headers['X-Tenant'] = host;

    const resp = await Tenant.getBootSettings(payload)

    return resp;
}

const init = async (payload) => {

    if (payload && payload.xApiKey && payload.tenant) {
        return { tenant_id: payload.tenant }
    }
    if (!payload.tenant && !payload.xApiKey) {
        // Get Tenant From Domain
        const tenantResp = await Global.getTenantByDomain({ domain: 'www.google.com' })

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
    Upload,
    Home
}
