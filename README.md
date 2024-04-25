# topazio

Este projeto é uma solução desenvolvida como parte de um desafio proposto pela empresa Fineasy. O objetivo é criar uma aplicação que limpe um conjunto de dados em formato JSON, removendo campos vazios ou que contenham apenas o caractere "#".

## Estrutura do Projeto

Na pasta `src`, encontram-se os arquivos JavaScript que compõem a aplicação:
- `utils/emptyValueChecker.js`: Contém a implementação da classe `EmptyValueChecker`, responsável por verificar se um valor é vazio.
- `utils/payloadCleaner.js`: Contém a implementação da classe `PayloadCleaner`, responsável por limpar os campos vazios de um objeto JSON.
- `index.js`: Ponto de entrada da aplicação onde as classes são utilizadas e o código principal é executado.
- `test/utils/emptyValueChecker.test.js`: Arquivo de teste para as classes EmptyValueChecker.
- `test/utils/payloadCleaner.test.js`: Arquivo de teste para as classes PayloadCleaner.

```bash
├── src/
│   ├── utils/
│   │   ├── emptyValueChecker.js
│   │   └── payloadCleaner.js
│   │
│   ├── index.js
│   ├── teste/
│		└── index.test.js
│
├── package.json
└── README.md
```


## Como Executar

Para executar a aplicação, siga as instruções abaixo:

# Instale as dependências
```bash # 
	npm install
```

# Execute a aplicação
```bash # 
	npm start
```

# Execute a test
```bash # 
	npm run test
```


