const Request = require("../../Request");

module.exports = {
  // Get Merchant Page
  getMerchantPage(payload) {
    const url = `/public/v1/page-builder/client/page/merchant`;
    return Request.get(`${url}`, { params: { ...payload } });
  },
};
