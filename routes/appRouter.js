const express = require('express');
const app     = express();
const userController = require('../controller/userController')

app.get('/log',userController.getData)
module.exports = app;