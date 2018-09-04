module.exports.cardValidator = function cardValidator(stringCard){
  // var regexStringCard = new RegExp (/(\d*)(\W)/g);
  // var stringRegx = text(regexStringCard);
  // if (stringRegx){
  //   throw new Error('Enter numbers only');
  // }

    if (stringCard === ''){
      throw new Error('Parameter not defined');
    } if (typeof stringCard === 'string'){
      throw new Error('Enter numbers only');
    }
  var numCard = stringCard.toString();
  var arrayCard = numCard.split('');
  var numberCard = [];


    for (i = 0; i < arrayCard.length; i++){
      numberCard.push(parseInt(arrayCard[i]));
    }

  if (!numberCard.length > 14 && !numberCard.length < 16){
    throw new Error('Card number must contain 14 to 16 numbers')
  }

  numberCard.reverse();
    for (var i = 1; i < numberCard.length; i = i + 2){
      var product = numberCard[i]*2;
      if (product > 9){
        var product2 = product - 9;
        numberCard[i] = product2;
      } else {
        numberCard[i] = product;
      }
    }
  var sumArray = 0;
    for (i = 0; i < numberCard.length; i++){
      sumArray += numberCard[i];
    }
  var result = sumArray % 10;

  if (result === 0) {
    return true;
  } else {
    return false;
  }
};

function cardValidator(stringCard){
  // var regexStringCard = new RegExp (/(\d*)(\W)/g);
  // var stringRegx = text(regexStringCard);
  // if (stringRegx){
  //   throw new Error('Enter numbers only');
  // }

    if (stringCard === ''){
      throw new Error('Parameter not defined');
    } if (typeof stringCard === 'string'){
      throw new Error('Enter numbers only');
    }
//console.log(stringCard);

  let numCard = stringCard.toString();
  let arrayCard = numCard.split('');
  let numberCard = [];
    for (i of arrayCard){
      numberCard.push(parseInt(i));
    }

  if (!numberCard.length > 14 && !numberCard.length < 16){
    throw new Error('Card number must contain 14 to 16 numbers')
  }

  numberCard.reverse();
 console.log(numberCard);


  let luhn = numberCard.reduce(function(acumulador, valorAtual, indice){
    
    if (indice % 2 !== 0){
      var product = valorAtual*2;
      if (product > 9){
        var product2 = product - 9;
        acumulador = product2;
      } else {
        acumulador = product;
      } 
    }
    
    return acumulador + valorAtual;  
  }, 0 )

  let result = luhn % 10;

  if (result === 0) {
    return true;
  } else {
    return false;
  }
};
