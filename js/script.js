/*
//document é  o objeto que representa o documento HTML
//window é o objeto que representa a janela do navegador

//Utilizando o getElementById para acessar o elemento HTML
const campo = document.getElementById("txtDisplay")
campo.value = "Olá Mundo!"

//Recuperando a lista de inputs do formulário com getElementsByTagName 
const inputs = document.getElementsByTagName("input")

//Pegando o primeiro input da lista
const primeiroInput = inputs[0]

//Pegando o último input da lista
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

//Adicionando estilo ao elemento com className querySelectorAll
const elementosClass = document.querySelectorAll(".minha-classe")
//Adicionando estilo ao elemento recuperado
elementosClass[0].style.backgroundColor = "red"

console.log(variavel) */

//Recuperando o valor do button com querySelector e adicionado ao visor

function generateClickListenerByButtonId(button, valor) {
    document.querySelector(button).addEventListener("click", function() {
        if (document.querySelector("#txtDisplay").value == 0 || document.querySelector("#txtDisplay").value == "") {
            document.querySelector("#txtDisplay").value = valor
        } else {
            document.querySelector("#txtDisplay").value += valor
        }
    })
}

function addOperador(valueButton) {
    let visor = document.querySelector("#txtDisplay").value

    if (visor.value != "" && valueButton != visor[visor.length - 1]) {
        document.querySelector("#txtDisplay").value += valueButton
    }
}

function clearVisor(valueButton) {
    document.querySelector("#txtDisplay").value = 0

}

generateClickListenerByButtonId("#btn1", 1)
generateClickListenerByButtonId("#btn2", 2)
generateClickListenerByButtonId("#btn3", 3)
generateClickListenerByButtonId("#btn4", 4)
generateClickListenerByButtonId("#btn5", 5)
generateClickListenerByButtonId("#btn6", 6)

document.querySelector("#btnSomar").addEventListener("click", function() {
    addOperador(this.value)
})

document.querySelector("#btnLimpa").addEventListener("click", function() {
    clearVisor(this.value)
})

document.querySelector("#btnResultado").addEventListener("click", () =>  {
    let visor = document.querySelector("#txtDisplay").value
    let resultado = 0
    //Split para separar os operadores
    //ele divide o valor do visor em um array
    //onde cada elemento é um operador
    //Exemplo: 1 + 2 + 3
    // let operadores = visor.split(/\+|\-|\*|\//)
    let visorArray = visor.split("+")

    //realizando a leitura de cada elemento do array
    for (let valor of visorArray) {
        resultado += parseInt(valor)
    }
    document.querySelector("#txtDisplay").value = resultado
})

//Criando uma função normal global
//O escopo desse método é global

//function nomeDaFuncao() {
//    console.log("Hello World")
//}

//function soma(a, b) {
//    return parseInt(a + b)
//}
