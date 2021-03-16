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

window.onload = () => {
  createStates(estados);
}

let picker = new Pikaday({
  field: document.getElementById('startDate'),
});