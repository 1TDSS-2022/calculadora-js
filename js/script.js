//document é o objeto que representa o documento HTML
//window é o objeto que representa a janela do navehador

//Utilizando o getElementById para acessar o elemento HTML

//const campo = document.getElementById("txtDisplay")
//campo.value = "Ola Mundo!"

//Recupernado a lista de inputs do formulario com getElementByTagName

//const inputs = document.getElementsByTagName("input")

//Pegando o primeiro input da lista
//const primeiroInput = inputs[0]

//Pegando o ultimo input da lista
//const ultimoInput = inputs[inputs.length - 1]

//Adicionando valor do elemento da lista
//primeiroInput.value = "Primeiro"
//ultimoInput.value = "Ultimo"

//Recuperando elemento com notação CSS querySelector
//const primeiroInput2 = document.querySelector("#txtDisplay")

//Adicionando valor ao elemento recuperado
//primeiroInput2.value = "Primeiro com querySelector"

//Recuperando o elemento com notação CSS querySelectorAll
//const inputs2 = document.querySelectorAll("input")

//Pegando o primeiro input da lista
//const primeiroInput3 = inputs2[0]

//Adicionando valor ao elemento recuperado
//primeiroInput3.value = "Primeiro com querySelectorAll"

//Recuperando tag filha com querySelector
//const primeiraTagFilhaInput = document.querySelector("form input")

//Adicionando valor ao elemento recuperado
//primeiraTagFilhaInput.value = "Primeira tag filha"

//Recuperando tag filha com querySelectorAll
//onst tagFilhasInput = document.querySelectorAll("form input")

//Pegando o primeiro input da lista
//const primeiroTagFilhaInput = tagFilhasInput[0]

//Adicionando valor ao elemento recuperado
//primeiroTagFilhaInput.value = "Primeira tag filha da lista"

//Recupera elemenos com className querySelectorAll
//const elementosClass = document.querySelectorAll(".minha-classe")

//Adicionando estilo ao elemento recuperado
//elementosClass[0].style.backgroundColor = "red"

//Criando uma função para dicionar o valor no visor
function escreverNoVisor(valueButton) {
   
    if (document.querySelector("#txtDisplay").value == "0" || document.querySelector("#txtDisplay").value == "") {
        document.querySelector("#txtDisplay").value = valueButton 
    } else {
        document.querySelector("#txtDisplay").value += valueButton
    }
}

function addOperador(valueButton) {
    let visor = document.querySelector("#txtDisplay").value
    if (visor.value != "" && valueButton != visor[visor.length - 1]) {
        document.querySelector("#txtDisplay").value += valueButton
    }
}

//Recuperando o o valor do button com querySelector e adicionando ao visor
document.querySelector("#btn1").addEventListener("click", function() {
   //escreverNoVisor(document.querySelector("#btn1").value)
   escreverNoVisor(this.value)
})

document.querySelector("#btn2").addEventListener("click", function() {
    escreverNoVisor(this.value)
})
 
document.querySelector("#btn3").addEventListener("click", function() {
    escreverNoVisor(this.value)
})

document.querySelector("#btn4").addEventListener("click", function() {
    escreverNoVisor(this.value)
})

document.querySelector("#btnSomar").addEventListener("click", function() {
    addOperador(this.value)
})

 document.querySelector("#btnResultado").addEventListener("click", () => {
   let visor = document.querySelector("#txtDisplay").value
   let resultado = 0
   //Split para separar os operadores
   //Ele divide o valor do visor em um array
   //Onde cada elemento é um operador
   //Exemplo: 1 + 2 + 3
    //Onde 1, 2, 3 são os elementos do array
    //let operadores = visor.split(/\+|\-|\*|\//)
    let visorArray = visor.split("+")

    //Realizando a leitura de cada elemento do array
    for (let valor of visorArray) {
         resultado += parseInt(valor)
    }
    document.querySelector("#txtDisplay").value = resultado

 })


//Criando uma função normal global
//O escopo desse método/função é global

// function nomeDaFuncao() {
//     console.log("Olá mundo 2!")
// }

// function soma(a, b) {
//     return (parseInt(a) + parseInt(b))
// }

// nomeDaFuncao()
// console.log(soma(1, 2))

