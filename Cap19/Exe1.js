//A
var i;
var elements = document.getElementsByClassName('btnPar');
for (i = 0; i < elements.length; i++) {
  elements[i].style.color = 'red';
}
//B
elements = document.getElementsByName('nomePessoa');
for (i = 0; i < elements.length; i++) {
  elements[i].style.background = 'yellow';
}
//C
elements = document.getElementsByTagName('button');
for (i = 0; i < elements.length; i++) {
  elements[i].style.background = 'black';
}
//D
elements = document.getElementById('lbl');
elements.style.color = 'pink';
//E
elements = document.querySelector('button');
elements.style.color = 'white';
