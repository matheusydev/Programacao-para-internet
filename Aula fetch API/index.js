function getById(id) {
    return document.getElementById(id);
}

let botaoConsultar = getById('botaoConsultar');
botaoConsultar.addEventListener('click', consultaCEP);

function consultaCEP() {
    let textoCEP = getById('TextoCEP').value;
    let resultado = getById('resultado');

    let url = `https://viacep.com.br/ws/${textoCEP}/json/`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        })
        .then(json => {
            if (json.erro) {
                throw new Error('CEP não encontrado: ' + textoCEP);
            }

            let resposta = `
                <p><strong>Logradouro:</strong> ${json.logradouro}</p>
                <p><strong>Bairro:</strong> ${json.bairro}</p>
                <p><strong>Cidade:</strong> ${json.localidade}</p>
                <p><strong>Estado:</strong> ${json.uf}</p>
            `;

            resultado.innerHTML = resposta;
        })
        .catch(erro => {
            resultado.innerHTML = `<p style="color:red">${erro.message}</p>`;
        });
}