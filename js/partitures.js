"use strict";
const santAntoniRegistre = ['Sant Antoni i el dimoni', 'ma',];
const laBalangueraRegistre = ['La Balanguera', 'ca',];
const merryChristmasRegistre = ["Merry Christmas", 'en'];
const frereJacquesRegistre = ["Frère Jacques", 'ca'];
const registreCanconcsDe100 = [];

function registresArr() {
    registreCanconcsDe100.push(laBalangueraRegistre);
    registreCanconcsDe100.push(merryChristmasRegistre);
    registreCanconcsDe100.push(frereJacquesRegistre);
    registreCanconcsDe100.push(laBalangueraRegistre);
    registreCanconcsDe100.push(merryChristmasRegistre);
    registreCanconcsDe100.push(frereJacquesRegistre);
    for (let i = 0; i < 98; i++) {
        registreCanconcsDe100.push(santAntoniRegistre);
    }
}

let j;
function pintarRegistres() {
    let table = `
    <table>
    <tr>
    <th>Titol</th>
    <th>Idioma original</th>
    <th>Accions</th>
    </tr>`;
    let divTaula = document.querySelector("#table");
    divTaula.innerHTML = table;
    let taula = document.querySelector("table")


    for (j = 0; j < registreCanconcsDe100.length; j++) {
        let tr = document.createElement("tr")
        taula.appendChild(tr)
        tr.setAttribute("id",j)
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        td1.textContent = registreCanconcsDe100[j][0]
        td2.textContent = registreCanconcsDe100[j][1]
        let basura = document.createElement("button")
        basura.addEventListener("click", function () {
            obrirPrompt(tr.getAttribute("id"))
        });

        let imatgebasura = document.createElement("img")
        imatgebasura.setAttribute('src', '../icons/pen-to-square-solid.svg')
        basura.textContent = "Esborrar"
        basura.appendChild(imatgebasura)

        let editar = document.createElement("button")
        editar.textContent = "Editar"

        editar.addEventListener("click", function () {
            obrirPrompt(tr.getAttribute("id"))
        });

        let imatgeeditar = document.createElement("img")
        imatgeeditar.setAttribute('src', '../icons/trash-solid.svg')
        editar.appendChild(imatgeeditar)

        td3.appendChild(basura)
        td3.appendChild(editar)

    }
    divTaula.appendChild(taula)
    
}

function obrirPrompt(index) {
    if (window.confirm("Està segur que vol esborrar l'element? " + index)) {
        alert("S'ha esborrat l'element " + index)
        document.getElementById(index).remove();
        //event listener 
    }else{alert("S'ha cancelat l'acció")}
}

function init() {
    registresArr();
    pintarRegistres();
  
}
init();