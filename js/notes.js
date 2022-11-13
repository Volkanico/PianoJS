/*window.onload = function () {
    var audioElementDO = document.createElement('audio');
//fer bucle i pasar variable de les notes
    audioElementDO.setAttribute('src', '../audio/' + nomNotesTotals[0]);
    document.getElementById("do").addEventListener("click", function () {

        audioElementDO.play();
    });
    console.log(audioElementDO)


};*/
var audioElement1 = document.createElement('audio');
var audioElement2 = document.createElement('audio');
var audioElement3 = document.createElement('audio');
var audioElement4 = document.createElement('audio');
var audioElement5 = document.createElement('audio');
var audioElement6 = document.createElement('audio');
var audioElement7 = document.createElement('audio');
var audioElement8 = document.createElement('audio');
var audioElement9 = document.createElement('audio');
var audioElement10 = document.createElement('audio');
var audioElement11 = document.createElement('audio');
var audioElement12 = document.createElement('audio');
var audioElement13 = document.createElement('audio');
var audioElement14 = document.createElement('audio');
var audios = [audioElement1, audioElement2, audioElement3,
    audioElement4, audioElement5, audioElement6, audioElement7,
    audioElement8, audioElement9, audioElement10, audioElement11,
    audioElement12, audioElement13, audioElement14]
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



function reproduirLaBalanguera(){
    for (let i = 0; i < laBalanguera.length; i++) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../audio/' + laBalanguera[i] + ".mp3")
    setTimeout(()=> audioElement.play(),1000);
       //NOMES S'ESCOLTA LA DARRERA DE L'ARRAY LA BALANGUERA
    
    }
}
function reproduirMerryChristmas(){
    for (let i = 0; i < notesTotals.length; i++) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../audio/' + laBalanguera[i] + ".mp3")
   
        audioElement.play();
    
    }
}