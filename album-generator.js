// PHOTOS SOURCES

let srcToSmallPhotoFolder = "./imgs/small-photos/";
let srcToBigPhotoFolder = "./imgs/big-photos/";

// All photos names in one big string (sorted by date)
let listOfPhotosNames ="02-17 (1).jpg, 02-18 (1).jpg, 02-18 (2).jpg,	02-18 (3).jpg,	02-18 (4).jpg,	02-18 (5).jpg,	02-18 (6).jpg,	02-18 (7).jpg,	02-18 (8).jpg,	02-19 (1).jpg,	02-19 (2).jpg,	02-19 (3).jpg,	02-19 (4).jpg,	02-19 (5).jpg,	02-19 (6).jpg,	02-19 (7).jpg,	02-19 (8).jpg,	02-19 (9).jpg,	02-19 (10).jpg,	02-19 (11).jpg,	02-19 (12).jpg,	02-19 (13).jpg,	02-19 (14).jpg,	02-19 (15).jpg,	02-19 (16).jpg,	02-19 (17).jpg,	02-19 (18).jpg,	02-19 (19).jpg,	02-19 (20).jpg,	02-19 (21).jpg,	02-19 (22).jpg,	02-19 (23).jpg,	02-19 (24).jpg,	02-19 (25).jpg,	02-19 (26).jpg,	02-19 (27).jpg,	02-19 (28).jpg,	02-19 (29).jpg,	02-19 (30).jpg,	02-19 (31).jpg,	02-19 (32).jpg,	02-19 (33).jpg,	02-19 (34).jpg,	02-19 (35).jpg,	02-19 (36).jpg,	02-19 (37).jpg,	02-19 (38).jpg,	02-19 (39).jpg,	02-19 (40).jpg,	02-19 (41).jpg,	02-19 (42).jpg,	02-19 (43).jpg,	02-19 (44).jpg,	02-20 (1).jpg,	02-20 (2).jpg,	02-20 (3).jpg,	02-20 (4).jpg,	02-20 (5).jpg,	02-20 (6).jpg,	02-20 (7).jpg,	02-20 (8).jpg,	02-20 (9).jpg,	02-20 (10).jpg,	02-20 (11).jpg,	02-20 (12).jpg,	02-20 (13).jpg,	02-20 (14).jpg,	02-20 (15).jpg,	02-20 (16).jpg,	02-20 (17).jpg,	02-20 (18).jpg,	02-20 (19).jpg,	02-20 (20).jpg,	02-20 (21).jpg,	02-20 (22).jpg,	02-20 (23).jpg,	02-20 (24).jpg,	02-20 (25).jpg,	02-20 (26).jpg,	02-20 (27).jpg,	02-20 (28).jpg,	02-20 (29).jpg,	02-20 (30).jpg,	02-20 (31).jpg,	02-20 (32).jpg,	02-20 (33).jpg,	02-20 (34).jpg,	02-20 (35).jpg,	02-21 (1).jpg,	02-21 (2).jpg,	02-21 (3).jpg,	02-21 (4).jpg,	02-21 (5).jpg,	02-21 (6).jpg,	02-21 (7).jpg,	02-21 (8).jpg,	02-21 (9).jpg,	02-21 (10).jpg,	02-21 (11).jpg,	02-21 (12).jpg,	02-21 (13).jpg,	02-21 (14).jpg,	02-21 (15).jpg,	02-21 (16).jpg,	02-21 (17).jpg,	02-21 (18).jpg,	02-21 (19).jpg,	02-21 (20).jpg,	02-21 (21).jpg,	02-21 (22).jpg,	02-21 (23).jpg,	02-21 (24).jpg,	02-21 (25).jpg,	02-21 (26).jpg,	02-21 (27).jpg,	02-21 (28).jpg,	02-21 (29).jpg,	02-21 (30).jpg,	02-21 (31).jpg,	02-21 (32).jpg,	02-21 (33).jpg,	02-21 (34).jpg,	02-21 (35).jpg,	02-21 (36).jpg,	02-21 (37).jpg,	02-21 (38).jpg,	02-21 (39).jpg,	02-21 (40).jpg,	02-21 (41).jpg,	02-21 (42).jpg,	02-21 (43).jpg,	02-21 (44).jpg,	02-21 (45).jpg,	02-21 (46).jpg,	02-21 (47).jpg,	02-21 (48).jpg,	02-21 (49).jpg,	02-21 (50).jpg,	02-21 (51).jpg,	02-21 (52).jpg,	02-21 (53).jpg,	02-21 (54).jpg,	02-21 (55).jpg,	02-21 (56).jpg,	02-21 (57).jpg,	02-21 (58).jpg,	02-21 (59).jpg,	02-21 (60).jpg,	02-21 (61).jpg,	02-21 (62).jpg,	02-21 (63).jpg,	02-21 (64).jpg,	02-21 (65).jpg,	02-21 (66).jpg,	02-21 (67).jpg,	02-21 (68).jpg,	02-21 (69).jpg,	02-21 (70).jpg,	02-21 (71).jpg,	02-21 (72).jpg,	02-21 (73).jpg,	02-22 (1).jpg,	02-22 (2).jpg,	02-22 (3).jpg,	02-22 (4).jpg,	02-22 (5).jpg,	02-22 (6).jpg,	02-22 (7).jpg,	02-22 (8).jpg,	02-22 (9).jpg,	02-22 (10).jpg,	02-22 (11).jpg,	02-22 (12).jpg,	02-22 (13).jpg,	02-22 (14).jpg,	02-22 (15).jpg,	02-22 (16).jpg,	02-22 (17).jpg,	02-22 (18).jpg,	02-22 (19).jpg,	02-22 (20).jpg,	02-22 (21).jpg,	02-22 (22).jpg,	02-22 (23).jpg,	02-22 (24).jpg,	02-22 (25).jpg,	02-22 (26).jpg,	02-22 (27).jpg,	02-22 (28).jpg,	02-22 (29).jpg,	02-22 (30).jpg,	02-22 (31).jpg,	02-22 (32).jpg,	02-22 (33).jpg,	02-22 (34).jpg,	02-22 (35).jpg,	02-23 (1).jpg,	02-23 (2).jpg,	02-23 (3).jpg,	02-23 (4).jpg,	02-23 (5).jpg,	02-23 (6).jpg,	02-23 (7).jpg,	02-23 (8).jpg,	02-23 (9).jpg,	02-23 (10).jpg,	02-23 (11).jpg,	02-23 (12).jpg,	02-23 (13).jpg,	02-23 (14).jpg,	02-23 (15).jpg,	02-23 (16).jpg,	02-23 (17).jpg,	02-23 (18).jpg,	02-23 (19).jpg,	02-23 (20).jpg,	02-23 (21).jpg,	02-23 (22).jpg,	02-23 (23).jpg,	02-23 (24).jpg,	02-23 (25).jpg,	02-23 (26).jpg,	02-23 (27).jpg,	02-23 (28).jpg,	02-23 (29).jpg,	02-23 (30).jpg,	02-23 (31).jpg,	02-23 (32).jpg,	02-23 (33).jpg,	02-23 (34).jpg,	02-23 (35).jpg,	02-23 (36).jpg,	02-23 (37).jpg,	02-23 (38).jpg,	02-23 (39).jpg,	02-23 (40).jpg,	02-24 (1).jpg,	02-24 (2).jpg,	02-24 (3).jpg,	02-24 (4).jpg,	02-24 (5).jpg,	02-24 (6).jpg,	02-24 (7).jpg,	02-24 (8).jpg,	02-24 (9).jpg,	02-24 (10).jpg,	02-24 (11).jpg,	02-24 (12).jpg,	02-24 (13).jpg,	02-24 (14).jpg,	02-24 (15).jpg,	02-24 (16).jpg,	02-24 (17).jpg,	02-24 (18).jpg,	02-24 (19).jpg,	02-24 (20).jpg,	02-24 (21).jpg,	02-24 (22).jpg,	02-24 (23).jpg,	02-24 (24).jpg,	02-24 (25).jpg,	02-24 (26).jpg,	02-24 (27).jpg,	02-24 (28).jpg,	02-24 (29).jpg,	02-24 (30).jpg,	02-24 (31).jpg,	02-24 (32).jpg,	02-24 (33).jpg,	02-24 (34).jpg,	02-24 (35).jpg,	02-24 (36).jpg,	02-24 (37).jpg,	02-24 (38).jpg,	02-24 (39).jpg,	02-24 (40).jpg,	02-24 (41).jpg,	02-24 (42).jpg,	02-24 (43).jpg,	02-24 (44).jpg,	02-24 (45).jpg,	02-24 (46).jpg,	02-24 (47).jpg,	02-24 (48).jpg,	02-24 (49).jpg,	02-24 (50).jpg,	02-24 (51).jpg,	02-24 (52).jpg,	02-24 (53).jpg,	02-24 (54).jpg,	02-24 (55).jpg,	02-24 (56).jpg,	02-24 (57).jpg,	02-24 (58).jpg,	02-25 (1).jpg,	02-25 (2).jpg,	02-25 (3).jpg,	02-25 (4).jpg,	02-25 (5).jpg,	02-25 (6).jpg,	02-25 (7).jpg,	02-25 (8).jpg,	02-25 (9).jpg,	02-25 (10).jpg,	02-25 (11).jpg,	02-25 (12).jpg,	02-25 (13).jpg,	02-25 (14).jpg,	02-25 (15).jpg,	02-25 (16).jpg,	02-25 (17).jpg,	02-25 (18).jpg,	02-25 (19).jpg,	02-25 (20).jpg,	02-25 (21).jpg,	02-25 (22).jpg,	02-25 (23).jpg,	02-25 (24).jpg,	02-25 (25).jpg,	02-25 (26).jpg,	02-25 (27).jpg,	02-25 (28).jpg,	02-25 (29).jpg,	02-25 (30).jpg,	02-25 (31).jpg,	02-25 (32).jpg,	02-25 (33).jpg,	02-25 (34).jpg,	02-25 (35).jpg,	02-25 (36).jpg,	02-25 (37).jpg,	02-25 (38).jpg,	02-25 (39).jpg,	02-25 (40).jpg,	02-25 (41).jpg,	02-25 (42).jpg,	02-25 (43).jpg,	02-25 (44).jpg,	02-25 (45).jpg,	02-25 (46).jpg,	02-26 (1).jpg,	02-26 (2).jpg,	02-26 (3).jpg,	02-26 (4).jpg,	02-26 (5).jpg,	02-26 (6).jpg,	02-26 (7).jpg,	02-26 (8).jpg,	02-26 (9).jpg,	02-26 (10).jpg,	02-26 (11).jpg,	02-26 (12).jpg,	02-26 (13).jpg,	02-26 (14).jpg,	02-26 (15).jpg,	02-26 (16).jpg,	02-26 (17).jpg,	02-26 (18).jpg,	02-27 (1).jpg,	02-27 (2).jpg,	02-27 (3).jpg,	02-27 (4).jpg,	02-27 (5).jpg,	02-27 (6).jpg,	02-27 (7).jpg,	02-27 (8).jpg,	02-27 (9).jpg,	02-27 (10).jpg,	02-27 (11).jpg,	02-27 (12).jpg,	02-27 (13).jpg,	02-27 (14).jpg,	02-27 (15).jpg,	02-27 (16).jpg,	02-27 (17).jpg,	02-27 (18).jpg,	02-27 (19).jpg,	02-27 (20).jpg,	02-27 (21).jpg,	02-27 (22).jpg,	02-27 (23).jpg,	02-27 (24).jpg,	02-27 (25).jpg,	02-27 (26).jpg,	02-27 (27).jpg,	02-27 (28).jpg,	02-27 (29).jpg,	02-27 (30).jpg,	02-27 (31).jpg,	02-27 (32).jpg,	02-27 (33).jpg,	02-27 (34).jpg,	02-27 (35).jpg,	02-27 (36).jpg,	02-27 (37).jpg,	02-27 (38).jpg,	02-27 (39).jpg,	02-27 (40).jpg,	02-27 (41).jpg,	02-27 (42).jpg,	02-27 (43).jpg,	02-27 (44).jpg,	02-27 (45).jpg,	02-27 (46).jpg,	02-28 (1).jpg,	02-28 (2).jpg,	02-28 (3).jpg,	02-28 (4).jpg,	02-28 (5).jpg,	02-28 (6).jpg,	02-28 (7).jpg,	02-28 (8).jpg,	02-28 (9).jpg,	02-28 (10).jpg,	02-28 (11).jpg,	02-28 (12).jpg,	02-28 (13).jpg,	02-28 (14).jpg,	02-28 (15).jpg,	02-28 (16).jpg,	02-28 (17).jpg,	02-28 (18).jpg,	02-28 (19).jpg,	02-28 (20).jpg,	02-28 (21).jpg,	02-28 (22).jpg,	02-28 (23).jpg,	02-28 (24).jpg,	02-28 (25).jpg,	02-28 (26).jpg,	02-28 (27).jpg,	02-28 (28).jpg,	02-28 (29).jpg,	02-28 (30).jpg,	02-28 (31).jpg,	02-28 (32).jpg,	02-28 (33).jpg,	02-28 (34).jpg,	02-28 (35).jpg,	02-28 (36).jpg,	02-28 (37).jpg,	02-28 (38).jpg,	02-28 (39).jpg,	02-28 (40).jpg,	02-28 (41).jpg,	02-28 (42).jpg,	02-28 (43).jpg,	02-28 (44).jpg,	02-28 (45).jpg,	02-28 (46).jpg,	02-28 (47).jpg,	02-28 (48).jpg,	02-28 (49).jpg,	02-28 (50).jpg,	02-28 (51).jpg,	02-28 (52).jpg,	02-28 (53).jpg,	02-28 (54).jpg,	02-28 (55).jpg,	02-28 (56).jpg,	02-28 (57).jpg,	02-28 (58).jpg,	02-28 (59).jpg,	02-28 (60).jpg,	02-28 (61).jpg,	02-28 (62).jpg,	02-28 (63).jpg,	02-28 (64).jpg,	02-28 (65).jpg,	02-29 (1).jpg,	02-29 (2).jpg,	02-29 (3).jpg,	02-29 (4).jpg,	02-29 (5).jpg,	02-29 (6).jpg,	02-29 (7).jpg,	03-01 (1).jpg,	03-01 (2).jpg,	03-01 (3).jpg,	03-01 (4).jpg,	03-01 (5).jpg,	03-01 (6).jpg,	03-01 (7).jpg,	03-01 (8).jpg,	03-01 (9).jpg,	03-02 (1).jpg,	03-02 (2).jpg,	03-02 (3).jpg,	03-03 (1).jpg,	03-03 (2).jpg,	03-03 (3).jpg,	03-03 (4).jpg,	03-03 (5).jpg,	03-03 (6).jpg,	03-03 (7).jpg,	03-03 (8).jpg,	03-03 (9).jpg,	03-03 (10).jpg,	03-03 (11).jpg,	03-03 (12).jpg,	03-03 (13).jpg,	03-03 (14).jpg,	03-03 (15).jpg,	03-03 (16).jpg,	03-03 (17).jpg,	03-03 (18).jpg,	03-03 (19).jpg,	03-03 (20).jpg,	03-03 (21).jpg,	03-03 (22).jpg,	03-03 (23).jpg,	03-03 (24).jpg,	03-03 (25).jpg,	03-03 (26).jpg,	03-03 (27).jpg,	03-03 (28).jpg,	03-03 (29).jpg,	03-03 (30).jpg,	03-03 (31).jpg,	03-03 (32).jpg,	03-03 (33).jpg,	03-03 (34).jpg,	03-03 (35).jpg,	03-03 (36).jpg,	03-03 (37).jpg,	03-03 (38).jpg,	03-03 (39).jpg,	03-03 (40).jpg,	03-03 (41).jpg,	03-03 (42).jpg,	03-03 (43).jpg,	03-03 (44).jpg,	03-03 (45).jpg,	03-03 (46).jpg,	03-03 (47).jpg,	03-03 (48).jpg,	03-03 (49).jpg,	03-03 (50).jpg,	03-03 (51).jpg,	03-03 (52).jpg,	03-03 (53).jpg,	03-03 (54).jpg,	03-03 (55).jpg,	03-03 (56).jpg,	03-03 (57).jpg,	03-03 (58).jpg,	03-03 (59).jpg,	03-03 (60).jpg,	03-03 (61).jpg,	03-03 (62).jpg,	03-03 (63).jpg,	03-03 (64).jpg,	03-03 (65).jpg,	03-03 (66).jpg,	03-03 (67).jpg,	03-04 (1).jpg,	03-04 (2).jpg,	03-04 (3).jpg,	03-04 (4).jpg,	03-04 (5).jpg,	03-04 (6).jpg,	03-04 (7).jpg,	03-04 (8).jpg,	03-04 (9).jpg,	03-04 (10).jpg,	03-04 (11).jpg,	03-04 (12).jpg,	03-04 (13).jpg,	03-04 (14).jpg,	03-04 (15).jpg,	03-04 (16).jpg,	03-05 (1).jpg,	03-05 (2).jpg,	03-05 (3).jpg,	03-05 (4).jpg,	03-05 (5).jpg,	03-05 (6).jpg,	03-05 (7).jpg,	03-05 (8).jpg,	03-05 (9).jpg,	03-05 (10).jpg,	03-05 (11).jpg,	03-05 (12).jpg,	03-05 (13).jpg,	03-05 (14).jpg,	03-05 (15).jpg,	03-05 (16).jpg,	03-05 (17).jpg,	03-05 (18).jpg,	03-05 (19).jpg,	03-05 (20).jpg,	03-05 (21).jpg,	03-05 (22).jpg,	03-05 (23).jpg,	03-05 (24).jpg,	03-05 (25).jpg,	03-05 (26).jpg,	03-05 (27).jpg,	03-05 (28).jpg,	03-05 (29).jpg,	03-05 (30).jpg,	03-05 (31).jpg,	03-05 (32).jpg,	03-05 (33).jpg,	03-06 (1).jpg,	03-06 (2).jpg,	03-06 (3).jpg,	03-06 (4).jpg,	03-06 (5).jpg,	03-06 (6).jpg,	03-06 (7).jpg,	03-06 (8).jpg,	03-06 (9).jpg,	03-06 (10).jpg,	03-06 (11).jpg,	03-06 (12).jpg,	03-06 (13).jpg,	03-06 (14).jpg,	03-06 (15).jpg,	03-06 (16).jpg,	03-06 (17).jpg,	03-06 (18).jpg,	03-06 (19).jpg,	03-06 (20).jpg,	03-06 (21).jpg,	03-06 (22).jpg,	03-06 (23).jpg,	03-06 (24).jpg,	03-06 (25).jpg,	03-06 (26).jpg,	03-06 (27).jpg,	03-06 (28).jpg";

