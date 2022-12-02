let router = require('express').Router();
let contactocontroller = require('../lib/controllers/contactoController')

router.get('/', (req, res) => {
    contactocontroller.listar(req, res);
});

router.get('/:id', (req, res) => {
    contactocontroller.buscar(req, res);
});

router.post('/', (req, res) => {
    contactocontroller.crear(req, res);
});

router.delete('/:id', (req, res) => {
    contactocontroller.eliminar(req, res);
});

module.exports = router