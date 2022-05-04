
//document é o objeto que representa o documento HTML
//window é o objeto que representa a janela do navegador

//Utilizando o getElementById para acessar o elemento HTML
const campo = document.getElementById("txtDisplay")
campo.value = "Olá Mundo!"

//Recuperando a lista de inputs do formulário com getElementByTagName
const inputs = document.getElementsByTagName("input")

//Pegando o primeiro input da lista
const primeiroInput = inputs[0]

//Pegando o ultimo input da lista
const ultimoInput = inputs[inputs.length - 1]

//Adicionando valor ao elemento da lista
primeiroInput.value = "Primeiro"
ultimoInput.value = "Último"

//Recuperando o elemento com notação CSS querySelector
const primeiroInput2 = document.querySelector("#txtDisplay")

//Adicionando valor ao elemento recuperado
primeiroInput2.value = "Primeiro com querySelector"

//Recuperando o elemento com notação CSS querySelectorAll
const inputs2 = document.querySelectorAll("input")

//Pegando o primeiro input da lista
const primeiroInput3 = inputs2[0]

//Adicionando valor ao elemento recuperado
primeiroInput3.value = "Primeiro com querySelectorAll"

//Recuperando tag filho com querySelector
const primeiraTagFilhaInput = document.querySelector("form input")

//Adicionando valor ao elemento recuperado
primeiraTagFilhaInput.value = "Primeira tag filha"

//Recuperando tag filho com querySelector
const tagFilhasInput = document.querySelectorAll("form input")

//Adicionando valor ao elemento recuperado
const primeiroTagFilha = tagFilhasInput[0]

primeiraTagFilhaInput.value = "Primeiro Tag filha da Lista"

//Adicionando estilos ao elemento com classname queryselector
const elementosClass = document.querySelectorAll(".minha-classe")
//
elementosClass[0].style.backgroundColor = "red"
