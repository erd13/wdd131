const anoAtualSpan = document.getElementById("anoatual");
if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
}

const ultimaModificacaoP = document.getElementById("ultimaModificacao");
if (ultimaModificacaoP) {
    ultimaModificacaoP.textContent = `Última Modificação: ${document.lastModified}`;
}