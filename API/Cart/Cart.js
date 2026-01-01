export default function CartApi(http) {
  const base = "/store/v1";
  return {
    // Update Cart
    updateCart(payload) {
      return http.post(`${base}/cart`, payload);
    },

    // Delete Cart
    deleteCart(params = {}) {
      return http.delete(`${base}/cart`, { params });
    },

    // Apply Coupon
    applyCoupon(payload) {
      return http.post(`${base}/cart/coupon/apply`, payload);
    },

    // Remove Coupon
    removeCoupon(payload) {
      return http.post(`${base}/cart/coupon/remove`, payload);
    },

    // Fetch Cart
    getCart(params = {}) {
      return http.get(`${base}/cart`, { params });
    },

    // Fetch Carts
    getCarts(params = {}) {
      return http.get(`${base}/cart/list-by-ids`, { params });
    },

    // Validate Cart
    validateCart(params = {}) {
      return http.get(`${base}/cart/validate`, { params });
    },

    // Validate Product
    validateProduct(payload) {
      return http.post(`${base}/cart/validate/product`, payload);
    },
  };
}
