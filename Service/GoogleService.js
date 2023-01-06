/*Anem a afegir un nou servei: GoogleService, el qual, de moment, tindrà un únic
mètode: getIdiomes el qual retornarà una llista d'objectes Idioma creada
anteriorment. Per obtenir els idiomes necessiteu saber:
URL: http://localhost:8080/piano/nologin/google/translate/languages
Mètode: POST
Paràmetres entrada:
Resultat: JSON d'objectes amb els idiomes que proporciona Google
Finalment, modifiqueu el formulari i feu que la llista d'idiomes de la partitura es
carregui amb el resultat de la cridada anterior.*/

import { Idioma } from "../model/Idioma.js";
export class GoogleService {
    constructor() { }

    partituresTotals = []

    


    
    getIdiomes() {
        const promeses = [];
        const f = fetch("https://theteacher.codiblau.com/piano/nologin/google/translate/languages", {
            method: 'post',
            body: ""
        });
        promeses.push(f);
        const allPromeses = Promise.all(promeses)
        allPromeses.then(arr => {
            const promeses2 = [];
            for (let a of arr) {
                promeses2.push(a.json());
            }
            Promise.all(promeses2).then(arr2 => {
                let part = [];
                for (let a2 of arr2) {
                    console.log(a2)
                    for (let i = 0; i < a2.length; i++) {
                        part.push(new Idioma(a2[i].code, a2[i].name))
                        
                    } console.log(part)
                    for(let idioma of part){
                        let option = document.createElement('option');
                        option.setAttribute('value', idioma.codi)
                        option.textContent = idioma.nom;
                        document.querySelector('select').appendChild(option)
                        console.log(idioma.code)
                    }
                    return part;
                    
                }
            })
        })
    }
}