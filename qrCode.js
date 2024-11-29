const qrImage = document.querySelector('#qr-code-image');
const qrUrl = localStorage.getItem('qrUrl');
const downloadButton = document.querySelector('#download');
const shareButton = document.querySelector('#share');

if(qrUrl) {
    const qr = new QRCode(qrImage);
    qr.makeCode(qrUrl);
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
function shareQuote(){
    if(qrUrl) {
        navigator.clipboard.writeText(qrUrl);
        shareButton.style.backgroundColor = 'green';
        shareButton.setAttribute('value', 'Copiado');
        setTimeout(() => {
            shareButton.style.backgroundColor = '#3662E3';
            shareButton.setAttribute('value', 'Share');
        },3000)
    }
}
downloadButton.addEventListener('click', downloadQrCode);
shareButton.addEventListener('click', shareQuote);