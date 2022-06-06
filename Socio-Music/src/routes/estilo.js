var express = require("express");
var router = express.Router();

var estiloController = require("../controllers/estiloController");

router.post("/pegarFunc", function (req, res) {
    console.log('Cheguei na rota!')
    estiloController.buscarestilos(req, res);
});

router.post("/deleteFunc", function (req, res) {
    console.log('Cheguei na rota do delete!')
    estiloController.deletarestilos(req, res);
    
});

module.exports = router;