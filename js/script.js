//document é o objeto que representa o documeto HTML
//window é o objeto que representa a janela do navegador

//Utilizando o getElementById para acessar o elemento HMTL
const campo = document.getElementById("txtDisplay")
campo.value = "Olá Mundo!"

//Recuperando a lista de inputs do formulário com getElementByTagName
const inputs = document.getElementsByTagName("input")

//Pegando o primeiro input da lista 
const primeiroInput = inputs[0]

//Pegando o último input da lista
const ultimoInput = inputs[inputs.length - 1]

primeiroInput.value = "Primeiro"
ultimoInput.value = "Último"

//Recuperando o elemento com notação CSS querrySelector 
const primeiroInput2 = document.querySelector("#txtDisplay")
//Adicionando valor ao elemento recuperado
primeiroInput2.value = "Primeiro com querrySelector"

//Recuperando o elemento com notação CSS querrySelectorAll
const inputs2 = document.querrySelectorAll("input")

//Pegando o primeiro input da lista
const primeiroInput3 = inputs2[0]
//Adicionando valor ao elemento recuperado
primeiroInput3.value = "Primeiro com querrySelectorAll"

//Recuperando tag filha com querrySelector
const primeiraTagFilhaInput = document.querySelector("form input")
//Adicionando valor ao elemento recuperado
primeiraTagFilhaInput.value = "Primeira tag filha"

//Recuperando tag filha com querrySelectorAll
const tagFilhasInput = document.querrySelectorAll("form input")
//Pegando o primeiro input da lista 
const primeiroTagFilhaInput = tagFilhasInput[0]
//Adicionando valor ao elemento recuperado
primeiroTagFilhaInput.value = "Primeira tag filha da lista"

//Adicionando estilo ao elemento com className querrySelector
const elementosClass = document.querrySelectorAll(".minha-classe")
//Adicionando estilo ao elemento recuperado 
elementosClass[0].style.backgroundColor = "red"






