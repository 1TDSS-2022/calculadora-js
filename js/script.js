//document é o objeto que representa o documento HTML
//window é o objeto que representa a janela do navehador

//Utilizando o getElementById para acessar o elemento HTML

const campo = document.getElementById("txtDisplay")
campo.value = "Ola Mundo!"

//Recupernado a lista de inputs do formulario com getElementByTagName

const inputs = document.getElementsByTagName("input")

//Pegando o primeiro input da lista
const primeiroInput = inputs[0]

//Pegando o ultimo input da lista
const ultimoInput = inputs[inputs.length - 1]

//Adicionando valor do elemento da lista
primeiroInput.value = "Primeiro"
ultimoInput.value = "Ultimo"

//Recuperando elemento com notação CSS querySelector
const primeiroInput2 = document.querySelector("#txtDisplay")

//Adicionando valor ao elemento recuperado
primeiroInput2.value = "Primeiro com querySelector"

//Recuperando o elemento com notação CSS querySelectorAll
const inputs2 = document.querySelectorAll("input")

//Pegando o primeiro input da lista
const primeiroInput3 = inputs2[0]

//Adicionando valor ao elemento recuperado
primeiroInput3.value = "Primeiro com querySelectorAll"

//Recuperando tag filha com querySelector
const primeiraTagFilhaInput = document.querySelector("form input")

//Adicionando valor ao elemento recuperado
primeiraTagFilhaInput.value = "Primeira tag filha"

//Recuperando tag filha com querySelectorAll
const tagFilhasInput = document.querySelectorAll("form input")

//Pegando o primeiro input da lista
const primeiroTagFilhaInput = tagFilhasInput[0]

//Adicionando valor ao elemento recuperado
primeiroTagFilhaInput.value = "Primeira tag filha da lista"

//Recupera elemenos com className querySelectorAll
const elementosClass = document.querySelectorAll(".minha-classe")

//Adicionando estilo ao elemento recuperado
elementosClass[0].style.backgroundColor = "red"