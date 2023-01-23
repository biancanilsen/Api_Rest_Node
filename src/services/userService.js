const { userRouter } = require('../routes/user.routes');
var mysql = require('../../mysql').pool;
const express = require('express');
const registerUser = require('../repositories/userRepository');
const { response } = require('express');

//CREATE
function userRegister(req, res) {
    let response = registerUser(req.body)

    if (response.error !== null) { return res.status(500).send({ error: response.error }) }

    return res.status(200).json({ response: response.PersonId, mensagem: 'Personagem criado com sucesso' })
};

module.exports = userRegister;

