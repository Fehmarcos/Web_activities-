//A
document.querySelectorAll('tr').forEach((linha) => {
  var colunas = linha.querySelectorAll('td');
  linha.removeChild(colunas[colunas.length - 1]);
});
//B
document.querySelectorAll('table').forEach((tabela) => {
  var linha = document.createElement('tr');
  linha.innerHTML = '<td></td><td></td>';
  tabela.appendChild(linha);
});
