import HttpClient from "./core/HttpClient.js";
import UploadClient from "./core/UploadClient.js";
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
    addressBook: AddressApi(http),
    auth: AuthApi(http),
    cart: CartApi(http),
    catalog: CatalogApi(http),
    formBuilder: FormBuilderApi(http),
    global: GlobalApi(http),
    home: HomeApi(http),
    merchant: MerchantApi(http),
    notification: NotificationApi(http),
    order: OrderApi(http),
    page: PageApi(http),
    pageBuilder: PageBuilderApi(http),
    payment: PaymentApi(http),
    places: PlacesApi(http),
    promotional: PromotionalApi(http),
    recommendation: RecommendationApi(http),
    review: ReviewApi(http),
    search: SearchApi(http),
    stats: StatsApi(http),
    tenant: TenantApi(http),
    upload: UploadApi(uploadHttp),
    wallet: WalletApi(http),
    setAuthToken(token) {
      authToken = token || null;
    },
    getUUID() {
      return requestId;
    },
  };
}
