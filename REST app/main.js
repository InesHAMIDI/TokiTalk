import VoiceRSSWebApi from 'voice-rss-api.js';

function recupererTextEcrit() {
    let text = document.getElementById("texteALire").value;
    lireAudio(text);
}

function lireAudio(text) {
    console.log(text);
    VoiceRSS.getAudio(text)
        .then(audio => new Audio(audio).play())
        .catch(error => console.log(error));
}

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


