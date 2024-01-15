const Request = require('../../Request');

module.exports = {
    // upload files
    uploadFiles(payload, type) {
        const uploadType = type === 'public' ? 'public-upload' : 'upload';

        const api_url_dev = `https://upload.hyperzod.dev/${uploadType}`;
        const api_url_production = `https://upload.hyperzod.app/${uploadType}`;

        const url = window.HYPERZOD_API_ENV == 'production' ? api_url_production : api_url_dev
        return Request.post(`${url}`, payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}