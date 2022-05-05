
//Document é o objeto que representa o documento HTML.

//Window é o objeto que representa a janela do navegador.

//Ultilizando a getElementById para acessar o elemneto HTML.
const campo = document.getElementById("txtDisplay")
campo.value = "Olá Mundo !"

//Recuperando a lista de inputs do formulario com getElementsByTagName.
const inputs = document.getElementsByTagName("input")

//Pegando o primeiro input da lista
const primeiroInput = inputs[0]

//Pegando o ultimo input da Lista
const ultimoInput = inputs[inputs.length - 1]

//Ultilizando valor ao elemento da lista 
primeiroInput.value = "Primeiro"
ultimoInput.value = "Ultimo"

//Recuperando elemento com notação CS querySelector
const primeiroInput1 = document.querySelector("#txtDisplay")

//Adicionando valor ao elemento recuperado
primeiroInput.value = "Primeiro com querySelector"

//Recuperando o elemento com notação CSS querySelectorAll
const inputs2 = document.querySelectorAll("input")

//Pegando o primeiro Input da lista
const primeiroInput3 = inputs3 = inputs2[0]

//Adicionando valor ao elemento recuperado
primeiroInput3.value = "Primeito com querySelectorAll"

//Recuperando a tag filha com querySelector
const primeiraTagFilhaInput = document.querySelector("form input")

//Adicionando valor ao elemento recuperado 
primeiraTagFilhaInput.value = "Primeira tag filha"

//Recuperando tag filha com querySelectorAll 
const primeiraTagFilhaInput = tagFilhasInput[0]

//Adicionando valor ao elemento recuperado
primeiraTagFilhaInput.value = "Primeira tag filha da lista"

//Adicionando estilo ao elementos com className querySelector
const elementosClass = document.querySelectorAll(".minha-classe")

//Adicionando estilo ao elemento recuperado 
elementosClass[0].style.backgroundColor = "red"



