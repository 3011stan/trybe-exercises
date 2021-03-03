let containerHeader = document.getElementById('header-container');
containerHeader.style.backgroundColor = '#00b069';
let emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = '#ff9f84';
let noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = '#f9db5e';


//background-color nos textos urgentes
let divIntoEmergencyTasks = document.querySelectorAll(".emergency-taks, h3")[0];
let divIntoEmergencyTasks2 = document.querySelectorAll(".emergency-taks, h3")[1];
divIntoEmergencyTasks.style.backgroundColor = '#a500f3';
divIntoEmergencyTasks2.style.backgroundColor = '#a500f3';


//background-color nos textos nao urgentes
let divIntoNoEmergencyTasks = document.getElementsByTagName('h3')[2];
divIntoNoEmergencyTasks.style.backgroundColor = 'black';
let divIntoNoEmergencyTasks2 = document.getElementsByTagName('h3')[3];
divIntoNoEmergencyTasks2.style.backgroundColor = 'black';

//background color do rodape
let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533';