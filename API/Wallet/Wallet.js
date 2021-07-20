const Request = require('../../Request');

module.exports = {
    // Get Wallet Transaction History
    getWalletTransactionHistory(payload) {
        const url = `/wallet/transaction-history`
        return Request.get(`${url}`, { params: { ...payload }})
    },

    // Get Wallet Info
    getWalletInfo(payload) {
        const url = `/wallet/wallet-info`
        return Request.get(`${url}`, { params: { ...payload }})
    },
}