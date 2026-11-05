const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('_____');
const li = document.querySelector('li');
const botaoExcluir = document.querySelector('button');
li.textContent = input.value;
botaoExcluir.textContent = 'X';
li.append(botaoExcluir);
lista.append(li);
