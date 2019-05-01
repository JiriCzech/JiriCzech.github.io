
var icons = document.querySelectorAll(".icons > img");

var messages = ["Sorry, nothing here :(", "Don't waste your time.", "Tak hele, tyto  tlačítka zatím nic nedělají! Chápeš?","それが機能していないのが残念"]

icons.forEach(icon =>{
    icon.setAttribute("onclick", "alertMessage()");
});

var counter = 0;

function alertMessage(){

    alert(messages[counter]);

    if (counter === messages.length -1){
        counter = 0;
    }
    else{
       counter++;  
    }
   
}


