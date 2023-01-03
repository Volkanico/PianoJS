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

let j;
function getPartitures() {
    pintarCapceleraTaula()
    let taula = document.querySelector("table")
    for (j = 0; j < registreCanconcsDe100.length; j++) {
      pintarTaula(taula)
    }

}

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