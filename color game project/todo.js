let squares, squareArr, winningColor, colors, win, header, playAgain, hard, easy, rn, allSquares, type, winningTime;

squares = document.querySelectorAll(".square");
squareArr = Array.from(squares)
hard = document.querySelector(".hard")
easy = document.querySelector(".easy")
header = document.querySelector(".header")
playAgain = document.querySelector(".play-again")
winningColor = document.querySelector('.winning-color')
rightSquare = document.querySelector(".right-square")

init()

hard.addEventListener("click", () => {
    init()
})

easy.addEventListener("click", () => {
    easyGame()
})

playAgain.addEventListener("click", () => {
    if (type === "hard") {
        init()
    } else if (type === "easy") {
        easyGame()
    }
})
squareArr.forEach(el => {
    const winningMatches = []
    el.addEventListener("click", () => {
        if (el.style.background === winningColor.textContent) {
            won()
        } else {
            lose(el)
        }
    })
})

function changeColor() {
    for (let i = 0; i < colors.length; i++) {
        squareArr[i].style.background = winningColor.textContent
    }
}

function gatheringRandomColors() {
    const allRandomColors = []
    for (let i = 0; i < allSquares; i++) {
        allRandomColors.push(randomColorGenerate())
    }
    return allRandomColors
}


function randomColorGenerate() {
    const r = Math.floor(Math.random() * 255 + 1)
    const g = Math.floor(Math.random() * 255 + 1)
    const b = Math.floor(Math.random() * 255 + 1)
    return `rgb(${r}, ${g}, ${b})`
}

function init() {
    type = "hard"
    easy.classList.remove("btn-background")
    header.style.background = "purple";
    allSquares = 6
    colors = gatheringRandomColors()
    rn = Math.floor(Math.random() * colors.length)
    //allRandomColors =[blue]
    win = document.querySelector(".win")
    win.textContent = ""
    hard.classList.add("btn-background")

    winningColor.textContent = colors[rn]
    rightSquare.textContent = rn + 1

    squareArr.forEach((el, index) => {
        el.style.display = "block"
        el.style.background = colors[index]
    })
}

function won() {
    header.style.background = winningColor.textContent
    changeColor()
    win.textContent = "Correct"
}

function lose(el) {
    el.style.background = "none"
    win.textContent = "Wrong"
}

function easyGame() {
    type = "easy"
    allSquares = 3
    colors = gatheringRandomColors()
    rn = Math.floor(Math.random() * colors.length)
    winningColor.textContent = colors[rn]
    rightSquare.textContent = rn + 1
    easy.classList.add("btn-background")
    hard.classList.remove("btn-background")
    squareArr.forEach(el => {
        el.style.display = "none"
    })
    for (let i = 0; i < allSquares; i++) {
        squareArr[i].style.display = "block"
        squareArr[i].style.background = colors[i]

        squareArr[i].addEventListener("click", () => {
            if (squareArr[i].style.background === winningColor.textContent) {
                won()
            } else {
                lose(squareArr[i])
            }
        })
    }
}





