export default function createNotificationModule(http) {
  return {
    //Push Auth
    pushAuth(payload) {
      return http.post(`public/v1/notification/push/token`, payload);
    },
  };
}
