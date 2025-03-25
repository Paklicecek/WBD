import {updateSnakePosition,getInput} from "./input.js";
import {foodSpawn,appleSpawn} from "./food.js";

export const SNAKE = document.createElement("div")
export const gameBoard = document.querySelector(".game-board")
export const Score = document.querySelector("#Score")
const boardClasses = ["board2", "board"];
const popupContainer = document.querySelector(".container")
export const snakeBody = [SNAKE]



SNAKE.classList.add("snake-part")

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
const snakeSpeed = 1
let lastRenderTime = 0

/*
for(let i = 1; i <= 3; i++){
    const snakeParts = document.createElement("div")
    snakeParts.classList.add("snake-part")
    snakeBody.push(snakeParts)
    snakeBody[i].style.gridColumnStart = position.y - i
    snakeBody[i].style.gridRowStart = position.x
    gameBoard.appendChild(snakeBody[i])
}
*/


foodSpawn()
updateSnakePosition()

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime

    getInput()
    gameOver()
    updateSnakePosition()


    appleSpawn()
}

window.requestAnimationFrame(main)

function popupMessage(){
    popupContainer.style.opacity = "1"
    currentDirection = ""
}

function gameOver(){
    if(position.x >= 16){
        SNAKE.style.gridRowStart = 15
        console.log("Experiment")
        popupMessage()
    }
        else if(position.y >= 16){
        SNAKE.style.gridColumnStart = 15
        console.log("Socialni")
        popupMessage()
    }
    else if(position.x == 0){
        SNAKE.style.gridRowStart = 1
        popupMessage()
        
    }
    else if(position.y == 0){
        SNAKE.style.gridColumnStart = 1
        popupMessage()
    }
}