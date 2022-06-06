var database = require("../database/config");

function buscarEstilos(idEstilo) {
    instrucaoSql = `SELECT * FROM (SELECT count(estilo) as 'ranking', estilo FROM estilo group by estilo limit 5)as estilo order by ranking desc limit 5;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function deletarEstilos(idFuncionario) {


    console.log(idFuncionario);

    instrucaoSql = `delete from funcionario where idFuncionario = ${idFuncionario}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}