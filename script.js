let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrInput = document.getElementById("qrInput");

function generateQRcode() {
  if (qrInput.value.trim().length === 0) {
    qrInput.classList.add("error");
    setTimeout(() => {
      qrInput.classList.remove("error");
    }, 1000);
    return;
  }

  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrInput.value;
  imgBox.classList.add("show-img");
}
