
let botao =
     document.querySelector("#botao");

let selectO =
    document.querySelector("#moeda-origem");
let selectD = 
    document.querySelector("#moeda-destino");

let inputValor  =
    document.querySelector("#de");

let inputRes =
    document.querySelector("#resultado");

const taxas = {
  BRL: {
    BRL: 1,
    USD: 0.189, 
    EUR: 0.163,     
    JPY: 29.8       
  },
  USD: {
    USD: 1,
    BRL: 5.28,
    EUR: 0.862,
    JPY: 158
  },
  EUR: {
    EUR: 1,
    BRL: 6.13,
    USD: 1.16,
    JPY: 183
  },
  JPY: {
    JPY: 1,
    BRL: 0.0335,
    USD: 0.00633,
    EUR: 0.00546
  }
};

function convertermoeda(){
    let origem = selectO.value;
    let destino = selectD.value;
    let valor = Number(inputValor.value);

    if (!origem || !destino) {
        inputRes.value = "Escolha as duas moedas!";
        return;
    }

    if (isNaN(valor) || valor <= 0) {
        inputRes.value = "Digite um valor maior que zero!";
        return;
    }

    let taxa = taxas[origem][destino];

    if (taxa === undefined) {
        inputRes.value = "Conversão não disponível.";
        return;
    }

    let resultado = valor * taxa;
    let resultadoBonito = resultado.toFixed(2).replace(".", ",");
    
    let simbolo = "";
    if (destino === "BRL") simbolo = "R$ ";
    else if (destino === "USD") simbolo = "US$ ";
    else if (destino === "EUR") simbolo = "€ ";
    else if (destino === "JPY") simbolo = "¥ ";

    inputRes.value = simbolo + resultadoBonito + " " + destino;
}

botao.addEventListener("click", convertermoeda);