"use strict";
import { Partitura } from "../model/Partitura.js";
export class PartituraService {
    constructor() {

    }
    laBalanguera = ["do", "re", "mi", "fa", "fa", "sol", "sol", "la-sust"];
    happyBirthday = ["do", "do", "re", "do", "fa", "mi", "do", "do", "re", "do", "sol", "fa"];
    partitures = [laBalanguera, happyBirthday];
    cerca = [];
    
    async getPartitures(){
        pintarCapceleraTaula();
        const promeses = [];
            const f = fetch("https://theteacher.codiblau.com/piano/nologin/score/list", {
                method:'post',
                body:""
            });
            promeses.push(f);
        
        let taula = document.querySelector("table")
        const allPromeses = Promise.all(promeses)
        allPromeses.then(arr => {
            const promeses2 = [];
            for (let a of arr) {
                promeses2.push(a.json());
            }
            Promise.all(promeses2).then(arr2 => {
                let part = [];
                for (let a2 of arr2) {
                    console.log(part)
                    for(let i = 0; i < a2.length; i++){
                        part.push( new Partitura(a2[i].idpartitura, a2[i].titol, a2[i].idiomaoriginal, a2[i].idiomatraduccio, a2[i].lletraoriginal, a2[i].lletratraduccio, a2[i].notes))
                        pintarTaula(taula, part[i].titol, part[i].idiomaoriginal, a2[i].idpartitura)
                    }
                    //console.log(part)
                }
            })
        })    
    }
   /*getPartitures() { //ANTIC GETPARTITURES
        pintarCapceleraTaula()
        let taula = document.querySelector("table")
        for ( let j = 0; j < registreCanconcsDe100.length; j++) {
          pintarTaula(taula, j,registreCanconcsDe100);
        }
    
    }*/
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
}
//----------------------------------------------------------------------------------------------------------------------------


let laBalanguera = ["do", "re", "mi", "fa", "fa", "sol", "sol", "la-sust"];
let happyBirthday = ["do", "do", "re", "do", "fa", "mi", "do", "do", "re", "do", "sol", "fa"];
let partitures = [laBalanguera, happyBirthday];
let cerca = [];

let partituraService = new PartituraService();
(() => {
    partituraService.getPartitures();
    partituraService.addCerca('do', false); //COMPROVACIO CORRECTE //CERCAR laBalanguera  
    partituraService.addCerca('re', false); //COMPROVACIO CORRECTE
    partituraService.addCerca('mi', false); //COMPROVACIO CORRECTE
    partituraService.cercador(partitures);
})();


