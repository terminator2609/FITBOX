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