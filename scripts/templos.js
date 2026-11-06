document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.getElementById('btn-menu');
  const menu = document.getElementById('menu');

  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
    
    if (menu.classList.contains('open')) {
      btnMenu.textContent = '✕';
    } else {
      btnMenu.textContent = '☰';
    }
  });
});

const anoAtualSpan = document.getElementById("anoatual");
if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
}

const ultimaModificacaoP = document.getElementById("ultimaModificacao");
if (ultimaModificacaoP) {
    ultimaModificacaoP.textContent = `Última Modificação: ${document.lastModified}`;
}