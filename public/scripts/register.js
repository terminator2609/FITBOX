let closedButton = document.getElementsByClassName("close-menu-button")[0]


closedButton.addEventListener("click", (e) => {
    window.history.back()
})

let checkedRound =  document.getElementsByClassName("checked-round")
let selectInput = document.getElementsByClassName("select-input")

for(let i = 0; i < checkedRound.length; i++) {

    checkedRound[i].addEventListener("click", (e) => {

        for(let index of checkedRound) {
            index.style.backgroundColor = ""
        }

        for(let index of selectInput) {
            index.checked = false
        }

        checkedRound[i].style.backgroundColor = "#00ff00"
        selectInput[i].checked = true
    })
}

let checkedRound2 =  document.getElementsByClassName("checked-round-2")
let selectInput2 = document.getElementsByClassName("select-input-2")

for(let i = 0; i < checkedRound.length; i++) {

    checkedRound2[i].addEventListener("click", (e) => {


        checkedRound2[i].style.backgroundColor = "#00ff00"
        selectInput2[i].checked = true
    })
}