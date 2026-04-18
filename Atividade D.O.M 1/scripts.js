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

function contarParagrafos() {
    let paragrafos = document.getElementById("contar").children;

    document.getElementById("resultado").innerHTML = "Total de parágrafos: " + paragrafos.length;
}