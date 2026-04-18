function validar() {
  let nome = document.getElementById("nome").value;

  if (nome === "") {
    document.getElementById("erro").innerHTML = "Preencha o campo!";
  } else {
    document.getElementById("erro").innerHTML = "Tudo certo!";
  }
}