//on crée la fenêtre electron
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})


//code de TokiTalk
const bvalider = document.getElementById("b-valider");
const boui = document.getElementById("b-oui");
const bnon = document.getElementById("b-non");
const bjsp = document.getElementById("b-jsp");

bvalider.addEventListener("click", () => { recupererTextEcrit() })
boui.addEventListener("click", () => { lireAudio("oui"); })
bnon.addEventListener("click", () => { lireAudio("non"); })
bjsp.addEventListener("click", () => { lireAudio("je ne sais pas"); })


function recupererTextEcrit() {
    let text = document.getElementById("texteALire").value;
    lireAudio(text);
}

function lireAudio(text) {
    console.log(text);

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 0; // From 0 to 2
    msg.lang = 'fr';

    msg.text = text;
    window.speechSynthesis.speak(msg);

}

