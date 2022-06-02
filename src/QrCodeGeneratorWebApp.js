import {useState} from 'react';
import './QrCodeGeneratorWebApp.css';
import {QrCodeService} from "./shared/services/QrCodeService";
import {createGenerateQrCodeRequest} from "./utils/QrCodeUtil";

function QrCodeGeneratorWebApp() {
    const [qrCodeText, setQrCodeText] = useState("");
    const [size, setSize] = useState(400);
    const [backGroundColor, setBackGroundColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");


    // Updating the input qrCodeText when user clicks on the generate button & call backend api to generate QR code
    function handleClick() {
        QrCodeService.generateQrCode(createGenerateQrCodeRequest(qrCodeText, size, backGroundColor))
            .then(response => {
                let sourceValue = "data:image/png;base64," + response.data;
                setQrCode(sourceValue);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    }

    return (
        <div className="QrCodeGeneratorWebApp">
            <h1>QR Code Generator</h1>
            <div className="input-box">
                <div className="gen">
                    <input name="barcodeText" type="text" required onChange={
                        (e) => {
                            setQrCodeText(e.target.value)
                        }}
                           placeholder="Enter text to Generate QR Code"/>&nbsp;&nbsp;
                    <button className="button"
                            onClick={handleClick}>
                        Generate
                    </button>
                </div>
                <div className="extra">
                    {/*<h5>Background Color:</h5>
            <input name="backGroundColor" type="color" onChange={(e) =>
            { setBackGroundColor(e.target.value.substring(1)) }} />*/}
                    <h5>Dimension:</h5>
                    <h5>{size}px</h5>
                    <input name="size" type="range" id="myRange" min="200" max="600"
                           value={size} onChange={(e) => {
                        setSize(e.target.value)
                    }}/>
                </div>
            </div>
            <div className="output-box">
                <img src={qrCode} alt="Generated QR Code"/>
                <a href={qrCode} download="QRCode">
                    <button type="button">Download</button>
                </a>
            </div>
        </div>
    );
}

export default QrCodeGeneratorWebApp;