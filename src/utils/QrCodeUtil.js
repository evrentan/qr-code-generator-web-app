export const createGenerateQrCodeRequest = (qrCodeText, size, backGroundColor) => {
    return {
        qrCodeText: qrCodeText,
        size: size,
        backGroundColor: backGroundColor,
    }
}
