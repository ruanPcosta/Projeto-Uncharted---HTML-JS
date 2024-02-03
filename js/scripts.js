const botao =  document.querySelector(".btn-plataformas");


 const platElements = document.querySelector(".btn-plataformas .plataformas");
 


botao.addEventListener("click", () => {
    
 const botaoEstaAberto = platElements.classList.contains("ativo");

    if(botaoEstaAberto){

        platElements.classList.remove("ativo");
    }else{

        platElements.classList.add("ativo");
    }


});