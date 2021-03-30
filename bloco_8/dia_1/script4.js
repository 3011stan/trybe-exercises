const checaRespostas = (right, resposta) => {
  let points = 0;
  for(let i = 0; i <= right.length; i += 1) {
    if(resposta[i] === 'N.A'){
      points += 0;
    }else if(right[i] === resposta[i]) {
      points += 1;
    }else if(right[i] != resposta[i]){
      points -= 0.5;
    }
  }
  console.log(points)
  return points;
}

const test = (rightAnswers, studentAnswers, check) => {
  console.log(check(rightAnswers, studentAnswers));
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers=['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(test(rightAnswers, studentAnswers, checaRespostas));