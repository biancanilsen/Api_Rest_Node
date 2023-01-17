//Rodar aplicação: npm run dev
const express = require('express');

//Criar o app
const app = express();

const rotaUser = require('./routes/user');

app.use(express.json());
app.use('/user', rotaUser)

//Mandar o servidor rodar
app.listen(3501,() => console.log('Server ir running' ))