import {currentDirection,directions, updateSnakePosition} from "./input.js";
import {foodSpawn,appleSpawn} from "./food.js";

export const SNAKE = document.createElement("div")
export const gameBoard = document.querySelector(".game-board")
export const Score = document.querySelector("#Score")
const boardClasses = ["board2", "board"];
const popupContainer = document.querySelector(".container")

SNAKE.classList.add("snake")

gameBoard.appendChild(SNAKE)
let colorLocation = { x:0, y: 0}

for(let i = 1; i <= 15; i++) {
    for (let j = 1; j <= 15; j++) {
        const board = document.createElement("div")
        board.classList.add(boardClasses[(i+j)%2])
        board.style.gridColumnStart = colorLocation.x + j
        board.style.gridRowStart = colorLocation.y + i
        gameBoard.appendChild(board)
    } 
}

export let position = { x: 8 , y: 8 }
const snakeSpeed = 2
let lastRenderTime = 0

foodSpawn()
updateSnakePosition()

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime

    gameOver()
    updateSnakePosition()

    if(currentDirection != ""){
        directions[currentDirection]()
        updateSnakePosition()
    }

    appleSpawn()
}

window.requestAnimationFrame(main)

function popupMessage(){
    popupContainer.style.opacity = "1"
    currentDirection = ""
}

function gameOver(){
    // Nefunguje
    if(position.x >= 16){
        SNAKE.style.gridRowStart = 15
        console.log("Experiment")
        popupMessage()
    }
    // Nefunguje
    else if(position.y >= 16){
        SNAKE.style.gridColumnStart = 15
        console.log("Socialni")
        popupMessage()
    }
    else if(position.x == 0){
        popupMessage()

    }
    else if(position.y == 0){
        popupMessage()
    }
}