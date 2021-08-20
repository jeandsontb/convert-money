const express = require('express');
const path = require('path');

const convert = require('./lib/convert');
const apiBCB = require('./lib/api.bcb');

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    const cotacao = await apiBCB.getCotacao();
    res.render('home', {
        cotacao
    });
})

app.get('/cotacao', (req, res) => {
    const {cotacao, quantidade} = req.query;
    if(cotacao && quantidade) {
        const convertion = convert.convert(cotacao, quantidade);    

        res.render('cotacao',  {
            error: false,
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            convertion: convert.toMoney(convertion)
        });
    } else {
        res.render('cotacao', {
            error: 'Valores inválidos ou não informados'
        })
    }
})


app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Server started in port 3000');
    }
})