// Split the sting to an array of names
let arrayOfPhotosNames = listOfPhotosNames.split(",");

//  :)  ARRAY OF PHOTOS NAMES !!! USE THIS TO REFER TO PHOTO ARRAY 
let photosNames = new Array;

arrayOfPhotosNames.forEach(name =>{
    // remove space from start of the sting
   let newOne = name.trimLeft();
    photosNames.push(newOne);
})
// ---------------------------------------------------------------------------------

// ALBUM

const mainContainer = document.querySelector("#main-container");


//date label
  let dateCounter = 1;
  let dayOfPhoto = photosNames[0].substring(0,5);
  console.log(dayOfPhoto);

  createDateLabel();

  function createDateLabel(){
    let dateLabel = document.createElement("h1");
    dateLabel.textContent = "Den "+ dateCounter + ".";
    mainContainer.appendChild(dateLabel);
  }
  
// ------END----OFF--date label------------------------------------------------

// clona
  let clona = document.createElement("div");
  clona.classList.add("clona");
  document.body.appendChild(clona);
  clona.style.display ="none";


  // first album container
  let albumContainer = document.createElement("div");
  albumContainer.classList.add("album");
  mainContainer.appendChild(albumContainer);
  

  //For each photo name
  photosNames.forEach(photoName =>{

    let actualDayOfPhoto = photoName.substring(0,5);

    if (actualDayOfPhoto != dayOfPhoto){
      dateCounter += 1;
      createDateLabel();
      dayOfPhoto = actualDayOfPhoto;

      // create new album for new day
      let newAlbum = document.createElement("div");
      newAlbum.classList.add("album");
      mainContainer.appendChild(newAlbum);
      albumContainer = newAlbum;
    } // end of For each photo


  // container
  let photoContainer = document.createElement("div");7960
  
  photoContainer.classList.add("photo-container");
  // img
  let imgElement = document.createElement("img");
  //set ID 
  imgElement.id = photosNames.indexOf(photoName);
  imgElement.src = srcToSmallPhotoFolder + photoName;
  // click event
  imgElement.addEventListener("click", openPhotoView.bind(event, photosNames[imgElement.id]));
  
  // appendChilds 
  photoContainer.appendChild(imgElement);
  albumContainer.appendChild(photoContainer);    
  
  
})
// -------------------------------------------------------------------------------
allInMainContainer = document.querySelectorAll("#main-container > *");

