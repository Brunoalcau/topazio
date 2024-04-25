const PayloadCleaner = require("./utils/payloadCleaner");


// Dados de entrada em formato JSON
const payloadEntradaJSON = '{"nome": "João","idade": "","email": "#","telefones": ["","#","123456789", "1121212122"]}';

// Convertendo JSON para objeto JavaScript
const payloadEntrada = JSON.parse(payloadEntradaJSON);

// Removendo campos vazios
const payloadSaida = PayloadCleaner.clean(payloadEntrada);

// Convertendo objeto JavaScript de volta para JSON
const payloadSaidaJSON = JSON.stringify(payloadSaida, null, 4);

// Imprimindo o resultado
console.log("Dados de entrada:");
console.log(payloadEntradaJSON);
console.log("\nDados de saída:");
console.log(payloadSaidaJSON);