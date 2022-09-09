let hamburguerNome;
let hamburguerValor;

let acompanhamentoNome ;
let acompanhamentoValor;

let bebidaNome;
let bebidaValor;

let total;

function converterNumero(preco) {

    preco = preco.replace("R$ ", "").replace(",", ".");     
    preco = Number(preco);
    return preco;
}

function selecionarHamburguer(hamburguerClicado) {
    const hamburguer = document.querySelector(".selecionado1");
    if (hamburguer !== null ) {
        hamburguer.classList.remove("selecionado1"); 
    } 
    
    hamburguerClicado.classList.add("selecionado1"); 

    hamburguerNome = hamburguerClicado.querySelector("h3").innerText;
    hamburguerValor = hamburguerClicado.querySelector("h4").innerText;
    hamburguerValor = converterNumero(hamburguerValor);

    fecharPedido()
}


function selecionarAcompanhamento(acompanhamentoClicado) {
    const acompanhamento = document.querySelector(".selecionado2");
    if (acompanhamento !== null) {
        acompanhamento.classList.remove("selecionado2");
    }
    acompanhamentoClicado.classList.add("selecionado2");

    acompanhamentoNome = acompanhamentoClicado.querySelector("h3").innerText;
    acompanhamentoValor = acompanhamentoClicado.querySelector("h4").innerText;
    acompanhamentoValor = converterNumero(acompanhamentoValor);

    fecharPedido()
}

function selecionarBebida(bebidaClicado) {
    const bebida = document.querySelector(".selecionado3");
    if (bebida !== null) {
        bebida.classList.remove("selecionado3");
    }
    
    bebidaClicado.classList.add("selecionado3");

    bebidaNome = bebidaClicado.querySelector("h3").innerText;
    bebidaValor = bebidaClicado.querySelector("h4").innerText;
    bebidaValor = converterNumero(bebidaValor);

    fecharPedido()
}

function fecharPedido() {

    if (hamburguerValor && acompanhamentoValor && bebidaValor) {
        document.querySelector(".completo").classList.remove("oculto");
        document.querySelector(".incompleto").classList.add("oculto");
        total = (hamburguerValor + acompanhamentoValor + bebidaValor);
    }

}

function confirmarPedido() {

}