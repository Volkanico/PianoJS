const santAntoniRegistre = ['Sant Antoni i el dimoni', 'ma',];
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