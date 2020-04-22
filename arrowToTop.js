const arrowToTop = document.querySelector("#arrow-to-top");

showOrHideArrow();

arrowToTop.addEventListener("click", ()=>{
    smoothScrollToPosition(event, 0);
} )

window.addEventListener("scroll", ()=>{
    // console.log(window.scrollY);
    showOrHideArrow();  
} )

// Show or hide Arrow
function showOrHideArrow(){
    if (window.scrollY < 300){
        arrowToTop.classList.add("hidden");
    }
    else{
        arrowToTop.classList.remove("hidden");
    }
}