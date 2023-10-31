let img1 = document.getElementById("pong");
let img2 = document.getElementById("threadwear");
let img3 = document.getElementById("webshop");
let backdrop = document.getElementById("backdrop");
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");

img1.onclick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    showModal1();
}

img2.onclick = (event) => {
    event.preventDefault();
    showModal2();
}

img3.onclick = (event) => {
    event.preventDefault();
    showModal3();
}


function hideModal() {
    backdrop.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
}

function showModal1() {
    backdrop.style.display = "block";
    modal1.style.display = "block";
}

function showModal2() {
    backdrop.style.display = "block";
    modal2.style.display = "block";
}

function showModal3() {
    backdrop.style.display = "block";
    modal3.style.display = "block";
}

backdrop.onclick = hideModal;
hideModal();

