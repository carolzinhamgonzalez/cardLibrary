# Biblioteca - Validação de Cartão de Crédito

## Descrição
A biblioteca valida o número do cartão de crédito (usando algoritmo de Luhn) e retorna true ou false de acordo com o caso.

### Documentação
- [x] Função cardValidator função cardValidator(card) sendo card o que será validado como true caso seja um número de cartão de crédito e false caso não seja;

#### Instalação
- É necessário ter o node + npm instalados. Para guia de instalação, visite o [site oficial](https://nodejs.org/en/download/).
- A seguir, instale $npm install cmg-card-validator

##### Versão 1.0.0
1. Testes: A biblioteca será testada através da função cardValidator()
- [x] Quando não houver parametro lançar um erro.
- [x] Quando o numero for uma string lança um erro.
- [x] Quando o numero for um inteiro e houver um digito deve lançar um erro.
- [x] Quando o numero for um inteiro e for um cartão válido deve retornar true, se o cartão for invalido deve retornar false.

2. README.md com
      - [x] descrição do módulo
      - [x] instruções de instalação
      - [x] instruções de uso
      - [x] documentação da API.
3. index.js:
      - [x] Biblioteca deve exportar uma função ou objeto no escopo global (window) e
      - [x] fazer uso de features de ES6 onde for apropriado.
4. package.json com
      - [x] nome,
      - [x] versão,
      - [x] descrição,
      - [x] autores,
      - [x] licença,
      - [x] dependências,
      - [x] scripts (pretest, test, ...)
5. test/index.spec.js: com as rotinas de teste escritas para esta biblioteca. Os testes devem ser implementado
      - [x] com Mocha
      - [x] e NYC (ver vídeo tutorial do Daniel :D)
6. .gitignore
      - [x] para ignorar node_modules ou outras pastas que não devem ser incluídas no controle de versões (git).
teste
7. .eslintrc
    - [x] com configuração para linter (ver guia de estilo de JavaScript)
