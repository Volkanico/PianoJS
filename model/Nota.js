class Nota {
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
   cerca = [];

    addCerca(nom, alteracio) { //alteracio = tipus
        cerca.push(new Nota(nom,alteracio));
        //console.log(cerca)
    }

    cercador(partitures) {
        let subconjORDENAT = ["fa", "mi", "do"]; //ENTRADA DE NOTES ---- AQUEST EXEMPLE HA DE SER L'ARRAY CERCA
    
        for (let i = 0; i < partitures.length; i++) { //COMPARADOR
            for (let j = 0; j < partitures[i].length; j++) {
                if (subconjORDENAT[0] === partitures[i][j] && subconjORDENAT[1] === partitures[i][j + 1] && subconjORDENAT[2] === partitures[i][j + 2]) {
                    //console.log(cerca[] + '-->' + nomPartitura)
                }
            }
        }
    }
    getPartitures(){
        //TOTES LES PARTITURES QUE TENIM
    }
}