// PHOTO VIEW

const photoView = document.createElement("div");
const closeButton = document.createElement("button");
let photoBig = document.createElement("img");
const nextButton = document.createElement("button");
const previousButton = document.createElement("button");




// Global Actual photo
let actualPhoto;



//setup
closeButton.textContent = "zavřít";
nextButton.textContent = "Daší";
previousButton.textContent = "Předchozí";

photoView.style.display = "none";
closeButton.id = "close-button";
photoView.classList.add("photo-view");
nextButton.id ="next-button";
previousButton.id = "previous-button";

// click to control
nextButton.addEventListener("click", nextPhoto);
previousButton.addEventListener("click", previousPhoto);
closeButton.addEventListener("click", closePhotoView);

// apend childs
photoView.appendChild(nextButton);
photoView.appendChild(previousButton);
photoView.appendChild(photoBig);
photoView.appendChild(closeButton);
document.body.appendChild(photoView);



// OPEN VIEW
function openPhotoView(photoName){

//hide scrool arrow
  arrowToTop.classList.add("hidden");

  actualPhoto = photoName;

  showOrHideButtonNextOrPrevious(photosNames.indexOf(actualPhoto));

  //Control photos chane by arrow keys
  document.addEventListener("keydown", photoControl);
  
  photoBig.src = srcToBigPhotoFolder + photoName;

  allInMainContainer.forEach(element=>{
    element.classList.add("is-blurred");
  })

  clona.style.display = "";
  photoView.style.display = "";
  console.log(photoName);

  // photoForm.id = photoName;

}

