// VARIABLES
let articleDivs = document.querySelectorAll(".article-container div");
let album = document.querySelector('.fotoalbum');
let curl = document.querySelector('.curl');
let cameraIcon = document.querySelector(".fotoalbum img");


curl.addEventListener('mouseenter',()=>{
    album.classList.add('fotoalbum-changed');
    cameraIcon.src ="./imgs/fotak-color.png";
    
})

curl.addEventListener('mouseleave',()=>{
    album.classList.remove('fotoalbum-changed');
    cameraIcon.src ="./imgs/fotak.png";
})

curl.addEventListener('click',()=>{
    window.location.href = "album.html";
})




articleDivs.forEach(div =>{

    div.onmouseover = ()=>{div.classList.add("selected")};
    div.onmouseout = ()=>{div.classList.remove("selected")};

})


