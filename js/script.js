

//document éo objeto que representa o documento HTML
//windows é o objeto que representa a janela do navegador

//Ultilizando o getElementById para acessar o elemento HTML

const campo = document.getElementById("txtDisplay")
campo.value = "Olá Mundo!"

//Recuperando a ista de inputs do formulario com getElementsByTagName
const inputs = document.getElementsByTagName("input")

//Pegando o primeiro input da lista
const primeiroInput = inputs[0]

//Pegando o ultimo input da lista
const ultimoInput = inputs[inputs.length - 1]

//Adicionando valor do elemento da lista
primeiroInput.value = "Primeiro"
ultimoInput.value = "Último"

//Recuperando elemento com notação CSS querySelector
const primeiroInputs = document.querySelector("#txtDisplay")
//Adicionando valor ao elemento recuperado
primeiroInput.value = "PRimeiro com querySelector"

//Recuperando p elemento com notação CSS querySelectorAll

const inputs2 = document.querySelectorAll("input")

//Pegamdno o primeiro input da lista
const primeiroInput3 = inputs2[0]
//Adicionando valor ao elemento recuperado
primeiroInput3.value = "Primeiro com querySelectorAll"

//Recuperando tag filha como querySelector
const primeiroTagFilhaInput = document.querySelector("from input")
//Adicionando vlaor ao elemento recuperado

//Recuperando tag filha com quaerySelectorAll
const tagFilhhaInput = document.querySelectorAll("form input")
//Preparando o primeiro input dal ista
const primeiroTagFilhaInput = primeiroTagFilhaInput[0]
//Adicionando valor ao elemento recuperado
primeiroTagFilhaInput.value = "Primeira tag filha da lista"


//Adicioando estilo ao elemento com className querySelector
const elementosClass = document.querySelectorAll(".minha-classe")
//Adicionando estilo ao elemento recuperado
elementoClass[0].style.backgroundColor = "red"
