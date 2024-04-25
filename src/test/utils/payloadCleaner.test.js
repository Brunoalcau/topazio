const PayloadCleaner = require('../../utils/payloadCleaner');

describe('', () => {
    test('Deve remover os campos vazios de um objeto', () => {
        const payloadEntrada = {
            nome: "João",
            idade: "",
            email: "#",
            telefones: ["", "#", "123456789"],
            endereco: {
                rua: "",
                cidade: "São Paulo",
                pais: ""
            }
        };

        const payloadSaidaEsperado = {
            nome: "João",
            telefones: ["123456789"],
            endereco: {
                cidade: "São Paulo"
            }
        };

        expect(PayloadCleaner.clean(payloadEntrada)).toEqual(payloadSaidaEsperado);
    });
});
