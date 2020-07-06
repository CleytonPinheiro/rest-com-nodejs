const Pet = require('../models/pets')

module.exports = app => {
    app.post('/pet', function(req, res) {
        const pet = req.body
        console.log(pet)

        Pet.adiciona(pet, res)
    })

    app.get('/pet', (req, res) => {
        Pet.lista(res)
    })
}
