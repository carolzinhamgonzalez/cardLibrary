const mocha = require('mocha');
const expect = require('chai').expect;
const index = require('../index');

describe('index', () =>{
  describe('#cardValidator', () =>{

    describe('When there is no parameter', () =>{
      it('should return error', () =>{
        var badFn = function () {index.cardValidator('')};
        expect(badFn).to.throw('Parameter not defined');
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
          var badFn = function () {index.cardValidator(true)};
          expect(badFn).to.throw('Card number insufficient');
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
    });
  });
});
