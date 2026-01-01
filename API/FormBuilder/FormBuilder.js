export default function FormBuilderApi(http) {
  return {
    //fetch custom forms
    getCustomForm(service, type, params = {}) {
      return http.get(`/store/v1/form-builder/${service}/${type}`, {
        params,
      });
    },
  };
}
