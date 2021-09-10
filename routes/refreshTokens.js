const express = require('express');
const router = express.Router();

//Import Pages Refresh Token Handler
const refreshTokenHandler = require('./handler/refresh-tokens');

//Router Pages Refresh Token Handler
router.post('/', refreshTokenHandler.create);
router.get('/', refreshTokenHandler.getToken);

module.exports = router;