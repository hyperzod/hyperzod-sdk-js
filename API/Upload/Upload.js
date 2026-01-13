export default function UploadApi(http) {
  return {
    // upload files
    uploadFiles(payload, type) {
      const uploadType = type === "public" ? "public-upload" : "upload";

      return http.post(`/${uploadType}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  };
}
