const express = require('express');
const cors = require('cors');

const app = express();

const port = 3001;
app.use(express.json());
app.use(cors());

let contas = [
    {id: 1, titular: 'Ely', saldo: 200},
    {id: 2, titular: 'João', saldo: 300},
]

app.get('/conta', (req, res) => {
    res.json(contas);
});

app.get('/conta/:id', (req, res) => {
    const {id} = req.params;

    for (let i = 0; i < contas.length; i++) {
        if (contas[i].id == id) {
            res.send(contas[i]);
            return;
        }
    }
    const mensagem = 
      {"mensagem": "conta com id " + id + " não encontra."}
    res.status(404).json(mensagem);

});


let proximoID = 3;
app.post('/conta', (req, res) => {
    proximoID++;

    let conta = {
        id : proximoID,
        titular: req.body.titular,
        saldo: req.body.saldo
    }

    contas.push(conta);

    res.status(201).json(conta);
});




app.get('/', (req, res) => {
    res.status(200).send('hello world!');
});

app.post('/user', (req, res) => {
    res.status(201).send('POST executado');
});

app.delete('/user/:id', (req, res) => {
    res.status(204).send('DELETE executado');
    console.log('DELETE executado');
});

app.put('/user/:id', (req, res) => {
    res.status(200).send('PUT executado');
    console.log('DELETE executado');
});


app.get('/conta/1', (req, res) => {
    res.status(200).send('hello world! Conta!');
});

app.listen(port, () => {
    console.log('servidor rodando na porta ' + port);
} );

app.use( (req, res, next) => { 
  res.status(404).send('Não encontrado.'); 
});