function cardValidator(stringCard){
  // var regexStringCard = new RegExp (/(\d*)(\W)/g);
  // var stringRegx = text(regexStringCard);
  // if (stringRegx){
  //   throw new Error('Enter numbers only');
  // }

    if (stringCard === ''){
      throw new Error('Parameter not defined');
    } if (stringCard.typeof('string')){
      throw new Error('Enter numbers only');
    }

  var arrayCard = stringCard.split('');
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
    console.log('false');
  }
};
// cardValidator(stringCard);
