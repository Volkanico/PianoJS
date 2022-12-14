"use strict";
import { Partitura } from "../model/Partitura.js";
import { ViewPartitures } from "../View/ViewPartitures.js";
import { ViewPartitura } from "../View/ViewPartitura.js";
export class PartituraService {
    constructor() {}
    
    
    async getPartituraById(id){
    console.log(id) //ARRIBA LA ID PER PARAMETRE
        
        let data = {id:id};
          let response = await fetch('https://theteacher.codiblau.com/piano/nologin/score/get', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          let a = await response.json(); //RECULL LA PARTITURA DEL SERVIDOR INDICADA CORRECTAMENT
          console.log(a) //PARTITURA DEL SERVIDOR
          let viewPartitura = new ViewPartitura();
           window.location.href = './partitura.html';
           viewPartitura.posarRegistresDePartitura(a.idiomaoriginal,a.idiomatraduccio, a.idpartitura, a.lletraoriginal, a.lletratraduccio, a.notes, a.titol);
          localStorage.setItem('idiomaOrig', a.idiomaoriginal)
          localStorage.setItem('idiomaTrad', a.idiomatraduccio)
          localStorage.setItem('id', a.idpartitura)
          localStorage.setItem('lletraOrig', a.lletraoriginal)
          localStorage.setItem('lletraTrad', a.lletratraduccio)
          localStorage.setItem('notes', a.notes)
          localStorage.setItem('titol', a.titol)
           console.log(localStorage)
          
    }
   

    async getPartitures(){
        
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
                        let viewPartitures = new ViewPartitures();
                        viewPartitures.pintarTaula(taula, part[i].titol, part[i].idiomaOriginal, a2[i].idpartitura)
                    } 
                }
                for(let i = 0; i < part.length;i++){
                    part[i].notes.sort() //ORDENAR NOTES DE LES PARTITURES
                }
                
                
            })
        })    
    }
   
    //-------------------------------------------------------------------------------------------------------------------------

    addCerca(nomNota, sostingut, arrayNotes) {
        if (nomNota.substr(-5) === "-sust") {
            arrayNotes.push(nomNota/*,sostingut*/); //ARA COMPROVA L'ARRAY, DESPRES HO HA DE FER L'OBJECTE NOTA
        } else {
            arrayNotes.push(nomNota/*,sostingut*/);
        }
        //Funci?? que, passat el nom d'una nota i el tipus (si ??s sostingut o no), afegir?? un objecte "Nota" a un array de cerca (variable cerca de l'esquelet).
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








