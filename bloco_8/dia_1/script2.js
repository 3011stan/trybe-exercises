const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const verifyNumber = (numberSelect, numberSort) => (numberSelect === numberSort);

const megaSena = (number, verifyNumber) => {
  const generateNumber = getRandomIntInclusive(0, 5);
  if(verifyNumber(number, generateNumber)) {
    return 'Parabéns, você ganhou!!';
  }
  return 'Tente novamente.';
}

console.log(megaSena(0, verifyNumber));
