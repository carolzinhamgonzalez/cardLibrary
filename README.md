# Biblioteca - Validação de Cartão de Crédito

## Descrição
A biblioteca valida o número do cartão de crédito (usando algoritmo de Luhn) e retorna true ou false de acordo com o caso.

### Documentação
- [x] Função cardValidator função cardValidator(card) sendo card o que será validado como true caso seja um número de cartão de crédito e false caso não seja;

#### Instalação
- É necessário ter o node + npm instalados. Para guia de instalação, visite o [site oficial](https://nodejs.org/en/download/).
- A seguir, instale $npm install ******

##### Versão 1.0.0
1. Testes: A biblioteca será testada através da função cardValidator()
- [x] Quando não houver parametro lançar um erro.
- [x] Quando o numero for uma string lança um erro.
- [x] Quando o numero for um inteiro e houver um digito deve lançar um erro.
- [x] Quando o numero for um inteiro e for um cartão válido deve retornar true, se o cartão for invalido deve retornar false.

- [] README.md com
      - [x] descrição do módulo
      - [] instruções de instalação
      - [] instruções de uso
      - [] documentação da API.
- [] index.js:
      - [x] Biblioteca deve exportar uma função ou objeto no escopo global (window) e
      - [x] fazer uso de features de ES6 onde for apropriado.
- [] package.json com
      - [] nome,
      - [] versão,
      - [] descrição,
      - [] autores,
      - [] licença,
      - [] dependências,
      - [] scripts (pretest, test, ...)
- [] .eslintrc
      com configuração para linter (ver guia de estilo de JavaScript)
- [] test/index.spec.js: com as rotinas de teste escritas para esta biblioteca. Os testes devem ser implementado
      - [x] com Mocha
      - [] e NYC (ver vídeo tutorial do Daniel :D)
- [x] .gitignore
      para ignorar node_modules ou outras pastas que não devem ser incluídas no controle de versões (git).
teste
