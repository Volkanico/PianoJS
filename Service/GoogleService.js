/*Anem a afegir un nou servei: GoogleService, el qual, de moment, tindrà un únic
mètode: getIdiomes el qual retornarà una llista d'objectes Idioma creada
anteriorment. Per obtenir els idiomes necessiteu saber:
URL: http://localhost:8080/piano/nologin/google/translate/languages
Mètode: POST
Paràmetres entrada:
Resultat: JSON d'objectes amb els idiomes que proporciona Google
Finalment, modifiqueu el formulari i feu que la llista d'idiomes de la partitura es
carregui amb el resultat de la cridada anterior.*/

//import { Idioma } from "../model/Idioma";
class GoogleService {
    constructor(){}
    getIdiomes(){
        let idiomesFetch = fetch('http://localhost:8080/piano/nologin/google/translate/languages')
        let idiomes = idiomesFetch.json(idiomesFetch);
        //return llistaIdiomes;
    }
}