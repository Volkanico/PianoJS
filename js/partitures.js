const santAntoniRegistre = ['Sant Antoni i el dimoni', 'ca',];
const laBalangueraRegistre = ['La Balanguera', 'ca',];
const merryChristmasRegistre = ["Merry Christmas", 'en'];
const frereJacquesRegistre = ["Frère Jacques", 'ca'];// llevar botons i posar notes
//fer create element amb id i imatges
const registreCanconcsDe100 = [];

function registresArr() {
    registreCanconcsDe100.push(laBalangueraRegistre);
    registreCanconcsDe100.push(merryChristmasRegistre);
    registreCanconcsDe100.push(frereJacquesRegistre);
    for (let i = 0; i < 98; i++) {
        registreCanconcsDe100.push(santAntoniRegistre);
    }
}
//id nom notes[] idioma
let j;
function pintarRegistres() {
    let table = '';
    table += '<table>';
    table += '<tr>';
    table += '<th>Titol</th>';
    table += '<th>Idioma original</th>';
    table += '<th>Accions</th>';
    table += '</tr>';

    taula = document.createElement("table")
    let td3 = document.createElement("td")
    let divTaula = document.querySelector("#table")
    for (j = 0; j < registreCanconcsDe100.length; j++) {
        let tr = document.createElement("tr")
        tr.setAttribute("id", j)
        taula.appendChild(tr)
        let td1 = document.createElement("td")

        let td2 = document.createElement("td")
        td3 = document.createElement("td")
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        td1.textContent = registreCanconcsDe100[0][0]
        td2.textContent = registreCanconcsDe100[0][1]
        td1.setAttribute("id", "a" + j);
        td3.setAttribute("id", "c" + j);
        //AQUI NO PODEM POSAR document.querySelector("a"+j).appendChild(basura) PER AFEGIR EL BOTO DE ESBORRAR A TOTS ELS REGISTRES
        //PER AIXO TENIM EL METODO DE accions() QUE ES TEMPORAL PER ARREGLAR-HO
    }
    divTaula.appendChild(taula)
    document.getElementById("a0").textContent = "Sant antoni i el dimoni"
    document.getElementById("a1").textContent = "Frerè Jacques"
    document.getElementById("a2").textContent = "Merry Christmas"
}


let basura = document.createElement("button")
basura.addEventListener("click", function () {
    obrirPrompt()
});

let imatgebasura = document.createElement("img")
imatgebasura.setAttribute('src', '../icons/pen-to-square-solid.svg')
basura.textContent = "Esborrar"
basura.appendChild(imatgebasura)

let editar = document.createElement("button")
editar.textContent = "Editar"
editar.addEventListener("click", function () {
    obrirPrompt(j)
});

let imatgeeditar = document.createElement("img")
imatgeeditar.setAttribute('src', '../icons/trash-solid.svg')
editar.appendChild(imatgeeditar)

function accions() {
    document.querySelector("td:nth-child(3)").appendChild(basura)
    document.querySelector("td:nth-child(3)").appendChild(editar)
}
/*
function insertAfter(e,i){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
}*/


function obrirPrompt() {
    if (window.confirm("Està segur que vol esborrar l'element? ")) {
        alert("S'ha esborrat l'element 0")
        document.getElementById("0").remove();
        //event listener 
    }
}

function eliminar(j) {

}


function init() {
    registresArr();
    pintarRegistres();
    accions();
}
init();