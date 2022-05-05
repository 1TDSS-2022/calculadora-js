// class Calculadora

class Calculadora {
  // guarda onde irá ficar os dados para realizar a operação
  constructor(previousText, currentText) {
    this.previousText = previousText;
    this.currentText = currentText;
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
