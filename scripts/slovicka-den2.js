// AUDIO

var sound = new Audio();

const playSumimasenButton = document.querySelector("#play-sumimasen");
const playArigatoButton = document.querySelector("#play-arigato");

playSumimasenButton.addEventListener("click",()=>{
    sound.src ="../sounds/sumimasen.mp3";
    sound.play();
})

playArigatoButton.addEventListener("click",()=>{
    sound.src ="../sounds/arigato.mp3";
    sound.play();
})
//----------------------------------------------------------------------
