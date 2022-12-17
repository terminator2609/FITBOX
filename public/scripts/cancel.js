let closedButton = document.getElementsByClassName("close-menu-button")[0]


closedButton.addEventListener("click", (e) => {
    window.history.back()
})


let checkedRound =  document.getElementsByClassName("checked-round")
let selectInput = document.getElementsByClassName("select-input")

for(let i = 0; i < checkedRound.length; i++) {

    checkedRound[i].addEventListener("click", (e) => {

        checkedRound[i].style.backgroundColor = "#00ff00"
        selectInput[i].checked = true
    })
}