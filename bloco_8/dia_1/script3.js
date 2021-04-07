const verify = (correctAns) => (ans) => {
  correctAnsLower = correctAns.toLowerCase();
  ansLower = ans.toLowerCase();
  return (correctAnsLower === ansLower);
}
//const verify1 = verify('Oloquinho')('oloquinho');
const verify1 = verify('Oloquinho');
console.log(verify1('oloquinho'));