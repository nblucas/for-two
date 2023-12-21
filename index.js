
let id = "text-1"

function changeDisplays(id1, id2) {
    prev = document.getElementById(id1)
    next = document.getElementById(id2)

    prev.style.display = "none"
    next.style.display = "flex"
}

function nextText() {
    if(id === "text-1") {
        changeDisplays("text-1", "text-2")
        id = "text-2"       
    }
    else if(id === "text-2") {
        changeDisplays("text-2", "text-3")
        id = "text-3"  
    }
    else if(id === "text-3") {
        changeDisplays("text-3", "text-4")
        id = "text-4"

        buttonGeneric = document.getElementById("button-generic")
        buttonReturn = document.getElementById("button-return")

        buttonGeneric.style.display = "none"
        buttonReturn.style.display = "inline-block"
    }
    else if(id === "text-4") {
        changeDisplays("text-4", "text-1")
        id = "text-1"

        buttonGeneric = document.getElementById("button-generic")
        buttonReturn = document.getElementById("button-return")

        buttonGeneric.style.display = "inline-block"
        buttonReturn.style.display = "none"
    }
}