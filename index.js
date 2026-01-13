import HttpClient from "./core/HttpClient.js";
import UploadClient from "./core/uploadClient.js";
import { v4 as uuid } from "uuid";

import AddressApi from "./API/Address/Address.js";
import AuthApi from "./API/Auth/Auth.js";
import CartApi from "./API/Cart/Cart.js";
import CatalogApi from "./API/Catalog/Catalog.js";
import FormBuilderApi from "./API/FormBuilder/FormBuilder.js";
import GlobalApi from "./API/Global.js";
import HomeApi from "./API/Home/Home.js";
import MerchantApi from "./API/Merchant/Merchant.js";
import NotificationApi from "./API/Notification/Notification.js";
import OrderApi from "./API/Order/Order.js";
import PageApi from "./API/Page/Page.js";
import PageBuilderApi from "./API/PageBuilder/PageBuilder.js";
import PaymentApi from "./API/Payment/Payment.js";
import PlacesApi from "./API/Places/Places.js";
import PromotionalApi from "./API/Promotional/Promotional.js";
import RecommendationApi from "./API/Recommendation/Recommendation.js";
import ReviewApi from "./API/Review/Review.js";
import SearchApi from "./API/Search/Search.js";
import StatsApi from "./API/Stats/Stats.js";
import TenantApi from "./API/Tenant/Tenant.js";
import UploadApi from "./API/Upload/Upload.js";
import WalletApi from "./API/Wallet/Wallet.js";

export default function HyperzodSDK(config = {}) {
  const requestId = uuid();
  let authToken = null;

  const {
    env,
    apiVariant,
    tenant,
    timeout,
    uploadTimeout,
    customHeaders,
    uploadCustomHeaders,
    ...restConfig
  } = config;

  const http = HttpClient({
    env,
    apiVariant,
    tenant,
    timeout,
    customHeaders,
    requestId,
    getAuthToken: () => authToken,
  });

  const uploadHttp = UploadClient({
    env,
    apiVariant,
    tenant,
    timeout: uploadTimeout,
    customHeaders: uploadCustomHeaders,
    requestId,
    getAuthToken: () => authToken,
  });

  return {
    requestId,
    http,
    uploadHttp,
    Address: AddressApi(http),
    Auth: AuthApi(http),
    Cart: CartApi(http),
    Catalog: CatalogApi(http),
    FormBuilder: FormBuilderApi(http),
    Global: GlobalApi(http),
    Home: HomeApi(http),
    Merchant: MerchantApi(http),
    Notification: NotificationApi(http),
    Order: OrderApi(http),
    Page: PageApi(http),
    PageBuilder: PageBuilderApi(http),
    Payment: PaymentApi(http),
    Places: PlacesApi(http),
    Promotional: PromotionalApi(http),
    Recommendation: RecommendationApi(http),
    Review: ReviewApi(http),
    Search: SearchApi(http),
    Stats: StatsApi(http),
    Tenant: TenantApi(http),
    Upload: UploadApi(uploadHttp),
    Wallet: WalletApi(http),
    setAuthToken(token) {
      authToken = token || null;
    },
    getUUID() {
      return requestId;
    },
  };
}
