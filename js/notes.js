var DO = document.createElement('audio');
var DOSUST = document.createElement('audio');
var RE = document.createElement('audio');
var RESUST = document.createElement('audio');
var MI = document.createElement('audio');
var FASUST = document.createElement('audio');
var FA = document.createElement('audio');
var SOL = document.createElement('audio');
var SOLSUST = document.createElement('audio');
var LA = document.createElement('audio');
var LASUST = document.createElement('audio');
var SI = document.createElement('audio');
var DO7 = document.createElement('audio');
var audios = [DO, DOSUST, RE, RESUST, MI, FASUST, FA, SOL, SOLSUST, LA, LASUST, SI, DO7]

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
var audioLaBalanguera = [DO, RE, MI, FA, FA, SOL, SOL, LASUST];
var makeCallbackLaBalanguera = function (index) {
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

