import HttpClient from "./core/HttpClient.js";
import UploadClient from "./core/UploadClient.js";
import { v4 as uuid } from "uuid";

import AddressApi from "./API/V1/Address/Address.js";
import AuthApi from "./API/V1/Auth/Auth.js";
import CartApi from "./API/V1/Cart/Cart.js";
import CatalogApi from "./API/V1/Catalog/Catalog.js";
import FormBuilderApi from "./API/V1/FormBuilder/FormBuilder.js";
import GlobalApi from "./API/V1/Global.js";
import HomeApi from "./API/V1/Home/Home.js";
import MerchantApi from "./API/V1/Merchant/Merchant.js";
import NotificationApi from "./API/V1/Notification/Notification.js";
import OrderApi from "./API/V1/Order/Order.js";
import PageApi from "./API/V1/Page/Page.js";
import PageBuilderApi from "./API/V1/PageBuilder/PageBuilder.js";
import PaymentApi from "./API/V1/Payment/Payment.js";
import PlacesApi from "./API/V1/Places/Places.js";
import PromotionalApi from "./API/V1/Promotional/Promotional.js";
import RecommendationApi from "./API/V1/Recommendation/Recommendation.js";
import ReviewApi from "./API/V1/Review/Review.js";
import SearchApi from "./API/V1/Search/Search.js";
import StatsApi from "./API/V1/Stats/Stats.js";
import TenantApi from "./API/V1/Tenant/Tenant.js";
import UploadApi from "./API/V1/Upload/Upload.js";
import WalletApi from "./API/V1/Wallet/Wallet.js";

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
