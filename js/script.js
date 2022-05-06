
// //document é  o objeto que representa o documento HTML
// //window é o objeto que representa a janela do navegador

// //Utilizando o getElementById para acessar o elemento HTML
// const campo = document.getElementById("txtDisplay")
// campo.value = "Olá Mundo!"

// //Recuperando a lista de inputs do formulário com getElementsByTagName 
// const inputs = document.getElementsByTagName("input")

// //Pegando o primeiro input da lista
// const primeiroInput = inputs[0]

// //Pegando o último input da lista
// const ultimoInput = inputs[inputs.length - 1]

// //Adicionando valor ao elemento da lista
// primeiroInput.value = "Primeiro"
// ultimoInput.value = "Último"

// //Recuperando o elemento com notação CSS querySelector
// const primeiroInput2 = document.querySelector("#txtDisplay")
// //Adicionando valor ao elemento recuperado
// primeiroInput2.value = "Primeiro com querySelector"

// //Recuperando o elemento com notação CSS querySelectorAll
// const inputs2 = document.querySelectorAll("input")

// //Pegando o primeiro input da lista
// const primeiroInput3 = inputs2[0]
// //Adicionando valor ao elemento recuperado
// primeiroInput3.value = "Primeiro com querySelectorAll"

// //Recuperando tag filha com querySelector
// const primeiraTagFilhaInput = document.querySelector("form input")
// //Adicionando valor ao elemento recuperado
// primeiraTagFilhaInput.value = "Primeira tag filha"

// //Recuperando tag filha com querySelectorAll
// const tagFilhasInput = document.querySelectorAll("form input")
// //Pegando o primeiro input da lista
// const primeiroTagFilhaInput = tagFilhasInput[0]
// //Adicionando valor ao elemento recuperado
// primeiroTagFilhaInput.value = "Primeira tag filha da lista"

// //Adicionando estilo ao elemento com className querySelectorAll
// const elementosClass = document.querySelectorAll(".minha-classe")

// elementosClass[elementosClass.length - 1].style.backgroundColor = "blue"


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

document.querySelector("#btnresultado").addEventListener("click", function(){
    let visor = document.querySelector("#txtDisplay").value
    let visorArray = visor.split("+")
    let resultado = 0
    for (let valor of visorArray) {
        resultado += parseInt(valor)
   }
   document.querySelector("#txtDisplay").value = resultado

})

//Recuperando o valor do button com queryselector e adicionando ao visor
document.querySelector("#btn1").addEventListener("click", function () {
    escreverNoVisor(this.value)


});

document.querySelector("#btn2").addEventListener("click", function () {
    escreverNoVisor(this.value)


});
document.querySelector("#btn3").addEventListener("click", function () {
    escreverNoVisor(this.value)


});
document.querySelector("#btn4").addEventListener("click", function () {
    escreverNoVisor(this.value)


});


document.querySelector("#btnSomar").addEventListener("click", function () {
    addOperador(this.value)
})

