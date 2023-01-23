const express = require('express');
const { Router } = require('express');
const userRegister  = require('../services/userService') 

const userRouter = Router();
userRouter.post('/register', userRegister);

module.exports = userRouter ;