function q(seletor) {
    return document.querySelector(seletor);
}

let id = 1;

q('#cadastrar').addEventListener('click', ()=>{
    let descricao = q('#descricao').value;
    let status = q('#status').value;

    let tarefas = q('#tarefas');

    //criando uma linha de tarefas
    let linha = document.createElement('tr');
    linha.id = id++;
    //criando as colunas
    let tdId = document.createElement('td');
    let tdDescricao = document.createElement('td');
    let tdStatus = document.createElement('td');
    let tdAcoes = document.createElement('td');
     let tdInicio = document.createElement('td');
    let tdFim = document.createElement('td');
    let botaoIniciar = document.createElement('button');

    //preenchendo as colunas
    tdId.innerText = id;
    tdDescricao.innerText = descricao;
    tdStatus.innerText = status;
    tdAcoes.appendChild(botaoIniciar);
    botaoIniciar.innerText = 'Iniciar';

    linha.appendChild(tdId);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdStatus);
    linha.appendChild(tdInicio);
    linha.appendChild(tdFim);
    linha.appendChild(tdAcoes);  

    tarefas.appendChild(linha);

    botaoIniciar.addEventListener('click', () => {
        tdStatus.innerText = 'Iniciada';
        let dataInicio = new Date();
        tdInicio.innerText = 
             dataInicio.toLocaleDateString('pt-BR');
        botaoIniciar.style.display = 'none';
    });
});