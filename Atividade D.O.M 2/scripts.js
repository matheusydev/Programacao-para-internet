document.querySelector('#botaoErro').addEventListener('click', function () {
    var errorMessage = document.querySelector('#mensagemErro');
    errorMessage.classList.remove('oculto');
    setTimeout(function () {
        errorMessage.classList.add('oculto');
    }, 3000);
});
