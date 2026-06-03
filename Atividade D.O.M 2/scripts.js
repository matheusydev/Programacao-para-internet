document.querySelector('#botaoErro').addEventListener('click', function () {
    var errorMessage = document.querySelector('#mensagemErro');
    errorMessage.classList.remove('oculto');
    setTimeout(function () {
        errorMessage.classList.add('oculto');
    }, 3000);
});

// function exibirErro(mensagem, idElemento) {
//     const elemento = document.getElementById(idElemento);
//     if (elemento) {
//         elemento.textContent = mensagem;
//         elemento.classList.remove('oculto');
        
//         setTimeout(() => {
//             elemento.classList.add('oculto');
//         }, 3000);
//     }
// }

// // document.querySelector('#botaoErro').addEventListener('click', () => {
// //     exibirErro("O campo deve ser preenchido", "mensagemErro");
// // });