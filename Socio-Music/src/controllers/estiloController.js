var estiloModel = require("../models/estiloModel");

function buscarEstilos(req, res) {


    var idEstilo = req.body.idEstilo;


    estiloModel.buscarEstilos(idEstilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function deletarEstilos(req, res) {
    console.log('Cheguei no controller')    

    var idEstilo = req.body.idEstilo;
    

    EstiloModel.deletarEstilos(idEstilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            console.log(`${idEstilo}`)
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
            console.log(`${idEstilo}`)
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        console.log(idEstilo)
        res.status(500).json(erro.sqlMessage);
        
    });
}