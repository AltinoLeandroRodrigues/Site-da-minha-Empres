function clicar(){
    let btn = document.getElementById("botao")
    let fechar = document.getElementById("fechar");
    let links = document.getElementById("Responsivo");
    
  links.style.display="block";
  btn.style.display="none"
  fechar.style.display="flex";
  
  
      
}
function fechar(){
    let btn = document.getElementById("botao")
    let fechar = document.getElementById("fechar");
    let links = document.getElementById("Responsivo");
    
   links.style.display="none";
  btn.style.display="flex"
  fechar.style.display="none"

      
}