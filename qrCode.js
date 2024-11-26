const qrImage = document.querySelector('#qr-code-image');
const qrUrl = localStorage.getItem('qrUrl');

if(qrUrl) {
    const qr = new QRCode(qrImage);
    qr.makeCode(qrUrl);
}