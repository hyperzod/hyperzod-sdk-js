export default function createPageModule(http) {
  const base = "/store/v1/page";
  return {
    get(params) {
      return http.get(`${base}`, { params });
    },

    list(params) {
      return http.get(`${base}/list`, { params });
    },
  };
}
