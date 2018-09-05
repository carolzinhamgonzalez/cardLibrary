module.exports.cardValidator = function cardValidator(card){
 if (card === ''){
   throw new Error('Parameter not defined');
 };
 if (typeof card === 'string'){
   throw new Error('Enter numbers only');
 }

 let numCard = card.toString();
 let arrayCard = numCard.split('');
 let numberCard = [];
 for (i of arrayCard){
   numberCard.push(parseInt(i));
 };

 numberCard.reverse();

 let luhn = numberCard.reduce(function(acumulador, valorAtual, indice) {
 if (indice % 2 !== 0){
   var product = valorAtual*2;
   if (product > 9){
     var product2 = product - 9;
     valorAtual = product2;
   } else {
     valorAtual = product;
   }
 }
 return acumulador + valorAtual;
}, 0 );

 let result = luhn % 10;
 return result;
};
