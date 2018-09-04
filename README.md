# Biblioteca - Validação de Cartão de Crédito

## Descrição
A biblioteca valida o número do cartão de crédito (usando algoritmo de Luhn) e retornar true ou false de acordo com o caso.

### Documentação
1.

2. Testes: A biblioteca será testada através da função cardValidator()
- [x] Usar a função cardValidator
- [x] Quando não houver parametro deve lançar um erro.
- [x] Quando o numero for uma string deve lançar um erro.
- [x] Quando o numero for um inteiro e houver um digito deve lançar um erro.
- [x] Quando o numero for um inteiro e for um cartão válido deve retornar true, se o cartão for invalido deve retornar false.

#### Requisitos
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
