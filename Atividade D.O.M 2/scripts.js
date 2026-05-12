function exibirErro(mensagem, idComponente) {
    const elemento = document.querySelector(`#${idComponente}`);
    if (elemento) {
        elemento.innerHTML = mensagem;
        elemento.classList.remove('oculto');

        setTimeout(function() {
            elemento.classList.add('oculto');
        }, 3000); 
    }
}


document.querySelector('#botaoErro').addEventListener('click', function() {
    exibirErro("Erro personalizado: O campo é obrigatório!", "mensagemErro");
});