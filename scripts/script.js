// VARIABLES
let articleDivs = document.querySelectorAll(".article-container div");
let album = document.querySelector('.fotoalbum');
let curl = document.querySelector('.curl');


curl.addEventListener('mouseenter',()=>{
    album.classList.add('fotoalbum-changed');
})

curl.addEventListener('mouseleave',()=>{
    album.classList.remove('fotoalbum-changed');
})

curl.addEventListener('click',()=>{
    window.location.href = "album.html";
})




articleDivs.forEach(div =>{

    div.onmouseover = ()=>{div.classList.add("selected")};
    div.onmouseout = ()=>{div.classList.remove("selected")};

})


