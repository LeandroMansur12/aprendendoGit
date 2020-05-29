
var botao = document.getElementById("btn");

botao.addEventListener("click", function(event){
event.preventDefault();

var frase = document.querySelector(".texto").value;

var p= document.createElement("p");

p.innerHTML = frase;

document.querySelector(".caixaTexto").appendChild(p);

alert("poxa vida deu certo");

alert("sempre busque novas formas de trabalho");


});