let fs = require('fs');
let moment = require('moment');
let moduloNativo = require("http")
let moduloInstalado = require("axios")
let moduloProprio = require("./minhaFuncao")

const superHerois = require('./superHerois')

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8')
let data = moment().format ('MMM do YY')

console.log(http);
