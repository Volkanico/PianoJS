"use strict";
export class Nota {
    id;
    nom;
    alteracio;
    ordre;

    constructor(id, nom, alteracio, ordre){
        this.id = id;
        this.nom = nom;
        this.alteracio = alteracio;
        this.ordre = ordre;
    }
    constructor(nom, alteracio){
        this.nom = nom;
        this.alteracio = alteracio;
    }
  
}