// CLOSE VIEW

function closePhotoView(){
  showOrHideArrow()

//remove posibility to control photo by arrow keys
document.removeEventListener("keydown", photoControl);

  photoView.style.display = "none";

  allInMainContainer.forEach(element=>{
    element.classList.remove("is-blurred");
  })

  



  clona.style.display = "none";



// smooth scrool in album to position of view photo 
  console.log(actualPhoto);
  let photoIndex = photosNames.indexOf(actualPhoto);
  let actualPhotoElement = document.getElementById(photoIndex);
  smoothScrollToPosition(event, getElementPosition(actualPhotoElement).y - actualPhotoElement.getBoundingClientRect().height);
  
  console.log(photoIndex);
}


 // NEXT AND PREVIOUS PHOTO CONTROL 

//Next photo
function nextPhoto(){

  let actualIndex = photosNames.indexOf(actualPhoto);

  //Check if the photo is NOT the last in album
  if(actualIndex != photosNames.length -1){

    let nextIndex = actualIndex +1;
    photoBig.src = srcToBigPhotoFolder + photosNames[nextIndex];
    //Save actual photo to global variable
    actualPhoto = photosNames[nextIndex];
    
    //show or hide controls 
    showOrHideButtonNextOrPrevious(nextIndex);

  }
}

