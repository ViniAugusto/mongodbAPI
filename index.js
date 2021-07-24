const express = require('express');
const usuariosController = require('./controllers/usuarios.js');
// const bodyParser = require('body-parser'); Foi Descontinuado a partir da versão 4.16 do express pode ser utilizado express.json()
const expressMongoDB = require('express-mongo-db');

const app = express();

app.use(expressMongoDB('mongodb://localhost/meu-db'));
app.use(express.json());

app.get('/usuarios', usuariosController.listar);

app.post('/usuarios', usuariosController.criar);

app.put('/usuarios/:id', usuariosController.atualizar);


app.delete('/usuarios/:id', usuariosController.deletar);


app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});