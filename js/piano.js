
let nomNotesTotals = ["do-sust.mp3", "do-sust.ogg", "do.mp3", "do.ogg", "do7.mp3", "do7.ogg", "fa-sust.mp3", "fa-sust.ogg", "fa.mp3",
    "fa.ogg", "la-sust.mp3", "la-sust.ogg", "la.mp3", "la.ogg", "mi.mp3", "mi.ogg", "re-sust.mp3", "re-sust.ogg", "re.mp3",
    "re.ogg", "si.mp3", "si.ogg", "si0.mp3", "si0.ogg", "sol-sust.mp3", "sol-sust.ogg", "sol.mp3", "sol.ogg"];
let imgNotes = ["nota1.png", "nota1sust.png", "nota2.png", "nota2sust.png", "pentagrama.png"];

let nomNota;
let sostingut = false;
let cerca = [];

let notesTotals = [];

let laBalanguera = ["do", "re", "mi", "fa", "fa", "sol", "sol", "la-sust"];
let happyBirthday = ["do", "do", "re", "do", "fa", "mi", "do", "do", "re", "do", "sol", "fa"];

let partitures = [laBalanguera, happyBirthday];

function Nota(nomNota, sostingut) {
    this.nomNota = nomNota;
    this.sostingut = sostingut;
}


function addCerca(nomNota, sostingut) {
    if (nomNota.substr(-9) === "-sust.mp3" || nomNota.substr(-9) === "-sust.ogg") {
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
                console.log(partitures[i])
            }
        }
    }
}

var context= new AudioContext();
 
function nota(frecuencia){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=frecuencia;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
    }

//console.log(cerca);
//guardarNotaANotesTotals(nomNotesTotals);
//console.log(cerca);
cercador(partitures);
