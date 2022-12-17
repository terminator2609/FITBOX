let navMenuIcon = document.getElementsByClassName("nav-menu-icon")
let navMenu = document.getElementsByClassName("nav-menu")
let otherElements = document.getElementsByClassName("other-element")
let closeMmenuButton = document.getElementsByClassName("close-menu-button")


navMenuIcon[0].addEventListener("click", (e) => {
    e.preventDefault()


    navMenu[0].style.display = "flex"

    for(let index of otherElements) {
        index.style.display = "none"
    }

})


closeMmenuButton[0].addEventListener("click", (e) => {
    e.preventDefault()


    navMenu[0].style.display = ""

    for(let index of otherElements) {
        index.style.display = ""
    }
    
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