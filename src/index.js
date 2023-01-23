const express = require('express');
const routerIndex = require('./routes/index.routes');

//Criar o app
const app = express();

const rotaUser = require('./routes/user');

app.use(express.json());
app.use(routerIndex);

//Mandar o servidor rodar
app.listen(3501,() => console.log('Server ir running' ))