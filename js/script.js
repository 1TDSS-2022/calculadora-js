/* COMENTADO

//document é o objeto que representa o documento HTML

//window é o objeto que representa a janela do navegador

//Utilizando o getElementById para acessar o elemento HTML

const campo = document.getElementById("txtDisplay")
campo.value = "Olá Mundo!"

//Recuperando a lista de inputs do formulário com getElementsByTagName
const inputs = document.getElementsByTagName("input")

//Pegando o primeiro input da lista
const primeiroInput = inputs[0]

//Pegando o último input da lista
const ultimoInput = inputs[inputs.length  -1]

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

//Recuperando tag filha com querySelector
const primeiraTagFilha = document.querySelector("div form input")
//Adicionando valor ao elemento recuperado
primeiraTagFilhaInput.value = "Primeira tag Filha"

//Recuperando tag filha com querySelectorAll
const tagFilhasInput = document.querySelectorAll("form input")
//Pegando o primeiro input da lista
const primeiraTagFilhaInput = tagFilhasInput[0]
//Adicionando valor ao elemento recuperado
primeiraTagFilhaInput.value = "Primeira tag filha da lista"

//Adicionando estilo ao elemento com className querySelectorAll
const elementosClass = document.querySelectorAll(".minha-classe")
//Adicionando estilo ao elemento recuperado
elementosClass[0].style.backgroundColor = "red"

console.log(variavel) 

*/

/* COMENTADO

//Recuperando o valor do button com querySelector e adicionando ao visor
document.querySelector("#btn1").addEventListener("click", function(){
    //nomeDaFuncao()
    console.log(soma(1, 2))
})

//Criando uma funcao noraml global
//O escopo desse metodo/funcao é global

function nomeDaFuncao(){
    console.log("Ola mundo!")
}

function soma(a, b) {
    return (parseInt(a) + parseInt(b))
}

nomeDaFuncao()
console.log(soma(1,2))

*/


//Recuperando o valor do button com querySelector e adicionando ao visor
document.querySelector("#btn1").addEventListener("click", function(){
    if (document.querySelector("#txtDisplay").value == "0") {
        document.querySelector("#txtDisplay").value = 1
    } else if (document.querySelector("txtDisplay").value == ""){
        document.querySelector("#txtDisplay").value = 1        
    } else {
        document.querySelector("#txtDisplay").value += 1
    }
})