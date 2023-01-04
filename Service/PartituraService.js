"use strict";
class PartituraService {
    constructor(){
        
    }

getPartitures() {
    pintarCapceleraTaula()
    let taula = document.querySelector("table")
    for ( let j = 0; j < registreCanconcsDe100.length; j++) {
      pintarTaula(taula, j);
    }

}
//-------------------------------------------------------------------------------------------------------------------------

addCerca(nomNota, sostingut) {
    if (nomNota.substr(-5) === "-sust") {
        cerca.push(nomNota/*,sostingut*/); //ARA COMPROVA L'ARRAY, DESPRES HO HA DE FER L'OBJECTE NOTA
    } else {
        cerca.push(nomNota/*,sostingut*/);
    }
    //Funció que, passat el nom d'una nota i el tipus (si és sostingut o no), afegirà un objecte "Nota" a un array de cerca (variable cerca de l'esquelet).
}
//-------------------------------------------------------------------------------------------------------------------------
cercador(partitures) {
    

    for (let i = 0; i < partitures.length; i++) { //COMPARADOR
        for (let j = 0; j < partitures[i].length; j++) {
            if (cerca[0] === partitures[i][j] && cerca[1] === partitures[i][j + 1] && cerca[2] === partitures[i][j + 2]) {
                //console.log(partitures[i])
                //console.log(cerca) 
                
            }
        }
    }
}

obrirPrompt(index) {
    if (window.confirm("Està segur que vol esborrar l'element? " + index)) {
        alert("S'ha esborrat l'element " + index)
        document.getElementById(index).remove();
        //event listener 
    }else{alert("S'ha cancelat l'acció")}
}
}
//-------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------


let laBalanguera = ["do", "re", "mi", "fa", "fa", "sol", "sol", "la-sust"];
let happyBirthday = ["do", "do", "re", "do", "fa", "mi", "do", "do", "re", "do", "sol", "fa"];
let partitures = [laBalanguera, happyBirthday];
let cerca = [];
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


let partituraService = new PartituraService();

(() => {
    registresArr();
    partituraService.getPartitures();
    partituraService.addCerca('do', false); //COMPROVACIO CORRECTE //CERCAR laBalanguera  
    partituraService.addCerca('re', false); //COMPROVACIO CORRECTE
    partituraService.addCerca('mi', false); //COMPROVACIO CORRECTE
    partituraService.cercador(partitures);
    
  })();


