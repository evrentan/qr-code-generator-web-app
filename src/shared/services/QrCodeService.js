import axios from "axios";

const qrCodeBackendUrl = 'https://qr-code-generator-backend.herokuapp.com'
const generateQrCodeBaseUrl = '/qrCode/generate';
const generateQrCodeString = '/qrCodeString'

export const QrCodeService = {

    generateQrCode(request) {
        return axios.post(qrCodeBackendUrl + generateQrCodeBaseUrl + generateQrCodeString,
            request);
    },
};
