const mocha = require('mocha');
const expect = require('chai').expect;
const index = require('../index');

describe('index', function(){
  describe('#cardValidator', function(){

    // testes
    describe('When there is no parameter', function(){
      it('should return error', function(){
        expect(function(){
          index.cardValidator();
        }).to.throw(Error);
      });
    });

    describe('When the number is a string', function(){
      it('should return error', function(){
        expect(function(){
          index.cardValidator().typeof('string');
        }).to.throw(Error);
      });
    });

    describe('When there is only one digit', function(){
      it('should return error', function(){
        expect(function(){
          index.cardValidator('1')
        }).to.throw(Error);
      });
    });

    describe('When there is only one digit', function(){
      it('should return error', function(){
        expect(function(){
          index.cardValidator('012345678910111213141')
        }).to.throw(Error);
      });
    });

    describe("Validate card", function(){
      it("should return true", function() {
        expect(index.cardValidator(123456789012345)
      ).to.deep.equal('true');
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
