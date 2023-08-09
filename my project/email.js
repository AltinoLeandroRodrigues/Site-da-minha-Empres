function modal() {
  let modal = document.getElementById("modal");
  modal.style.display = "flex";

  setTimeout(function() {
    fecharModal(modal);
  }, 1000);


// Função para fechar a modal
function fecharModal(modal) {
  modal.style.display = "none";
}
}





 
 