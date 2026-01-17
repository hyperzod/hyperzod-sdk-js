export default function OrderApi(http) {
  const base = "/store/v1";
  return {
    //Place Order
    placeOrder(payload) {
      return http.post(`${base}/order`, payload);
    },

    //fetch Orders
    getOrders(params = {}) {
      return http.get(`${base}/order/getOrdersByUserId`, { params });
    },

    //fetch Order
    getOrder(params = {}) {
      return http.get(`${base}/order`, { params });
    },

    //fetch order scheduling slots
    getOrderScheduling(params = {}) {
      return http.get(`${base}/order/getSchedulingSlots`, { params });
    },

    //fetch order scheduling slots (legacy method name)
    getOrderSchedulling(params = {}) {
      return this.getOrderScheduling(params);
    },

    //Get Order Tips
    getOrderTip(params = {}) {
      return http.get(`${base}/order/getOrderTip`, { params });
    },
  };
}
