document.addEventListener('DOMContentLoaded', () => {
  const botaoMenu = document.getElementById('btn-menu');
  const menu = document.getElementById('menu');

  botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('aberto'); 
    if (menu.classList.contains('aberto')) {
      botaoMenu.textContent = '✕';
    } else {
      botaoMenu.textContent = '☰';
    }
  });

  
  const elementoAnoAtual = document.getElementById('ano-atual');
  if (elementoAnoAtual) {
    elementoAnoAtual.textContent = new Date().getFullYear();
  }

  const elementoUltimaModificacao = document.getElementById('ultima-modificacao');
  if (elementoUltimaModificacao) {
    elementoUltimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
  }
});