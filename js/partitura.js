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
    let titolRexeg = /\b^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/g;
    if (titol === null || titol === "") {
        alert("Titol no pot estar buit");
        return false;
    } 
    console.log(titol)
    var REGEXtitol = /\w+\s*/g;
    var myArray = titol.match(REGEXtitol);
    console.log(myArray)
    if(myArray.length <= 2){
        alert("mes paraules");
        return false;
    }
    validarLletraoriginal()
    if (traduccio == null || traduccio == "") {
        alert("Has d'indicar una traduccio");
        return false;
    }
    if (traduccio !== document.myform.lletraOriginal.value && document.myform.lang.value === 'ca') {
        alert("La lletra original i la traduccio han de coincir")
        return false;
    }

}  