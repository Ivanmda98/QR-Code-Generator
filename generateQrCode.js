const generateQrCodeButton = document.querySelector('#generate-qr');
const urlInput = document.querySelector('#url-input');

generateQrCodeButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(!urlInput.value){
        alert("Por favor, inntroduce una url")
        return
    }
    localStorage.setItem('qrUrl', urlInput.value);
    window.location.href= "qrCode.html";
})