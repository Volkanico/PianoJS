


//let todosLosAudios = [];
let nomNota;
let tipusNota = false;
let cerca = [];
function nota(nomNota, tipusNota) {
        this.nomNota = nomNota;
        this.tipusNota = tipusNota;
}

function addCerca (nomNota,tipusNota){
    cerca.push(new nota(nomNota,tipusNota));
}

/*
function afegirAudio(){
   for(let i = 0; i <  )
    todosLosAudios.push(new Audio("../audio/do-sust.mp3"));
}
afegirAudio();*/
console.log(todosLosAudios);
