// JavaScript Document
console.log("Howdy!");

var ul = document.querySelector("ul");
var appa = document.querySelector("#appa");
var naStart = document.querySelector(".start");
var body = document.querySelector("body")


// alle vars van de artikelen
var wan = document.querySelector("#wanArtikel");
var yangchen = document.querySelector("#yangArtikel");
var kuruk = document.querySelector("#kurukArtikel");
var kyoshi = document.querySelector("#kyoshiArtikel");
var roku = document.querySelector("#rokuArtikel");
var aang = document.querySelector("#aangArtikel");
var korra = document.querySelector("#korraArtikel");

// en de knoppen
var knopWan = document.querySelector("#wanknop");
var knopYangchen = document.querySelector("#yangknop");
var knopKuruk = document.querySelector("#kurukknop");
var knopKyoshi = document.querySelector("#kyoshiknop");
var knopRoku = document.querySelector("#rokuknop");
var knopAang = document.querySelector("#aangknop");
var knopKorra = document.querySelector("#korraknop");

var andereKnop = true;

naStart.onclick = showAvatars

knopWan.onclick = wanArtikelShow
knopYangchen.onclick = yangArtikelShow
knopKuruk.onclick = kurukArtikelShow
knopKyoshi.onclick = kyoshiArtikelShow
knopRoku.onclick = rokuArtikelShow
knopAang.onclick = aangArtikelShow
knopKorra.onclick = korraArtikelShow


// om de rest van de content te toggelen

function showAvatars() {
    ul.classList.toggle("show");
    appa.classList.toggle("byeAppa")
    console.log("Howdy!");
    body.classList.toggle("cursor")


    if (andereKnop) {
        naStart.innerHTML = "Back";
        andereKnop = false;
    } else {
        naStart.innerHTML = "Start";
        andereKnop = true;
    }
}



// functies om de artikelen te toggelen

function wanArtikelShow() {
    wan.classList.toggle("artikelShow");
}
function yangArtikelShow() {
    yangchen.classList.toggle("artikelShow");
}
function kurukArtikelShow() {
    kuruk.classList.toggle("artikelShow");
}
function kyoshiArtikelShow() {
    kyoshi.classList.toggle("artikelShow");
}
function rokuArtikelShow() {
    roku.classList.toggle("artikelShow");
}
function aangArtikelShow() {
    aang.classList.toggle("artikelShow");
}
function korraArtikelShow() {
    korra.classList.toggle("artikelShow");
}









//Donna m'n bestie m'n allesje xxx doe de groetjes aan Sanne (dit snap ik zelf niet)
const ulFotos = document.querySelector(".showpics");
const liFotos = ulFotos.querySelectorAll(".showpics li");
let currentIndex = 0;

function updateImage() {
  const offset = -currentIndex * 200;
  ulFotos.style.transform = `translateX(${offset}%)`;
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + liFotos.length) % liFotos.length;
  updateImage();
}

const interval = 3000;
let slideshowInterval = setInterval(() => changeImage(1), interval);

function pauseSlideshow() {
  clearInterval(slideshowInterval);
}

const pijltjeLinks = document.querySelector(".arrowLeft");
const pijltjeRechts = document.querySelector(".arrowRight");

pijltjeLinks.addEventListener("click", () => {
  pauseSlideshow();
  changeImage(-1);
});

pijltjeRechts.addEventListener("click", () => {
  pauseSlideshow();
  changeImage(1);
});

// einde hulp

