export default function WalletApi(http) {
  const base = "/store/v1";
  return {
    // Get Wallet Transaction History
    getWalletTransactionHistory(params = {}) {
      return http.get(`/wallet/transaction-history`, { params });
    },

    // Get Wallet Info
    getWalletInfo(params = {}) {
      return http.get(`/wallet/wallet-info`, { params });
    },

    // Get User Wallet
    getWallet(params = {}) {
      return http.get(`${base}/wallet`, { params });
    },

    // Apply Wallet
    applyWallet(payload) {
      return http.post(`${base}/cart/wallet/apply`, payload);
    },

    // Remove Wallet
    removeWallet(payload) {
      return http.post(`${base}/cart/wallet/remove`, payload);
    },
  };
}
