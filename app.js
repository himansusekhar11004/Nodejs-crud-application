global.__root   = __dirname + '/'; 
const express = require('express');
const app = express();
const db = require('./db');
const logger = require('./logger/Logger');
const AuthController = require('./controller/auth/AuthController');
app.get('/api',  (req, res) => {
    res.status(200).send('API works.');
});
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(logger);
app.use('/api/auth', AuthController);

module.exports = app;