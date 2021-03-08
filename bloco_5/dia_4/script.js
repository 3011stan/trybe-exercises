let selectH1 = document.getElementById('title');
let paragraph = document.getElementById('sobre-vida-text');
let corpo = document.body;


window.onload = function () {

  localStorage.setItem('corFundo', 'black');
  localStorage.setItem('corText', 'white');
  localStorage.setItem('tamanhoFonte', '30px');
  localStorage.setItem('spaceLine', '50px');
  localStorage.setItem('typeFont', 'Verdana');

  corpo.style.backgroundColor = localStorage.getItem('corFundo');
  corpo.style.color = localStorage.getItem('corText');
  corpo.style.fontSize = localStorage.getItem('tamanhoFonte');
  corpo.style.lineHeight = localStorage.getItem('spaceLine');
  corpo.style.fontFamily = localStorage.getItem('typeFont');
}
