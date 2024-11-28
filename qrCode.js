const qrImage = document.querySelector('#qr-code-image');
const qrUrl = localStorage.getItem('qrUrl');
const downloadButton = document.querySelector('#download');
const shareButton = document.querySelector('#share');

if(qrUrl) {
    const qr = new QRCode(qrImage);
    qr.makeCode(qrUrl);
    console.log(qr)
}

function downloadQrCode(){
    const qrCode = document.querySelector('#qr-code-image img');
    if(qrCode) {
        const downloadInstance = document.createElement('a');

        downloadInstance.href = qrCode.src;
        downloadInstance.download = 'qrCode';
        downloadInstance.target = '_blank';
        downloadInstance.click();
    }
}

downloadButton.addEventListener('click', downloadQrCode);