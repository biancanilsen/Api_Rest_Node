const express = require('express');
const { Router } = require('express');
const UserService = require('../services/userService') 

const userRouter = Router();
userRouter.post('/register', UserService);
userRouter.get('/list', UserService);
// userRouter.get('/register', UserService);
// userRouter.patch('/register', UserService);
// userRouter.delete('/register', UserService);

module.exports = userRouter ;