"use strict";
import VoiceRSSWebApi from "./voice-rss-api.js";

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
    try {
        await(VoiceRSS.getAudio(text))
        audio => new Audio(audio).play()
    }
    catch {
        error => console.log(error);
    }
}

document.addEventListener("load", loadData)
function loadData() {
    let key = "7752ff267a4547ba914bce6d0ff0a23f";

    const VoiceRSS = new VoiceRSSWebApi();
    VoiceRSS.setApiKey(key);
    VoiceRSS.setLanguage('fr-fr');
    VoiceRSS.setSpeechRate(0);
    VoiceRSS.setAudioCodec('auto');
    VoiceRSS.setAudioFormat('44khz_16bit_stereo');
    VoiceRSS.setSSML(false);
    VoiceRSS.setB64(false);
    VoiceRSS.setVoice('Iva');
}


