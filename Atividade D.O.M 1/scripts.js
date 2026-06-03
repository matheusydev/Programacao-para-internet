// QUESTÃO 2
function validar() {
    let nome = document.getElementById("nome").value;
    if (nome === "") {
        document.getElementById("erro").innerHTML = "Preencha o campo!";
    } else {
        document.getElementById("erro").innerHTML = "Campo preenchido!";
    }
}

function alterarParagrafos() {
    let paragrafos = document.getElementById("alterar").getElementsByTagName("p");
    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].innerHTML = "Parágrafo " + (i + 1) + " alterado!";
    }
}


// QUESTÃO 3

function contarParagrafos() {
    let paragrafos = document.getElementById("contar").getElementsByTagName("p");
    document.getElementById("resultado").innerHTML = "Total de parágrafos: " + paragrafos.length;
}


// QUESTÃO 4 

const botao = document.getElementById("botao");
if (botao) {
    botao.addEventListener("click", function() {
        let paragrafo = document.getElementById("paragrafo");
        paragrafo.innerText = "O texto deste parágrafo foi alterado!";
    });
}

const botaoLimpar = document.getElementById("limpar");
if (botaoLimpar) {
    botaoLimpar.addEventListener("click", function() {
        let paragrafo = document.getElementById("paragrafo");
        paragrafo.innerText = "";
    });
}


// QUESTÃO 6

function mudarCor() {
    document.getElementById("caixaCor").style.backgroundColor = "red";
}


// QUESTÃO 7

function copiarMaiusculo() {
    let origem = document.getElementById("textoOrigem").value;
    document.getElementById("textoDestino").value = origem.toUpperCase();
}


// QUESTÃO 8

function altoContraste() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function resetarCores() {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
}


// QUESTÃO 9

let tamanhoAtual = 16; 

function alterarFonte(mudanca) {
    tamanhoAtual += mudanca;
    document.body.style.fontSize = tamanhoAtual + "px";
}


// QUESTÃO 10

function calcular() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = 0;

    if (isNaN(n1)) n1 = 0;
    if (isNaN(n2)) n2 = 0;

    if (document.getElementById("soma").checked) {
        resultado = n1 + n2;
    } else if (document.getElementById("subtracao").checked) {
        resultado = n1 - n2;
    } else if (document.getElementById("multiplicacao").checked) {
        resultado = n1 * n2;
    } else if (document.getElementById("divisao").checked) {
        // Validação simples para evitar divisão por zero
        resultado = n2 !== 0 ? n1 / n2 : "Erro: Divisão por zero";
    }

    document.getElementById("resCalc").innerText = resultado;
}


// QUESTÃO 11

function adicionarNaLista() {
    let texto = document.getElementById("novoItemLista").value;
    
    // Evita adicionar um elemento vazio (li em branco)
    if(texto.trim() === "") return; 
    
    let ul = document.getElementById("minhaLista");
    let li = document.createElement("li");
    li.textContent = texto;
    
    ul.appendChild(li);
    document.getElementById("novoItemLista").value = ""; // Limpa a caixa de texto
}

// QUESTÃO 12

function adicionarNoSelect() {
    let texto = document.getElementById("novoItemSelect").value;
    
    if(texto.trim() === "") return;
    
    let select = document.getElementById("meuSelect");
    let option = document.createElement("option");
    option.textContent = texto;
    option.value = texto;
    
    select.appendChild(option);
    document.getElementById("novoItemSelect").value = ""; 
}