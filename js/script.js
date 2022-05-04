
//like it
// document é o objeto que representa o documento HTML.
//window é o objeto que representa a janela do navegador

const campo = document.getElementById("txtDisplay")

campo.value = "Hello World!";

//Recuperando a lista de inputs do formulario com getElementsByTagName

const inputs = document.getElementsByTagName("div input")


//getting o primeiro input da Lista

const primeiroInput = inputs[inputs.length - 2]

// getting the last one input list

const lastInput = inputs[inputs.length - 1]

//Adicionando valor do elemento da lista

primeiroInput.value = "Primeiro"
lastInput.value = "Ultimo"

//Recuperando o elemento com notação CSS que querySelector

const primeiroInput2 = document.querySelector("txtDisplay")

primeiroInput2.value = "Primeiro com querySelector"

//Recuperando o elemento com notação CSS querySelectorAll

const inputs2 = document.querySelectorAll("input")

//getting o primeiro input da lista

const primeiroInput3 = input2[0]

//adicionando valor ao elemento recuperado

primeiroInput3.value = "Primeiro elemento com querySelectorAll"

const primeiraTagFilhaInput = document.querySelector("div form input")

// Adicionjando valor ao elemento recuperado

primeiraTagFilhaInput.value = "Primeira tag filha"

//Recuperando tag filho com querySelectorAll

const tagFilhasInput = document.querySelectorAll("form input")

//Pegando o primeiro input da lista

primeiraTagFilhaInput = tagFilhasInput[0]

//Adicionando valor ao elemento recuperado

primeiraTagFilhaInput.value = "Primeira tag filha da filha"

//Recupera elementos com className querySelector

const elementosClass = document.querySelectorAll(".minha-classe")

elementosClass[0].style.backgroundColor = "red"

console.log(elementosClass[0])
