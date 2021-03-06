const express = require('express')
//Este módulo faz as união das rotas de um app
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    //Permite que a API leia as requisiões POST indicando os parsers de dados aceitos
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    app.use(express.static('client'))
    app.use(express.static('public'))

    consign()
        .include('./server/controllers')
        .include('../client/view')
        .into(app);

    return app;
}