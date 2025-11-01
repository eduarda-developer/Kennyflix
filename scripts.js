/*
JavaScript(e qualquer línguagem)
-varíavel
Um pedacinho da memória no computador que eu posso guardar oque eu quiser.

-Funções
Pedacinho de código que faz algo para você, que só executa quando é chamada.
Botão-> for clicado -> chamar função -> Ligar o SOM

*/
let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")

botaoSom.addEventListener("click", ligarSom)

function ligarSom(){
   video.muted = false
}
let botao = document.querySelector(".link2")
let modal = document.querySelector(".modal")


botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

botao.addEventListener("click", mostrarModal)

function mostrarModal(){
   modal.style.display ="block"

}
function esconderModal(){
 modal.style.display = "none"

}