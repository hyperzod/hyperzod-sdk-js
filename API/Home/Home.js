export default function createHomeModule(http) {
  return {
    // Get Home Page data
    homeData(payload) {
      const { data, headers, ...rest } = payload || {};
      return http.post(`/store/v1/home`, data || rest, {
        ...(headers && { headers }),
      });
    },
  };
};
