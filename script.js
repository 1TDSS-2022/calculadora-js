// class Calculadora
// guardar os dados
// função all clear
// função delete
// operações em geral

class Calculadora {
  // guarda onde irá ficar os dados para realizar a operação
  constructor(previousText, currentText) {
    this.previousText = previousText;
    this.currentText = currentText;
    this.limpar();
  }

  limpar() {
    //limpar os dados
    // resetar o tipo de operação
    this.currentOperation = "";
    this.previousOperation = "";
    this.operations = undefined;
  }

  deletar() {}

  acrescentarNum(number) {
    //check se tem um ponto ja no display, antes de adicionar novamente
    if (number === "." && this.currentOperation.includes(".")) return;
    this.currentOperation =
      this.currentOperation.toString() + number.toString();
  }

  escolhaOperacao(operation) {
    if (this.operation === "") return;
    this.operation = operation;
    this.previousOperation = this.currentOperation;
    this.currentOperation = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperation);
    const current = parseFloat(this.currentOperation);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "/":
        computation = prev / current;
        break;
      case "*":
        computation = prev * current;
        break;
      default:
        return;
    }
    this.currentOperation = computation;
    this.operation = undefined;
    this.previousOperation = "";
  }

  atualizarDisplay() {
    this.currentText.innerText = this.currentOperation;
    this.previousText.innerText = this.previousOperation;
  }
}

// para nao misturar classes de css com html, podemos usar outra opção
// com o data-atributes e selecionar eles como se fosse querySelector
// document.querySelectorAll('[data-number]') exemplo de como usar o data-atributes

// variaveis: numbers e operations

const numbersBtn = document.querySelectorAll("[data-number]");

const operationsBtn = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector("[data-equals]");
const delBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousText = document.querySelector("[data-previous]");
const currentText = document.querySelector("[data-current]");

const calculadora = new Calculadora(previousText, currentText);

numbersBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculadora.acrescentarNum(button.innerText);
    calculadora.atualizarDisplay();
  });
});

operationsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculadora.escolhaOperacao(button.innerText);
    calculadora.atualizarDisplay();
  });
});

equalBtn.addEventListener("click", (button) => {
  calculadora.compute();
  calculadora.atualizarDisplay();
});

allClearBtn.addEventListener("click", (button) => {
  calculadora.limpar();
  calculadora.atualizarDisplay();
});
