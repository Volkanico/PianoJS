
function validarTitol() {


}

function validarLletraoriginal() {
    let lletraOriginal = document.myform.lletraOriginal.value;
    if (lletraOriginal == null || lletraOriginal == "") {
        alert("Has d'indicar una lletra original");
        return false;
    }
}

function validateform() {
    var traduccio = document.myform.traduccio.value;

    let titol = document.myform.titol.value;
    let titolExeg = new RegExp("/\b^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/");
    if (titol == null || titol == "") {
        alert("Titol no pot estar buit");
        return false;
    } 
    validarLletraoriginal()
    if (traduccio == null || traduccio == "") {
        alert("Has d'indicar una traduccio");
        return false;
    }
    if (traduccio !== document.myform.lletraOriginal.value) {
        alert("La lletra original i la traduccio han de coincir")
        return false;
    }

}  