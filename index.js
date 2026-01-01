import createHttpClient from "./core/HttpClient.js";
import createUploadClient from "./core/UploadClient.js";
import { v4 as uuid } from "uuid";

import createAddressModule from "./API/AddressBook/AddressBook.js";
import createAuthModule from "./API/Auth/Auth.js";
import createCartModule from "./API/Cart/Cart.js";
import createCatalogModule from "./API/Catalog/Catalog.js";
import createFormBuilderModule from "./API/FormBuilder/FormBuilder.js";
import createGlobalModule from "./API/Global.js";
import createHomeModule from "./API/Home/Home.js";
import createMerchantModule from "./API/Merchant/Merchant.js";
import createNotificationModule from "./API/Notification/Notification.js";
import createOrderModule from "./API/Order/Order.js";
import createPageModule from "./API/Page/Page.js";
import createPageBuilderModule from "./API/PageBuilder/PageBuilder.js";
import createPaymentModule from "./API/Payment/Payment.js";
import createPlacesModule from "./API/Places/Places.js";
import createPromotionalModule from "./API/Promotional/Promotional.js";
import createRecommendationModule from "./API/Recommendation/Recommendation.js";
import createReviewModule from "./API/Review/Review.js";
import createSearchModule from "./API/Search/Search.js";
import createStatsModule from "./API/Stats/Stats.js";
import createTenantModule from "./API/Tenant/Tenant.js";
import createUploadModule from "./API/Upload/Upload.js";
import createWalletModule from "./API/Wallet/Wallet.js";

export default function createHyperzodSDK(config = {}) {
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

  const http = createHttpClient({
    env,
    apiVariant,
    tenant,
    timeout,
    customHeaders,
    requestId,
    getAuthToken: () => authToken,
  });

  const uploadHttp = createUploadClient({
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
    addressBook: createAddressModule(http),
    auth: createAuthModule(http),
    cart: createCartModule(http),
    catalog: createCatalogModule(http),
    formBuilder: createFormBuilderModule(http),
    global: createGlobalModule(http),
    home: createHomeModule(http),
    merchant: createMerchantModule(http),
    notification: createNotificationModule(http),
    order: createOrderModule(http),
    page: createPageModule(http),
    pageBuilder: createPageBuilderModule(http),
    payment: createPaymentModule(http),
    places: createPlacesModule(http),
    promotional: createPromotionalModule(http),
    recommendation: createRecommendationModule(http),
    review: createReviewModule(http),
    search: createSearchModule(http),
    stats: createStatsModule(http),
    tenant: createTenantModule(http),
    upload: createUploadModule(uploadHttp),
    wallet: createWalletModule(http),
    setAuthToken(token) {
      authToken = token || null;
    },
    getUUID() {
      return requestId;
    },
  };
}
