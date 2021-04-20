// Tentando testar algo assíncrono sem utilizar done...
// test('Não deveria passar!', () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });

// ------ correção

// test('Não deveria passar!', done => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

const sumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

test('Testando sumNumbers, soma 5 mais 10.', (done) => {
  sumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})