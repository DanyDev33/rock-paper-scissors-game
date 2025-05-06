const clearBtn = document.getElementById("clear")
const deleteBtn = document.getElementById("delete")
const percentBtn = document.getElementById("percent")
const divideBtn = document.getElementById("divide")
const multiplyBtn = document.getElementById("multiply")
const subtractBtn = document.getElementById("subtract")
const addBtn = document.getElementById("add")
const equalsBtn = document.getElementById("equals")
const decimalBtn = document.getElementById("decimal")
const numberBtns = document.querySelectorAll(".btn")
const screen = document.getElementById("screen")



numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        screen.value += btn.textContent
    })
})

clearBtn.addEventListener('click', () => {
    screen.value = ''
})

equalsBtn.addEventListener('click', () => {
    try {
        screen.value = eval(screen.value);
    } catch (err) {
        screen.value = 'Error';
    }
    updateDisplay()
})

deleteBtn.addEventListener('click', () => {

})

function updateDisplay() {
    const result = screen.value
    return result
}





















