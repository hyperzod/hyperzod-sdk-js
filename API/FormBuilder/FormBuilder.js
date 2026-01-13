export default function FormBuilderApi(http) {
  return {
    //fetch custom forms
    getCustomForm(payload) {
      return http.get(
        `/store/v1/form-builder/${payload.service}/${payload.type}`,
        {
          params: payload.params || {},
        }
      );
    },
  };
}
