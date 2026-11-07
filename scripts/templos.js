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

  
  const yearSpan = document.getElementById('currentyear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedP = document.getElementById('lastModified');
  if (lastModifiedP) {
    lastModifiedP.textContent = `Última modificação: ${document.lastModified}`;
  }
});