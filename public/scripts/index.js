
let inputAltura = document.querySelector("#altura");
let inputPeso = document.querySelector("#peso");
let inputIdade = document.querySelector("#idade");

function calcular() {

    let alturaSemFormatar = inputAltura.value;
    let altura = alturaSemFormatar.replace(",", ".");

    let pesoSemFormatar = inputPeso.value;
    let peso = pesoSemFormatar.replace(",", ".");

    let idade = inputIdade.value;

    // Calcular IMC
    let imcCalculado = calcularIMC(peso, altura);
    let imcFinal = formatarUmaCasa(imcCalculado);
    console.log(imcFinal)
    // -Calcular IMC-

    // Calcular Agua
    let aguaCalculada = calcularAgua(peso);
    let aguaFinal = formatarUmaCasa(aguaCalculada);
    console.log(aguaFinal)
    // -Calcular Agua-

    // Calcular TMB
    let genero = mostrarGenero();
    let tmbFinal = calcularTmb(genero, peso, altura, idade)
    console.log(tmbFinal)
    // -Calcular TMB-
}


function calcularIMC(peso, altura) {

    return peso / altura ** 2;

}

function calcularAgua(peso) {

    return peso * 0.035;

}

function formatarUmaCasa(num) {
    return num.toFixed(1)
}

function mostrarGenero() {
    let rads = document.getElementsByName('gender')

    for (var i = 0; i < rads.length; i++) {
        if(rads[i].checked){
            return rads[i].value ;
        }
    }
}

function calcularTmb(genero, peso, altura, idade) {
//**Homens devem utilizar a seguinte a fórmula:**

//66,5 + (13,75 x Peso) + (5,0 x Altura em cm) – (6,8 x Idade).

//**Enquanto isso, mulheres devem realizar a fórmula seguinte:**

//665,1 + (9,56 x Peso) + (1,8 x Altura em cm) – (4,7 x Idade).

    alturaEmCm = altura * 100

    if(genero == 0){
        let calculo = 66.5 + (13.75 * peso) + (5.0 * alturaEmCm) - (6.8 * idade);
        return calculo
    } else {
        let calculo = 665.1 + (9.56 * peso) + (1.8 * alturaEmCm) - (4.7 * idade);
        return calculo
    }
}






