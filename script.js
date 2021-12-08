/* Regras do negócio: 
Carne - 400g por pessoa / + de 6 horas - 650g
Cerveja - 1200ml por pessoa / + de 6 horas - 2000ml (criança não bebe)
Refrigerante/agua - 1000ml por pessoa / + de 6 horas 1500ml
Crianças valem por 0.5 */

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputHoras = document.getElementById("horas");
let resultado = document.getElementById("resultado");
function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let horas = inputHoras.value;
    let qtdCarne = (carnePorPessoa(horas) * adultos) + (carnePorPessoa(horas) / 2 * criancas);
    let qtdCerveja = cervejaPorPessoa(horas) * adultos;
    let qtdRefri = (refriPorPessoa(horas) * adultos) + (refriPorPessoa(horas) / 2 * criancas);
    if ((adultos < 0) || (criancas < 0) || (horas < 0)) {
        alert("Os valores não podem ser negativos!")
    }
    else {
        resultado.innerHTML = "<p>🥩 " + qtdCarne / 1000 + " Kg de carne.</p>";
        resultado.innerHTML += "<p>🍺 " + Math.ceil(qtdCerveja / 350) + " latinhas de cerveja.</p>";
        resultado.innerHTML += "<p>🥤 " + Math.ceil(qtdRefri / 2000) + " garrafas de refrigerante de 2 litros.</p>";
    }
}

function carnePorPessoa(horas) {
    if (horas > 6) {
        return 650;
    }
    else {
        return 400;
    }
}
function cervejaPorPessoa(horas) {
    if (horas > 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}
function refriPorPessoa(horas) {
    if (horas > 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}