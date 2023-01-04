"use strict";
class NotaService {
    constructor(){
        
    }
}









let nomNota;
let sostingut = false;
let nomArxiu;
function Nota(nomNota, sostingut) { //NOTA DE TEMA 1-3
    this.nomNota = nomNota;
    this.sostingut = sostingut;
    this.nomArxiu = nomArxiu;
    //Play()
    
    //HA DE CERCAR PER NOM DE NOTA
}
let nomNotes = ["do", "do-sust", "re", "re-sust", "mi", "fa-sust", "fa",
    "sol", "sol-sust", "la", "la-sust", "si", "do7"];

let notesTotals = []; //OBJECTES NOTA
function totesLesNotesObj() {
    for (let i = 0; i < nomNotes.length; i++) {
        if (nomNotes[i].substr(-5) === "-sust") {
            notesTotals.push(new Nota(nomNotes[i], sostingut === false, nomArxiu = '../audio/' + nomNotes[i] + '.mp3'));
        } else {
            notesTotals.push(new Nota(nomNotes[i], sostingut === true, nomArxiu = '../audio/' + nomNotes[i] + '.mp3'));
        }
    }
    //console.log(notesTotals)
}
totesLesNotesObj();