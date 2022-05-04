
//Sempre que precisar uma função no html deve sempre chamar o DOCUMENT!
// document é o objeto que representa o documento HTML

//window é o objeto 

//utilizando o getElementByUd para acessar o hmtl

var campo = document.getElementById("txtDisplay")
campo.value = "Olá Mundo"

//recuperando a lista de inputs do formulario com getElementByTagNome

const inputs = document.getElementByIdTagName("Input")

//Pegando o primeiro input da lista

const primeiroInput = inputs[0]

//Pegando o último input da lista

const ultimoImput = inputs[inputs.length - 1]

//Adicionando o valor ao elemento da lista

primeiroInput.value ="Primeiro"
ultimoImput.value = "Ultimo"

//recuperando elemento com notação CSS querySelector

const primeiroInput2value = document.querySelector("#textDisplay")

//Adicionando valor ao elemento recuperado

primeiroInput2.value = "Primento com querySelector"

//Recuperando o elemento com notação Css querySelector

const inputs2 = document.querySelectorAll("input")

//Pegando o primeiro input da lista
const primeiroInput3 = inputs2[0]

//adcionando o valor ao elemento recuperado

primeiroInput3.value = "Primeiro com querySelectorAll"

//Recuperando a tag filho com querySelector

const primeiroFilhaInput = document.querySelector("form input")

//Adicionando o valor ao elemento recuperado

primeiroFilhaInput.value = "Primeira tag filha"

// recuperando tag filha com querySelectorAll

const primeiroTagFilhaInput = tagfilhasinput[0]

//Adicionando valor ao elemento recuperado

primeiroTagFilhaInput.value = "Primeira tag filha da lista"

//Adicionando estilo ao elemento com className querySelector

const elementosClass = document.querySelectorAll("minha-classe")

//adicionando estilo elemento recuperado

elementosClass[0].style.backgroundColor = "red"

