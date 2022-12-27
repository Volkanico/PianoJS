let DO = document.createElement('audio');
let DOSUST = document.createElement('audio');
let RE = document.createElement('audio');
let RESUST = document.createElement('audio');
let MI = document.createElement('audio');
let FASUST = document.createElement('audio');
let FA = document.createElement('audio');
let SOL = document.createElement('audio');
let SOLSUST = document.createElement('audio');
let LA = document.createElement('audio');
let LASUST = document.createElement('audio');
let SI = document.createElement('audio');
let DO7 = document.createElement('audio');
let audios = [DO, DOSUST, RE, RESUST, MI, FASUST, FA, SOL, SOLSUST, LA, LASUST, SI, DO7]

window.onload = function () {
    for (let i = 0; i < notesTotals.length; i++) {
        //console.log(nomNotes[i])
        let notaTecla = document.getElementById(notesTotals[i].nomNota);
        audios[i].setAttribute('src', '../audio/' + notesTotals[i].nomNota + ".mp3");
        notaTecla.appendChild(audios[i])
        notaTecla.addEventListener("click", function () {
            audios[i].play();
        });
        console.log(audios[i])
    }
}

let audioHappyBirthday = [DO, DO, RE, DO, FA, MI, DO, DO, RE, DO, SOL, FA];
let audioLaBalanguera = [DO, RE, MI, FA, FA, SOL, SOL, LASUST];
let makeCallbackLaBalanguera = function (index) {
    return function () {
        audioLaBalanguera[index].play()
       
    }
}
function reproduirLaBalanguera() {
    for (let i = 0; i < audioLaBalanguera.length; i++) {
        setInterval(makeCallbackLaBalanguera(i), 1000)
    }

}

var makeCallbackHappyBirthday = function (index) {
    return function () {
        audioHappyBirthday[index].play()
    }
}
function reproduirHappyBirthday() {
    for (let i = 0; i < audioHappyBirthday.length; i++) {
        setInterval(makeCallbackHappyBirthday(i), 1000);
    }
}