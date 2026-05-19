export default function MembershipApi(http) {
  const base = "/store/v1";
  return {
    // Get Membership by ID
    getMembership(params = {}) {
      const { id, ...rest } = params;
      return http.get(`${base}/membership/user-membership`, {
        params: { ...(id ? { id } : {}), ...rest },
      });
    },
  };
}
