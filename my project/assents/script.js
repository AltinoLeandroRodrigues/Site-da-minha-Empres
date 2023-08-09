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



//  topo

function subir(){
  let subir=document.getElementById('topo');
  let baixar=document.getElementById('baixa');

  subir.style.display="none";
  baixar.style.display="flex";
}
function baixar(){
  let subir=document.getElementById('topo');
  let baixar=document.getElementById('baixa');

  subir.style.display="flex";
  baixar.style.display="none";
}

