const Request = require("../../Request");

module.exports = {
  // Get Wallet Transaction History
  getWalletTransactionHistory(payload) {
    const url = `/wallet/transaction-history`;
    return Request.get(`${url}`, { params: { ...payload } });
  },

  // Get Wallet Info
  getWalletInfo(payload) {
    const url = `/wallet/wallet-info`;
    return Request.get(`${url}`, { params: { ...payload } });
  },

  // Get User Wallet
  getWallet(payload) {
    const url = `/store/v1/wallet`;
    return Request.get(`${url}`, { params: { ...payload } });
  },

  // Apply Wallet
  applyWallet(payload) {
    const url = `/store/v1/cart/wallet/apply`;
    return Request.post(`${url}`, payload);
  },

  // Remove Wallet
  removeWallet(payload) {
    const url = `/store/v1/cart/wallet/remove`;
    return Request.post(`${url}`, payload);
  },
};
