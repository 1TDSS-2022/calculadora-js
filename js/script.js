const btnList = document.querySelectorAll(".calculator__buttons input[type=button]");
const arithBtnList = document.querySelectorAll(".calculator__arithmetic__buttons input[type=button]");

const campo = document.getElementById("txtDisplay");

let state = null
let memoValue = 0

btnList.forEach(e => {
    if (e.value == "A.C") {
        e.addEventListener('click', () => {
            campo.value = campo.value.substring(0, campo.value.length - 1)
            if (campo.value == "") {
                campo.value = "0"
            }
        })
    } else {
        e.addEventListener('click', () => {
            if (campo.value == "0") {
                campo.value = e.value
            } else {
                campo.value += e.value
            }
        })
    }
})

arithBtnList.forEach(e => {
    e.addEventListener("click", () => {
        switch (e.value) {
            case "+":
                state = "plus"
                break
            case "-":
                state = "minus"
                break
            case "/":
                state = "divide"
                break
            case "*":
                state = "multiply"
                break
        }
    })
})


