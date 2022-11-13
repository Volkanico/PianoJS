
function login() {
    let ample = window.screen.availWidth;
    let altura = window.screen.availHeight;
    ample = ample / 2 - 300;
    altura = altura / 2 - 200;
    let finestra;
    finestra = window.open("formulari.html", "Formulari", "width=800,height=500,left=" + ample + ",top=" + altura);
}
function tancar(){
    window.close();
}