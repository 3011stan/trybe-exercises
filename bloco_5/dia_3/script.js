function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercício 1
function createDaysOfTheMonth1() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const cutTagUlDays = document.querySelector('#days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let createDayOfTheMonth = document.createElement('li');
    createDayOfTheMonth.innerText = dezDaysList[i];
    if (dezDaysList[i] == 24 || dezDaysList[i] == 31) {
      createDayOfTheMonth.className = 'day holiday';
    } else if (dezDaysList[i] == 25) {
      createDayOfTheMonth.className = 'day friday holiday';
    } else if (dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18) {
      createDayOfTheMonth.className = 'day friday';
    } else {
      createDayOfTheMonth.className = 'day';
    }
    cutTagUlDays.appendChild(createDayOfTheMonth);
  }
};
createDaysOfTheMonth1();

//Exercício 2
function createButtonFeriado() {
  let stringBtn = 'Feriados';
  let seguraButtonsContainer = document.querySelector('.buttons-container');
  const botao = document.createElement('button');
  botao.innerText = stringBtn;
  botao.id = 'btn-holiday';
  seguraButtonsContainer.appendChild(botao);
};
createButtonFeriado();

//Exercício 3
function altColorFeriado() {
  let seguraFeriados = document.querySelectorAll('.holiday');
  for (let i = 0; i < seguraFeriados.length; i += 1) {
    if (seguraFeriados[i].style.backgroundColor == 'lightgrey') {
      seguraFeriados[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      seguraFeriados[i].style.backgroundColor = 'lightgrey';
    }
  }
};
let seguraButtonFeriado = document.querySelector('#btn-holiday');
seguraButtonFeriado.addEventListener("click", altColorFeriado);

//Exercício 4
function createButtonFriday(stringToButton) {
  let getDivButtonsContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerText = stringToButton;
  button.id = 'btn-friday';
  getDivButtonsContainer.appendChild(button);
};
let stringToButton = 'Sexta-feira';
createButtonFriday(stringToButton);

//Exercício 5
function eventClickBtnFriday(arrayFriday) {
  //segurando array de elementos com classe friday = sextas.
  let getSextas = document.getElementsByClassName('friday');
  let textInsertFriday = 'Sextou o/'; //texto q será substituido nas sextas
  let getButtonFriday = document.querySelector('#btn-friday');
  getButtonFriday.addEventListener('click', function () {
    for (let i = 0; i < getSextas.length; i += 1) {
      if (getSextas[i].innerText != textInsertFriday) {
        getSextas[i].innerText = textInsertFriday;
      } else {
        getSextas[i].innerText = arrayFriday[i];
      }
    }
  })
};
let arraySextas = [4, 11, 18, 25];
eventClickBtnFriday(arraySextas);

//Exercício 6
//pt1
function zoomText() {
  let getLisDay = document.querySelector('#days');
  getLisDay.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

//pt2
function noZoomText() {
  let getListDay = document.querySelector('#days');
  getListDay.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};
zoomText();
noZoomText();

//Exercício 7
function createTask(task) {
  let getMyTasks = document.querySelector('.my-tasks');
  let insertTask = document.createElement('span');
  insertTask.innerText = task;
  getMyTasks.appendChild(insertTask);
};
let task = ['Projeto'];
createTask(task[0]);

//Exercício 8
function addLegendWithColor(color) {
  let newDiv = document.createElement('div');
  let getMytasks = document.querySelector('.my-tasks');
  newDiv.className = 'task';
  newDiv.style.background = color;
  getMytasks.appendChild(newDiv);
}
let color = 'green';
addLegendWithColor(color);

//Exercicio 9
function setTasks() {
  let getTask = document.querySelector('.task');
  getTask.addEventListener('click', function () {
    if (getTask.className != 'task selected') {
      getTask.className = 'task selected';
    } else {
      getTask.className = 'task';
    }
  })
};
setTasks();

//Exercicio 10
function setDayColor() {
  let getDivUl = document.getElementById('days');
  let circleTask = document.querySelector('.task');
  let colorBack = null;
  circleTask.addEventListener('click', function(event){
    if(circleTask.className === 'task selected'){
      colorBack = event.target.style.backgroundColor;
    }else{
      colorBack = 'rgb(119,119,119)';
    }
  })
  getDivUl.addEventListener('click', function(event){
    if(event.target.style.color === colorBack){
      event.target.style.color = 'rgb(119,119,119)';
    }else{
      event.target.style.color = colorBack;
    }
  })
};
setDayColor();

//Exercício bonus
function addCompromisse(){
  // let getTextBox1 = document.querySelector('#task-input');
  let getTextBox1 = document.querySelector('#task-input');
  let getButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');
  let textInsert = '';
  getButton.addEventListener('click', function(){
    if(getTextBox1.value == ''){
      alert('Erro ao clicar em ADICIONAR!');
    }else{
      textInsert = getTextBox1.value;
      getTextBox1.value = '';
      let elementLi = document.createElement('li');
      elementLi.innerText = textInsert;
      getTaskList.appendChild(elementLi);
      console.log(getTaskList);
    }
  })

  getTextBox1.addEventListener('keyup', function(event){
    if(event.keyCode === 13 && getTextBox1.value == ''){
      alert('Erro ao criar um compromisso, digite algo.');
    }else if(event.keyCode === 13){
      textInsert = getTextBox1.value;
      getTextBox1.value = '';
      let elementLi = document.createElement('li');
      elementLi.innerText = textInsert;
      getTaskList.appendChild(elementLi);
    }
  })
};
addCompromisse();