// Importar o pacote express
const express = require('express');

// Istanciar o express na variavel app
const app = express();

// Recuperar o pacote dotenv
const dotenv = require('dotenv').config();

// Importando variavel do arquivo .env
const PORT = process.env.PORT; 

// Testando o servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}!`));