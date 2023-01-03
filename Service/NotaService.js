"use strict";
class NotaService {
    constructor(){
        
    }
}
let nomNota;
let sostingut = false;
let nomArxiu;
function Nota(nomNota, sostingut) {
    this.nomNota = nomNota;
    this.sostingut = sostingut;
    this.nomArxiu = nomArxiu;
    //PlAY()
    
    //HA DE CERCAR PER NOM DE NOTA
}
let nomNotes = ["do", "do-sust", "re", "re-sust", "mi", "fa-sust", "fa",
    "sol", "sol-sust", "la", "la-sust", "si", "do7"];
let nomNotesTotals = ["do.mp3", "do-sust.mp3", "re.mp3", "re-sust.mp3", "mi.mp3", "fa-sust.mp3", "fa.mp3",
    "sol.mp3", "sol-sust.mp3", "la.mp3", "la-sust.mp3", "si.mp3", "do7.mp3"];
let notesTotals = []; //OBJECTES NOTA
function totesLesNotesObj() {
    for (let i = 0; i < nomNotes.length; i++) {
        if (nomNotes[i].substr(-5) === "-sust") {
            notesTotals.push(new Nota(nomNotes[i], sostingut === false, nomArxiu = '../audio/' + nomNotesTotals[i]));
        } else {
            notesTotals.push(new Nota(nomNotes[i], sostingut === true, nomArxiu = '../audio/' + nomNotesTotals[i]));
        }
    }
    //console.log(notesTotals)
}
totesLesNotesObj();