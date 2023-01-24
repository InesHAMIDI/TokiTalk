"use strict";

let key = "7752ff267a4547ba914bce6d0ff0a23f";

const bvalider = document.getElementById("b-valider");
bvalider.addEventListener("click", recupererTextEcrit)

function recupererTextEcrit() {
    let text = document.getElementById("texteALire").value;
    lireAudio(text);
}

const boui = document.getElementById("b-oui");
const bnon = document.getElementById("b-non");
const bjsp = document.getElementById("b-jsp");

boui.addEventListener("click", lireAudio("oui"))
bnon.addEventListener("click", lireAudio("non"))
bjsp.addEventListener("click", lireAudio("je ne sais pas"))

async function lireAudio(text) {
    console.log(text);
    return fetch("https://api.voicerss.org/?key" + key + "&hl=fr-fr&v=Iva&src=" + text)
    .then(response =>{
        if (response.status == 200) {
           audio => new Audio(audio).play();
        }
    })
    .catch(err =>{
        if(err.response.status == 400){
            alert ("bad text");
            return text;
        }
        else{
            throw err;
        }
    })
    
    
}



