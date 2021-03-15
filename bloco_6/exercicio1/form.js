let captureState = document.querySelector('#states');
const estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

function createStates(states) {
  for (let i = 0; i < states.length; i += 1) {
    const newState = document.createElement('option');
    newState.value = states[i];
    newState.innerText = states[i];
    captureState.appendChild(newState);
  }
};

function verificaData() {
  const captureDate = document.querySelector('#startDate');
  captureDate.addEventListener('change', (event) => {
    const date = captureDate.value;
    const day = parseInt(date[0] + date[1]);
    const month = parseInt(date[3] + date[4]);
    const year = parseInt(date[6] + date[7] + date[8] + date[9]);
    //event.preventDefault();
    if (day < 0 || day > 31) {
      alert('Dia inválido.');
    } else if (month < 0 || month > 12) {
      alert('Mês inválido.');
    } else if (year < 0) {
      alert('Ano inválido');
    } else {
      //console.log(day + '/' + month + '/' + year);
      let dateOk = String(day + '/' + month + '/' + year);
      return dateOk;
    }
  })
}

window.onload = () => {
  createStates(estados);
  console.log(verificaData());
}
