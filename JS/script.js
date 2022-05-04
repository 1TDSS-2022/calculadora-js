const campo = document.getElementById("txtDisplay")
campo.value = "Olá Mundo"

const inputs = document.getElementsByTagName("input")

const primeiroInput = inputs[0]
const ultimoInput = inputs[inputs.length- 1]

primeiroInput.value = "primeiro"
ultimoInput.value = "ultimo"

const primeiroInput2 = document.querySelectorAll("#txtDisplay")
primeiroInput.value = "primeiro com querySelectorall"

const primeiraTagFilha = document.querySelector("div form input")
primeiraTagFilha.value = "Primeira tag filha"

const tagFilhasInput = tagFilhasInput[0]





