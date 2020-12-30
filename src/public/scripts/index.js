
let inputAltura = document.querySelector("#altura");
let inputPeso = document.querySelector("#peso");
let inputIdade = document.querySelector("#idade");
let genero = 0;

const Masculino = document.querySelector('#masc');
const Feminino = document.querySelector('#fem');


function calcular() {

    let alturaSemFormatar = inputAltura.value;
    let altura = alturaSemFormatar.replace(",", ".");

    let pesoSemFormatar = inputPeso.value;
    let peso = pesoSemFormatar.replace(",", ".");

    let idade = inputIdade.value;

    // Calcular IMC
    let imcCalculado = calcularIMC(peso, altura);
    console.log(imcCalculado)
    // -Calcular IMC-

    // Calcular Agua
    let aguaCalculada = calcularAgua(peso);
    console.log(aguaCalculada)
    // -Calcular Agua-

    // Calcular TMB
    
    let tmbFinal = calcularTmb(genero, peso, altura, idade)
    console.log(tmbFinal)
    // -Calcular TMB-
}


function calcularIMC(peso, altura) {
    const imcCalculado = peso / altura ** 2
    return imcCalculado.toFixed(1);
}

function calcularAgua(peso) {
    const pesoCalculado = peso * 0.035;
    return pesoCalculado.toFixed(1);
}


function calcularTmb(genero, peso, altura, idade) {

    alturaEmCm = altura * 100

    if(genero == 0){
        let calculo = 66.5 + (13.75 * peso) + (5.0 * alturaEmCm) - (6.8 * idade);
        return calculo
    } else {
        let calculo = 665.1 + (9.56 * peso) + (1.8 * alturaEmCm) - (4.7 * idade);
        return calculo
    }
}


function toggle(element) {

    const Masc = document.querySelector("#masc")
    const Fem = document.querySelector("#fem")

    if (Masc.classList.contains("escolhido")){
        Fem.classList.add("escolhido");
        Masc.classList.remove("escolhido");
    } else if (Fem.classList.contains("escolhido")) {
        Fem.classList.remove("escolhido");
        Masc.classList.add("escolhido");
    } else {
        element.classList.add("escolhido");
    }

    if (Masc.classList.contains("escolhido")){
        genero = 0;
    } else {
        genero = 1;
    }
}








