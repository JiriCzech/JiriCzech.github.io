
// VARIABLES

// const infoGate = document.querySelector("#info-gate");
// const spanGate = document.querySelector("#gate");

const arrowToTop = document.querySelector("#arrow-to-top");
const arrowBack = document.querySelector("#arrow-back");

const hr = document.querySelector("hr:first-of-type");

const aHrefs = document.querySelectorAll("a");

const tips = document.querySelectorAll(".tip");
//----------------------------------------------------------------------

// Word tip 
if (tips != null){
    tips.forEach(tip =>{
      let wordTip = document.createElement("span");
      wordTip.textContent = "tip";
      let br = document.createElement("br");
      tip.appendChild(br);
      tip.append(wordTip);
      wordTip.classList.add("word-tip");
    //   let top = tip.offsetHeight *3;
    //   wordTip.style.top = top+"px";

    //   console.log(top);


    })
}

// SETUP

//add popWindows
addAllPopWindowsToInfoElements();

// links open in new tab
if(aHrefs !== null){
    aHrefs.forEach(a =>{
        a.setAttribute("target", "_blank");
    })
}

//---------------------------------------------------------------------------------------------------

// addInfoWindowToElement(infoGate,spanGate);

showOrHideArrow();

arrowToTop.addEventListener("click", ()=>{
    smoothScrollToPosition(event, 0);
} )

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY);
    showOrHideArrow();  
} )

arrowBack.addEventListener("click", ()=>{
    window.location.href = "../index.html";
})


//----------------------------------------------------------------------

// FUNCTIONS

// Show or hide Arrow
function showOrHideArrow(){
    if (window.scrollY < getElementPosition(hr).y){
        arrowToTop.classList.add("hidden");
    }
    else{
        arrowToTop.classList.remove("hidden");
    }
}

//----------------------------------------------------------------------

// JENY NA CZK

let jenyElements = document.querySelectorAll("span.jeny");



jenyElements.forEach(jenyElement =>{

    //Create and style pop window
    let czkWindow = document.createElement("div");
    czkWindow.style.width = getElementPosition(jenyElement).width *2;
    console.log('sirka',getElementPosition(jenyElement).width *2);
    console.log('sirka skutecna',czkWindow.style.width);

    czkWindow.style.position = "absolute";
    czkWindow.style.display = "none";
    czkWindow.classList.add("czk-pop");

    //Extract only digits from string
    let jenyElementText = jenyElement.textContent;
        // search for every digits (d+) globaly (g) in the string and conected them with ""
    let jeny = jenyElementText.match(/\d+/g).join("");

    // Jeny to czk  
    let czkPrice = Math.round(jeny * 0.23); 
    let czkPriceText =  czkPrice + " czk"
    console.log(czkPriceText);

    czkWindow.textContent = czkPriceText;
    document.body.appendChild(czkWindow);

    // my function 
    addPopWindowToInfoElement(czkWindow,jenyElement);

});
//----------------------------------------------------------------------










