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

function lireAudio(text) {
    console.log(text);

    var msg = new SpeechSynthesisUtterance();
    initMsg(msg);
    msg.text = text;
    window.speechSynthesis.speak(msg);

}

function loadData(){
    if ('speechSynthesis' in window) {
        // Speech Synthesis supported 
       }else{
         // Speech Synthesis Not Supported 
         alert("Sorry, your browser doesn't support text to speech!");
       }
}

function initMsg(msg){
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 1; // From 0 to 2
    msg.lang = 'fr';
}

