const conexao = require('../infraestrutura/conexao');

class Pet {

    adiciona(pet, res) {
        const sql = 'INSERT INTO pets SET ?'

        conexao.query(sql, pet, erro => {
            if(erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                res.status(200).json(pet)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM pets'

        conexao.query(sql, (erro, resultados) => {
            if (erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Pet()
