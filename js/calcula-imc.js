var titulo = document.querySelector(".title");
titulo.textContent = "Aparecida Nutricionista"

var pacientes =document.querySelectorAll(".paciente");

for (i=0; i < pacientes.length; i++){

    var trPaciente = pacientes[i];

    var tdPeso = trPaciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var pesoEhValido = validaPeso(peso);

    var tdAltura = trPaciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var alturaEhValida = validaAltura(altura);

    var tdImc = trPaciente.querySelector(".info-imc");

    if(!pesoEhValido){
        tdImc.textContent = "Peso inválido";
    }

    if(!alturaEhValida){
        tdImc.textContent = "Altura inválida";
    }

    if (pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 1000 || peso <= 0){
        return false;
    }else{
        return true;
    }
}

function validaAltura(altura){
    if(altura > 3 || altura <= 0){
        return false;
    }else{
        return true;
    }
}