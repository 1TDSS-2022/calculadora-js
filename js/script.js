
// document é o objeto que representa o documento HTML

//uilizando o getElementById paa acessar o elemento HTML

const campo = document.getElementById("txtDisplay")
campo.value = "Olá Mundo"

//Recperando a lista de input do formulário com getElementsByTagName
const inputs = document.getElementsByTagName("input")

//Pegando  primeiro input da lista
const primeiroInput = inputs[0]

//Peando o ultimo input da lista
const ultimoInput = inputs[inputs.length - 1]

//Adicionando valor ao elemento da lista
primeiroInput.value = "Primeiro"
ultimoInput.value = "Último"

//Recuperando elemento com notação CSS querSelector
const primeiroInput2 = document.querySelector("#txtDisplay")

//Adicioando valor ao elemeno recuperado
primeiroInput2.value = "Primeiro com querySelector"

//Recuperando o elemento com notação CSS com qerSelectorAll
const inputs2 = document.querySelectorAll("input")

//Pegando o primeiro iput da lista
const primeiroInput3 = inputs2[0]

//Adicionando o valor ao elemento recperado
primeiroInput2.value = "Primeiro com querySelectorAll"

//Recperandp ta filha com querySelector
const primeiroTagFilhaInput = document.querySelector("form input")

//Adiconando valor ao elemento recuperado
primeiroTagFilhaInput.value = "Primeira tag filha"

//Pegando tag filha com querySelectorALL
const tagFlhasInput = document.querySelectorAll("form input")

//Pegando o primeiro input da lista
const primeiraTagFilhaInput = tagFlhasInput[0]

//Adicionando valor ao elemento recperado
primeiraTagFilhaInput.value = "Primeira tag filha da lista"

//Adicionando estilo ao elemento com className querySelector
const elementosClass = document.querySelectorAll(".minha-classe")
//Adicionado estlo ao elmento recperado
elementosClass[0].style.backgroundColor = "red"

//Criando uma função para adicionar valo no visor
function escreverNoVisor(valueButton) {
    
    if (document.querySelector("#textDisplay").value == "0" || (document.querySelector("#txtDisplay").value ==""{
        document.querySelector("#texteDisplay").value = valueButton
    }else{
        document.querySelector("txtDiplay").value += valueButton
    }
}

function addOperador(valueButton){
    let visor = document.querySelector("txtDisplay").value
    if( visor != "" && valueButton != visor[visor.length -1]){
        document.querySelector("#txtDisplay").value += valueButton
    }
}

document.querySelector("#btn1").addEventListener("click", function() {
    escreverNoVisor(this.value)
})

document.querySelector("#btnResultado").addEventListener("click", () => {
    let visor = document.querySelector("txtDisplay").value
    let resultado = 0
    //Split para separar os operadores
    // ele divide o valor do visor em um Array
    //Onde cada elemento é um operador
    //Exemplo: 1 + 2 + 3
    //Onde 1, 2, 3 são os elementos do array
    let visorArray = visor.split("+")

    for (let valor of visorArray){
        resultado += parseInt(valor)
    }
    document.querySelector("#txtDisplay").value = resultado

})

//Recuperando o valor do buttom com querySelector e adicionando ao visor
document.querySelector("#btn1").addEventListener("click", function(){
    if (document.querySelector("#textDisplay").value == "0" || (document.querySelector("#txtDisplay").value ==""){
        document.querySelector("#texteDisplay").value = 1
    }else{
        document.querySelector("txtDiplay").value += 1
    }
})

//Criando uma função para adicionar o valor do button2
function nomeDaFuncao(){ //Escopo da funçao/ método globalé 
    console.log("Olá mundo")
}

function soma(a, b){
    return a  + b
}

nomeDaFuncao()
console.log(soma(1, 2))