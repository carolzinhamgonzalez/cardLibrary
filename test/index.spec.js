const mocha = require('mocha');
const expect = require('chai').expect;
const index = require('../index');

describe('index', () =>{
  describe('#cardValidator', () =>{

    // testes
    describe('When there is no parameter', () =>{
      it('should return error', () =>{
        expect(() =>{
          index.cardValidator();
        }).to.throw(Error);
      });
    });

    describe('When the number is a string', () =>{
      it('should return error', () =>{
        expect(() =>{
          index.cardValidator().typeof('string');
        }).to.throw(Error);
      });
    });

    describe('When there is only one digit', () =>{
      it('should return error', () =>{
        expect(() =>{
          index.cardValidator('1')
        }).to.throw(Error);
      });
    });

    describe('When there is too much digit', () =>{
      it('should return error', () =>{
        expect(() =>{
          index.cardValidator('012345678910111213141')
        }).to.throw(Error);
      });
    });

    describe("Validate card", () =>{
      it("should return false", () =>{
        expect(index.cardValidator(568)).equal(false);
      });
      it("should return true", () =>{
        expect(index.cardValidator(36490102462661)).equal(true);
      });
    });

    // describe('When there are characters other than numbers', function(){
    //   it('should return error', function(){
    //     expect(index.cardValidator('545719029396-1234')
    //     ).to.throw(Error);
    //   });
    // });

  });
});



//
// Quando o numero for um inteiro e houver um digito deve lançar um erro.

// describe('#cardValidator', function () {
//        // Quando nao houver parametro deve lancar um erro.
//        describe('Quando não houver parametro.', function () {
//            it('Deve lancar um erro.', function () {
//                var badFn = function () { card.cardValidator(); };
//                expect(badFn).to.throw(Error);
//            });
//        });
