// QUESTÃO 1

function exibirErro(mensagem, idComponente) {
    const elemento = document.getElementById(idComponente);
    if (elemento) {
        elemento.innerHTML = mensagem;
        elemento.classList.remove('oculto');
        
        setTimeout(() => {
            elemento.classList.add('oculto');
            elemento.innerHTML = '';
        }, 3000);
    }
}


document.getElementById('btnQ1').addEventListener('click', () => {
    exibirErro("Erro personalizado testado com sucesso!", "erroQ1");
});

// a) Retire os espaços usando a função trim() das strings e faça um if testando se a string resultante é nula/vazia; 
// b) Sinalize que o conteúdo do campo não pode ser vazio usando a função de exibir mensagens de erro da questão anterior.
document.getElementById('btnQ2').addEventListener('click', () => {
    const input = document.getElementById('textoQ2');
    const valorTrimmed = input.value.trim();

    if (valorTrimmed === "") {
        exibirErro("O campo não pode ser vazio.", "erroQ2");
        document.getElementById('resultadoQ2').innerHTML = "";
    } else {
        document.getElementById('resultadoQ2').innerHTML = `Você digitou: ${valorTrimmed}`;
        input.value = ""; 
    }
});

// QUESTÃO 3
document.getElementById('btnQ3').addEventListener('click', () => {
    const interacoesRaw = document.getElementById('interacoesQ3').value.trim();
    const visualizacoesRaw = document.getElementById('visualizacoesQ3').value.trim();
    
    const interacoes = parseFloat(interacoesRaw);
    const visualizacoes = parseFloat(visualizacoesRaw);

    if (isNaN(interacoes) || isNaN(visualizacoes) || interacoesRaw === "" || visualizacoesRaw === "") {
        exibirErro("Insira apenas valores numéricos válidos.", "erroQ3");
        document.getElementById('resultadoQ3').innerHTML = "";
        return;
    }

    if (visualizacoes === 0) {
        exibirErro("As visualizações devem ser maiores que zero.", "erroQ3");
        return;
    }

    const taxa = (interacoes / visualizacoes) * 100;
    document.getElementById('resultadoQ3').innerHTML = `Engajamento: ${taxa.toFixed(2)}%`;
});

//  QUESTÇAO 4
document.getElementById('btnQ4').addEventListener('click', () => {
    const inputUpload = document.getElementById('uploadQ4');
    const arquivoSelecionado = inputUpload.files[0];

    if (!arquivoSelecionado) {
        exibirErro("Selecione uma imagem primeiro.", "erroQ4");
        return;
    }

    const resultadoDiv = document.getElementById('resultadoQ4');
    resultadoDiv.innerHTML = ''; 

    const img = document.createElement('img');
    img.src = URL.createObjectURL(arquivoSelecionado);
    img.style.maxWidth = "200px"; 
    img.style.borderRadius = "8px";
    
    resultadoDiv.appendChild(img);
});

// QUESTÃO 5

document.getElementById('selectImgQ5').addEventListener('change', function() {
    const url = this.value;
    const resultadoDiv = document.getElementById('resultadoQ5');
    resultadoDiv.innerHTML = '';

    if (url !== "") {
        const img = document.createElement('img');
        img.src = url;
        img.style.borderRadius = "8px";
        resultadoDiv.appendChild(img);
    }
});


// QUESTÃO 6

document.getElementById('btnQ6').addEventListener('click', () => {
    const selecionados = document.querySelectorAll('input[name="redesSociais"]:checked');
    const resultadoDiv = document.getElementById('resultadoQ6');
    
    if (selecionados.length === 0) {
        exibirErro("Selecione pelo menos uma rede social.", "erroQ6");
        resultadoDiv.innerHTML = "";
        return;
    }

    const redes = Array.from(selecionados).map(cb => cb.value);
    resultadoDiv.innerHTML = `Redes selecionadas: ${redes.join(", ")}`;
});


document.getElementById('btnAddHash').addEventListener('click', () => {
    const input = document.getElementById('inputHash');
    let hashtag = input.value.trim();
    const select = document.getElementById('selectHash');

    if (hashtag.length > 0 && !hashtag.startsWith('#')) {
        hashtag = '#' + hashtag;
    }

    if (hashtag.length < 2) {
        exibirErro("A hashtag deve ter ao menos 2 caracteres.", "erroHash");
        return;
    }

    if (select.options.length >= 5) {
        exibirErro("Limite máximo de 5 hashtags atingido.", "erroHash");
        return;
    }

    const repetida = Array.from(select.options).some(opt => opt.value.toLowerCase() === hashtag.toLowerCase());
    if (repetida) {
        exibirErro("Esta hashtag já foi adicionada.", "erroHash");
        return;
    }

    const option = document.createElement('option');
    option.value = hashtag;
    option.text = hashtag;
    select.appendChild(option);
    input.value = ""; 
});

document.getElementById('btnRemoveHash').addEventListener('click', () => {
    const select = document.getElementById('selectHash');
    if (select.selectedOptions.length === 0) {
        exibirErro("Selecione uma hashtag na lista para remover.", "erroHash");
        return;
    }
    select.removeChild(select.selectedOptions[0]);
});


const ativosDisponiveis = document.getElementById('ativosDisponiveis');
const carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
const btnMoverDireita = document.getElementById('btnMoverDireita');
const btnMoverEsquerda = document.getElementById('btnMoverEsquerda');

function gerenciarBotoes() {
    btnMoverDireita.disabled = ativosDisponiveis.options.length === 0;
    btnMoverEsquerda.disabled = carteiraInvestimentos.options.length === 0;
}

function moverOpcoes(origem, destino) {
    const selecionados = Array.from(origem.selectedOptions);
    
    if (selecionados.length === 0) {
        exibirErro("Selecione pelo menos um ativo para mover.", "erroQ11");
        return;
    }

    selecionados.forEach(opcao => {
        destino.appendChild(opcao); 
        opcao.selected = false;     
    });

    gerenciarBotoes();
}

btnMoverDireita.addEventListener('click', () => {
    moverOpcoes(ativosDisponiveis, carteiraInvestimentos);
});

btnMoverEsquerda.addEventListener('click', () => {
    moverOpcoes(carteiraInvestimentos, ativosDisponiveis);
});


gerenciarBotoes();