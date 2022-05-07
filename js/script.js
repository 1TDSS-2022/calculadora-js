const display = document.getElementById("txtDisplay");
const botoes = document.querySelectorAll("input[type='button']");

botoes.forEach((element) => {
    element.addEventListener('click', (e) => {

        //Se for C para limpar
        if (e.target.value == 'C') {
            display.value = '0'
        }

        //Se for = para calcular
        else if (e.target.value == '=') {
            calcular()
        }

        //Se for operador
        else if (e.target.value == '+' || e.target.value == '-' || e.target.value == '*' || e.target.value == '/') {
            if (ultimoCaracterEhNumero())
                display.value += e.target.value
        }

        //Se for numero
        else if (e.target.value != '.') {
            var numeros = display.value.split(new RegExp('[*+/-]'))
            var ultimoNum = numeros[numeros.length - 1]
            var ultimoChar = display.value.charAt(display.value.length - 1)

            //Se o ultimo caracter for 0 E não tiver nenhum ponto ainda, vai substituir pelo numero digitado, se não ficariam 0s a esquerda
            if (ultimoChar == '0' && !ultimoNum.includes('.'))
                display.value = e.target.value

            //Se não, só vai concatenar com o restante do numero
            else
                display.value += e.target.value
        }

        //Se for ponto
        else {
            var numeros = display.value.split(new RegExp('[*+/-]'))
            var ultimoNum = numeros[numeros.length - 1]

            //Só colocar ponto se o ultimo caracter for numero E não tiver ponto nesse numero ainda
            if (ultimoCaracterEhNumero() && !ultimoNum.includes('.'))
                display.value += e.target.value
        }
    })
})

function ultimoCaracterEhNumero() {
    var ultimoChar = display.value.charAt(display.value.length - 1)

    if (!(ultimoChar == '+' || ultimoChar == '-' || ultimoChar == '*' || ultimoChar == '/' || ultimoChar == '.'))
        return true;

    return false;
}

function calcular() {
    numeros = display.value.split(new RegExp('[*+/-]'))
    operadores = display.value.split(new RegExp('[0-9]')).filter(e => e != '' && e != '.')

    if (ultimoCaracterEhNumero()) {
        var result = parseFloat(numeros[0])

        for (let i = 1; i < numeros.length; i++) {

            switch (operadores[i - 1]) {
                case '+':
                    result += parseFloat(numeros[i])
                    break;
                case '-':
                    result -= parseFloat(numeros[i])
                    break;
                case '*':
                    result *= parseFloat(numeros[i])
                    break;
                case '/':
                    result /= parseFloat(numeros[i])
                    break;
            }
        }
        display.value = result
    }
}