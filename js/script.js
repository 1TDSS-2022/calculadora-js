
const display = document.getElementById("txtDisplay");

const botoes = document.querySelectorAll("input[type='button']");

botoes.forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target)
    })
})

// console.log(botoes)