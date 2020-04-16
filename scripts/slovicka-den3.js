// AUDIO

var sound = new Audio();

const playArigatogozajimasButton = document.querySelector("#play-arigatogozajimas");
const playArigatogozajimastaButton = document.querySelector("#play-arigatogozajimasta");
const playKonicivaButton = document.querySelector("#play-koniciva");
const playOhajoButton = document.querySelector("#play-ohajo");
const playOhajogozajimasButton = document.querySelector("#play-ohajogozajimas");

playArigatogozajimasButton.addEventListener("click",()=>{
    sound.src ="../sounds/arigatogozajimas.mp3";
    sound.play();
})

playArigatogozajimastaButton.addEventListener("click",()=>{
    sound.src ="../sounds/arigatogozajimasta.mp3";
    sound.play();
})

playKonicivaButton.addEventListener("click",()=>{
    sound.src ="../sounds/koniciva.mp3";
    sound.play();
})

playOhajoButton.addEventListener("click",()=>{
    sound.src ="../sounds/ohajo.mp3";
    sound.play();
})

playOhajogozajimasButton.addEventListener("click",()=>{
    sound.src ="../sounds/ohajogozajimas.mp3";
    sound.play();
})
//----------------------------------------------------------------------
