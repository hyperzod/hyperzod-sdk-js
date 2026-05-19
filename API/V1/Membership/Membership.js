export default function MembershipApi(http) {
  const base = "/store/v1";
  return {
    // Get current user membership by ID
    getMembership(params = {}) {
      const { id } = params;
      return http.get(`${base}/membership/user-membership/${id}`);
    },
  };
}
