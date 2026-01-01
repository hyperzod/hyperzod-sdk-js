export default function createPaymentModule(http) {
  const base = "/store/v1/payment";
  return {
    // Get Payment Modes
    getPaymentModes(params = {}) {
      return http.get(`${base}/payment-mode/tenant/client`, { params });
    },

    // Create Payment
    createPayment(method, params = {}) {
      return http.get(`${base}/pg/callback/${method}`, { params });
    },

    // Create Payment Intent
    createPaymentIntent(pg_mode, payload) {
      return http.post(`${base}/pg/paymentIntent/${pg_mode}`, payload);
    },

    // Get Payment Intent
    getPaymentIntent(pg_mode) {
      return http.get(`${base}/pg/paymentIntent/${pg_mode}`);
    },
  };
}
