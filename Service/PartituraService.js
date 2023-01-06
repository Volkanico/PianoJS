"use strict";
import { Partitura } from "../model/Partitura.js";
export class PartituraService {
    constructor() {}
    
    async getPartitures(){
        pintarCapceleraTaula();
        const promeses = [];
            const f = await fetch("https://theteacher.codiblau.com/piano/nologin/score/list", {
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
                    } //console.log(part)
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

    addCerca(nomNota, sostingut, arrayNotes) {
        if (nomNota.substr(-5) === "-sust") {
            arrayNotes.push(nomNota/*,sostingut*/); //ARA COMPROVA L'ARRAY, DESPRES HO HA DE FER L'OBJECTE NOTA
        } else {
            arrayNotes.push(nomNota/*,sostingut*/);
        }
        //Funció que, passat el nom d'una nota i el tipus (si és sostingut o no), afegirà un objecte "Nota" a un array de cerca (variable cerca de l'esquelet).
    }
    //-------------------------------------------------------------------------------------------------------------------------
    cercador(partitures, arrayNotes) {
        for (let i = 0; i < partitures.length; i++) { //COMPARADOR
            for (let j = 0; j < partitures[i].length; j++) {
                if (arrayNotes[0] === partitures[i][j] && arrayNotes[1] === partitures[i][j + 1] && arrayNotes[2] === partitures[i][j + 2]) {
                    //console.log(partitures[i])
                    //console.log(arrayNotes) 
                }
            }
        }
    }
}








