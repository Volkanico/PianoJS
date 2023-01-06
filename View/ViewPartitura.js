"use strict";
import { PartituraService } from "../Service/PartituraService.js";
export class ViewPartitura {
    constructor(){

    }
    partituraService = new PartituraService();

    posarRegistresDePartitura(idiomaoriginal,idiomatraduccio, idpartitura, lletraoriginal, lletratraduccio, notes, titol){
        let idpart = document.querySelector('input:nth-child(1)')
        console.log(idiomaoriginal,idiomatraduccio, idpartitura, lletraoriginal, lletratraduccio, notes, titol)
    }
    
    inciar(){
        this.posarRegistresDePartitura
    }
    
    posarIdHidden (){
        let idHidden = document.createElement('input');
        let form = document.querySelector('form');
        let titol = document.querySelector('label:nth-child(1)')
       
        idHidden.setAttribute('type','number')
        idHidden.setAttribute('id','id')
        form.insertBefore(idHidden, titol);
        idHidden.style.display = 'none';
    }
    
    
    
    
    validar() {
    
        let traduccio = document.myform.traduccio.value;
        let titol = document.myform.titol.value;
        let lletraOriginal = document.myform.lletraOriginal.value;
        //console.log(titol)
        let REGEXtitol = /\w+\s*/g;
        let myArray = titol.match(REGEXtitol);
        if (titol === null || titol === "") {
            alert("Titol no pot estar buit");
            return false;
        } 
        //console.log(myArray)
        else if(myArray.length <= 2){
            alert("mes paraules");
            return false;
        }
        else if (lletraOriginal == null || lletraOriginal == "") {
            alert("Has d'indicar una lletra original");
            return false;
        }
        else if (traduccio == null || traduccio == "") {
            alert("Has d'indicar una traduccio");
            return false;
        }
        else if (traduccio !== document.myform.lletraOriginal.value && document.myform.lang.value === 'ca') {
            alert("La lletra original i la traduccio han de coincidir")
            return false;
        }
        else{
            window.location= "https://iesmanacor.cat"
            return true;
        }
    }  
    
    
}
