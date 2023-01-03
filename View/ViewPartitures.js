'use strict';
document.querySelector("#botoLogIn").addEventListener('click', function() {
    let ample = window.screen.availWidth;
    let altura = window.screen.availHeight;
    ample = ample / 2 - 300;
    altura = altura / 2 - 200;
    let finestra;
    finestra = window.open("formulari.html", "Formulari", "width=800,height=500,left=" + ample + ",top=" + altura);
});
document
document.querySelector("button").addEventListener('click', function() {
    window.close();
});

function pintarCapceleraTaula(){
    let table = `
    <table>
    <thead>
    <tr>
    <th>Titol</th>
    <th>Idioma original</th>
    <th>Accions</th>
    </tr>
    </thead>
    <tbody>
    </tbody>`;
    let divTaula = document.querySelector("#table");
    divTaula.innerHTML = table;
}


function pintarTaula(taula){
    let tr = document.createElement("tr")
    taula.appendChild(tr)
    tr.setAttribute("id",j)
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    td1.textContent = registreCanconcsDe100[j][0] //PINTAR REGISTRE NOU
    td2.textContent = registreCanconcsDe100[j][1] //PINTAR REGISTRE NOU
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
    document.querySelector('tbody').appendChild(tr);
}