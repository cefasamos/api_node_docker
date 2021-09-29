const { Router } = require('express');

const routes = new Router();

routes.get ('/health', (req, res) => {
    res.send({mensage: 'Conect with success'});
});

routes.get ('/', (req, res) => {
    res.send({mensage: 'Hello World'});
});

module.exports = routes