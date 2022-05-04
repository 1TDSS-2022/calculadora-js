
//document é o objeto que representa o documento html
//todos os elementos criados no html ficam dentro do document
//window é o objeto que representa a janela do navegador

//Utilizando o getElementById para acessar o elemento HTML
const txtDisplay = document.getElementById("txtDisplay")
txtDisplay.value = "Hello World!"

//Recuperando a lista de inputs do formulario com getElementsByTagName
const inputs = document.getElementsByTagName("input")

//Pegando o primeiro input da lista
const primeiroInput = inputs[0]

//Pegando o ultimo input da lista
const ultimoInput = inputs[inputs.length - 1]

//Adicionando valor ao elemento da lista
primeiroInput.value = "Primeiro"
ultimoInput.value = "Último"

//Recuperando elemento com notação CSS querySelector
const primeiroInput2 = document.querySelector("#txtDisplay")
//Adicionando valor ao elemento recuperado
primeiroInput2.value = "Primeiro com querySelector"

//Recuperando o elemento com notação CSS querySelectorAll
const inputs2 = document.querySelectorAll("input")

//Pegando o primeiro input da lista
const primeiroInput3 = inputs2[0]

//Adicionando valor ao elemento recuperado
primeiroInput3 = "Primeiro com querySelectorAll"

//Recuperando tag filho com querySelector
const primeiraTagFilhaInput = document.querySelector("form input")

primeiraTagFilhaInput.value = "Primeira tag filha"