const express = require('express');
const router = express.Router();

//Import Pages User Handler
const userHandler = require('./handler/users');

//Router Pages User Handler
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.post('/logout', userHandler.logout); 
router.put('/:id', userHandler.update);
router.get('/:id', userHandler.getUser);
router.get('/', userHandler.getUsers);

module.exports = router;
