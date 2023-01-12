//Rodar aplicação: npm run dev
const express = require('express');


//Criar o app
const app = express();

const rotaUser = require('./routes/user');

app.use('/user', rotaUser)

//Aplicar midlewares
// app.use(express.json());

//Mandar o servidor rodar
app.listen(3501,() => console.log('Server ir running' ))