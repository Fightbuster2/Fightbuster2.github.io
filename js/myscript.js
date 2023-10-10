
let img1 = document.getElementById("pong");
let backdrop = document.getElementById("backdrop");
let modal1 = document.getElementById("modal1");

img1.onclick = showModal1;

backdrop.onclick = hideModal;

function hideModal(){
    backdrop.style.display = "none";
    modal1.style.display = "none";
}

function showModal1(){
    modal1.style.display = "block";
    backdrop.style.display = "block";
}
hideModal()