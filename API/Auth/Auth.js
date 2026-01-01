export default function createAuthModule(http) {
  const base = "/auth/v1";
  return {
    // Login intent
    loginIntent(payload) {
      return http.post(`${base}/user/login/intent`, payload);
    },

    // Login User
    login(payload) {
      return http.post(`${base}/user/login`, payload);
    },

    // Generate OTP
    otp(payload) {
      return http.post(`${base}/user/otp/generate/login`, payload);
    },

    // Verify User via OTP
    otpVerify(payload) {
      return http.post(`${base}/user/otp/verify`, payload);
    },

    // Change password
    changePassword(payload) {
      return http.post(`${base}/user/resetPassword`, payload);
    },

    // Signup User
    signup(payload) {
      return http.post(`${base}/user/register`, payload);
    },

    // Update User
    updateUser(payload) {
      return http.put(`${base}/user/${payload.user_id}`, payload);
    },

    // Logged In User
    getLoggedInUser(params = {}) {
      return http.get(`${base}/me`, { params });
    },

    // Logout User
    logout(payload) {
      return http.post(`${base}/logout`, payload);
    },

    // Verify Token
    verifyToken(payload) {
      return http.post(`${base}/token/verify`, payload);
    },

    // Change Mobile Number
    updateMobile(payload) {
      return http.post(`${base}/user/updateMobileViaToken`, payload);
    },

    // Delete Account
    deleteAccount(userId) {
      return http.delete(`${base}/user/${userId}`);
    },

    // Forgot Password
    forgotPassword(payload) {
      return http.post(`${base}/user/forgotPassword`, payload);
    },
  };
}