//Previsous photo
function previousPhoto(){

  let actualIndex = photosNames.indexOf(actualPhoto);

  //Check if the photo is NOT the first in album
  if(actualIndex != 0){

    let nextIndex = actualIndex -1;
    photoBig.src = srcToBigPhotoFolder + photosNames[nextIndex];
    actualPhoto = photosNames[nextIndex];
    showOrHideButtonNextOrPrevious(nextIndex);
  }
}

// show or hide next and or previous
function showOrHideButtonNextOrPrevious(index){
  nextButton.style.display = "";
  previousButton.style.display = "";

  if (index == 0){
    previousButton.style.display = "none";
  }
  else if(index == photosNames.length -1){
    nextButton.style.display = "none";
  }
  
}

// Control via arrow keys
function photoControl(e){
  console.log(e.code);

  if (e.code == "ArrowLeft"){
   previousPhoto();}
  else if(e.code == "ArrowRight"){
   nextPhoto();}
  
}

// -------------------------------------------------------------------------------







// form
// let photoForm = document.createElement("form");
// let photoInput = document.createElement("input");
// let saveButton = document.createElement("button");
// saveButton.textContent = "save";
// // saveToDatavase button
// saveButton.addEventListener("click", saveToDatabase.bind(event,));

// photoForm.appendChild(photoInput);
// photoForm.appendChild(saveButton);
// photoView.appendChild(photoForm);






// disable scrolling
// window.onscroll = function () { window.scrollTo(0, 0); };





// -------------------------------------------------------------------------------


// FIREBASE

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCn016dFK6hhDmcRXB_4DMryk99KysH340",
    authDomain: "denicek-z-japonska.firebaseapp.com",
    databaseURL: "https://denicek-z-japonska.firebaseio.com",
    projectId: "denicek-z-japonska",
    storageBucket: "denicek-z-japonska.appspot.com",
    messagingSenderId: "655855610798",
    appId: "1:655855610798:web:07897e609f3c518d83363f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  let database = firebase.database;
  



//Save to datavase
function saveToDatabase(id){
  
  
  console.log(id);

}

// ---------------------------------------------------------------------------------