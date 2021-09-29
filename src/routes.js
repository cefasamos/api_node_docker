const { Router } = require('express');

const routes = new Router();

routes.get ('/health', (req, res) => {
    res.send({mensage: 'Conect with success'});
});

module.exports = routes