import VoiceRSSWebApi from './voice-rss-api';let key = "7752ff267a4547ba914bce6d0ff0a23f"
function recupererTextEcrit(){
    let text = document.getElementById("texteALire").value;
    lireAudio(text);
}

function recupererBoutonClicke(){
    let text;
    lireAudio(text);
}

function lireAudio(text){
    console.log(text);
 }