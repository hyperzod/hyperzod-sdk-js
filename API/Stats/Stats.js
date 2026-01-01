export default function createStatsModule(http) {
  return {
    // Check User is in Segment
    checkUserInSegment(params = {}) {
      return http.get(`/store/v1/stats/checkUserInSegment`, { params });
    },
  };
};
