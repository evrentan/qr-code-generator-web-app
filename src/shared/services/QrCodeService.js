import axios from "axios";

const generateQrCodeBaseUrl = '/qrCode/generate';
const generateQrCodeString = '/qrCodeString'

export const QrCodeService = {

    generateQrCode(request) {
        return axios.post(generateQrCodeBaseUrl + generateQrCodeString,
            request);
    },
};
