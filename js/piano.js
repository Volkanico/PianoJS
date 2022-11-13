
let nomNotesTotals = ["do.mp3", "do-sust.mp3", "re.mp3", "re-sust.mp3", "mi.mp3", "fa-sust.mp3", "fa.mp3",
    "sol.mp3", "sol-sust.mp3", "la.mp3", "la-sust.mp3", "si0.mp3", "si.mp3", "do7.mp3"];


let nomNotes = ["do", "do-sust", "re", "re-sust", "mi", "fa-sust", "fa",
    "sol", "sol-sust", "la", "la-sust", "si0", "si", "do7"];

let imgNotes = ["nota1.png", "nota1sust.png", "notaRE.png", "notaREsust.png", "pentagrama.png"];

let notesTotals = []; //OBJECTES NOTA

let cerca = [];

let nomNota;
let sostingut = false;
let nomArxiu;

function Nota(nomNota, sostingut) {
    this.nomNota = nomNota;
    this.sostingut = sostingut;
    this.nomArxiu = nomArxiu;
    //PlAY()
    
    //HA DE CERCAR PER NOM DE NOTA
}

function totesLesNotesObj() {
    for (let i = 0; i < nomNotes.length; i++) {
        if (nomNotes[i].substr(-5) === "-sust") {
            notesTotals.push(new Nota(nomNotes[i], sostingut === false, nomArxiu = '../audio/' + nomNotesTotals[i]));
        } else {
            notesTotals.push(new Nota(nomNotes[i], sostingut === true, nomArxiu = '../audio/' + nomNotesTotals[i]));
        }
    }
    console.log(notesTotals)
}
totesLesNotesObj();


let laBalanguera = ["do", "re", "mi", "fa", "fa", "sol", "sol", "la-sust"];
let happyBirthday = ["do", "do", "re", "do", "fa", "mi", "do", "do", "re", "do", "sol", "fa"];
let partitures = [laBalanguera, happyBirthday];

function addCerca(nomNota, sostingut) {
    if (nomNota.substr(-9) === "-sust.mp3") {
        cerca.push(new Nota(nomNota, sostingut === false));
    } else {
        cerca.push(new Nota(nomNota, sostingut === true));
    }
}

function cercador(partitures) {
    let subconjORDENAT = ["fa", "mi", "do"]; //ENTRADA DE NOTES

    for (var i = 0; i < partitures.length; i++) { //COMPARADOR
        for (var j = 0; j < partitures[i].length; j++) {
            if (subconjORDENAT[0] === partitures[i][j] && subconjORDENAT[1] === partitures[i][j + 1] && subconjORDENAT[2] === partitures[i][j + 2]) {
                //console.log(partitures[i])
            }
        }
    }
}







//https://morioh.com/p/c378e90c9f41 
//console.log(cerca);
//guardarNotaANotesTotals(nomNotesTotals);
//console.log(cerca);
cercador(partitures);
