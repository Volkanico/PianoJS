"use strict";
class PartituraService {
    constructor(){
        
    }
}


const santAntoniRegistre = ['Sant Antoni i el dimoni', 'ma',];
const laBalangueraRegistre = ['La Balanguera', 'ca',];
const merryChristmasRegistre = ["Merry Christmas", 'en'];
const frereJacquesRegistre = ["Frère Jacques", 'ca'];
const registreCanconcsDe100 = [];

function registresArr() {
    registreCanconcsDe100.push(laBalangueraRegistre);
    registreCanconcsDe100.push(merryChristmasRegistre);
    registreCanconcsDe100.push(frereJacquesRegistre);
    registreCanconcsDe100.push(laBalangueraRegistre);
    registreCanconcsDe100.push(merryChristmasRegistre);
    registreCanconcsDe100.push(frereJacquesRegistre);
    for (let i = 0; i < 98; i++) {
        registreCanconcsDe100.push(santAntoniRegistre);
    }
}
//-------------------------------------------------------------------------------------------------------------------------
let j;
function getPartitures() {
    pintarCapceleraTaula()
    let taula = document.querySelector("table")
    for (j = 0; j < registreCanconcsDe100.length; j++) {
      pintarTaula(taula)
    }

}
//-------------------------------------------------------------------------------------------------------------------------
let laBalanguera = ["do", "re", "mi", "fa", "fa", "sol", "sol", "la-sust"];
let happyBirthday = ["do", "do", "re", "do", "fa", "mi", "do", "do", "re", "do", "sol", "fa"];
let partitures = [laBalanguera, happyBirthday];

function addCerca(nomNota, sostingut) {
    if (nomNota.substr(-9) === "-sust.mp3") {
        cerca.push(new Nota(nomNota, sostingut === false));
    } else {
        cerca.push(new Nota(nomNota, sostingut === true));
    }
    //Funció que, passat el nom d'una nota i el tipus (si és sostingut o no), afegirà un objecte "Nota" a un array de cerca (variable cerca de l'esquelet).
}
//-------------------------------------------------------------------------------------------------------------------------
function cercador(partitures) {
    let subconjORDENAT = ["fa", "mi", "do"]; //ENTRADA DE NOTES

    for (let i = 0; i < partitures.length; i++) { //COMPARADOR
        for (let j = 0; j < partitures[i].length; j++) {
            if (subconjORDENAT[0] === partitures[i][j] && subconjORDENAT[1] === partitures[i][j + 1] && subconjORDENAT[2] === partitures[i][j + 2]) {
                //console.log(partitures[i])
                //
            }
        }
    }
}
//-------------------------------------------------------------------------------------------------------------------------
function obrirPrompt(index) {
    if (window.confirm("Està segur que vol esborrar l'element? " + index)) {
        alert("S'ha esborrat l'element " + index)
        document.getElementById(index).remove();
        //event listener 
    }else{alert("S'ha cancelat l'acció")}
}





function init() {
    registresArr();
    getPartitures();
  
}
init();