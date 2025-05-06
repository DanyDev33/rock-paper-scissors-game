const nameInput = document.getElementById("name-input")
const numInput = document.getElementById("num-input")
const playerInput = document.getElementById("player-input")
const saveBtn = document.getElementById("save-btn")
const infoBtn = document.getElementById("info-btn")
const deleteBtn = document.getElementById("delete-btn")
let ulEl = document.getElementById("ul-el")
let list = document.getElementById("list")


let player = []


saveBtn.addEventListener("click", function () {
    player.push({
        names: nameInput.value,
        number: numInput.value,
        message: playerInput.value
    })
    localStorage.setItem("player", JSON.stringify(player))
    nameInput.value = ""
    numInput.value = ""
    playerInput.value = ""
})

deleteBtn.addEventListener('click', function () {
    localStorage.clear()
})

infoBtn.addEventListener('click', function () {
    player = JSON.parse(localStorage.getItem("player"))
    renderPlayers()
})

function renderPlayers() {
    ulEl.innerHTML = ""

    player.forEach(p => {
        const li = document.createElement("li")
        li.textContent = `
    Name: ${p.names} | Number: | ${p.number} | Message: ${p.message}
    `
        ulEl.append(li)

        li.style.color = "white"
        li.style.backgroundColor = "rgb(16, 16, 16)"
        li.style.padding = "4px 4px 10px 10px" 
        li.style.marginTop = "10px"
        li.style.marginBottom = "10px"
        li.style.textAlign = "left"
        li.style.width = "80vw"
        li.style.display = "inline-block"
        li.style.borderRadius = "8px"
    })


}






















