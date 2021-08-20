const api = require('./api.bcb');
const axios = require('axios');

jest.mock('axios');

test('getCotacaoAPI', () => {
    const res = {
        data: {
            value: [
                { cotacaoVenda: 5.43 }
            ]
        }
    }
    axios.get.mockResolvedValue(res);
    api.getCotacaoAPI('07-09-2019').then( res => {
        expect(res).toEqual(res)
        // expect(axios.get.mock.calls[0][0]).toBe('url');
    })
})

// test('extractCotacao', () => {
//     const cotacao = api.extractCotacao({
//         data: {
//             value: [
//                 { cotacaoVenda: 5.43 }
//             ]
//         }
//     })
//     expect(cotacao).toBe(5.43)
// })

// test('getToday', () => {

// })

test('getUrl', () => {
    const url = api.getUrl('MINHA-DATA');
    expect(url).toBe('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27MINHA-DATA%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao')
})