export default function MembershipApi(http) {
  const base = "/store/v1";
  return {
    // Get current user membership
    getMembership() {
      return http.get(`${base}/membership/user-membership`);
    },
  };
}
