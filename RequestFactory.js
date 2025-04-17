const Global = require('./API/Global');
const Tenant = require('./API/Tenant/Tenant');
const Auth = require('./API/Auth/Auth');
const User = require('./API/User/User');
const Places = require('./API/Places/Places');
const Merchant = require('./API/Merchant/Merchant');
const Catalog = require('./API/Catalog/Catalog');
const Promotional = require('./API/Promotional/Promotional');
const AddressBook = require('./API/AddressBook/AddressBook');
const Cart = require('./API/Cart/Cart');
const Wallet = require('./API/Wallet/Wallet');
const Search = require('./API/Search/Search');
const Order = require('./API/Order/Order');
const Review = require('./API/Review/Review');
const Page = require('./API/Page/Page');
const Payment = require('./API/Payment/Payment');
const Notification = require('./API/Notification/Notification');
const Upload = require('./API/Upload/Upload');
const Home = require('./API/Home/Home');
const PageBuilder = require('./API/PageBuilder/PageBuilder');
const FormBuilder = require('./API/FormBuilder/FormBuilder');
const Stats = require('./API/Stats/Stats');
const Recommendation = require('./API/Recommendation/Recommendation');
const repositories = {
    global: Global,
    tenant: Tenant,
    auth: Auth,
    user: User,
    places: Places,
    merchant: Merchant,
    catalog: Catalog,
    promotional: Promotional,
    addressBook: AddressBook,
    cart: Cart,
    wallet: Wallet,
    search: Search,
    order: Order,
    review: Review,
    page: Page,
    payment: Payment,
    notification: Notification,
    upload: Upload,
    home: Home,
    pageBuilder: PageBuilder,
    formBuilder: FormBuilder,
    stats: Stats,
    recommendation: Recommendation
}

const RequestFactory = {
    get: name => repositories[name],
};

module.exports = {RequestFactory}