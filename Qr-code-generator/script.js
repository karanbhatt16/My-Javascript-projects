
const qr_url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;
const btn = document.querySelector("button");
const input = document.querySelector("input");
const qr_img = document.querySelector(".qr-img");
const img_box = document.querySelector(".img-box");

function generateQR(){
    if(input.value === ''){
        alert("Enter text or url");
    } else{
        qr_img.src = qr_url + `${input.value}`;
        img_box.style.display = 'flex';
        img_box.classList.add('show');
    }
}

btn.addEventListener('click', generateQR);