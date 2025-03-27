import {updateSnakePosition,controls, interval} from "./input.js";
import {foodSpawn,appleSpawn} from "./food.js";

export const SNAKE = document.createElement("div")
export const gameBoard = document.querySelector(".game-board")
export const Score = document.querySelector("#Score")
const boardClasses = ["board2", "board"];
const popupContainer = document.querySelector(".container")
export const snakeBody = [SNAKE]


//Změnit lehce barvu nebo tvar hlavy
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

foodSpawn()
updateSnakePosition()

function popupMessage(){
    popupContainer.style.opacity = "1"
}
function lostGame(){
    clearInterval(interval)
    popupMessage()
    window.removeEventListener("keydown",controls)
}
export function gameOver(){
    if(position.x >= 16){
        SNAKE.style.gridRowStart = 15
        lostGame()
    }
    else if(position.y >= 16){
        SNAKE.style.gridColumnStart = 15
        lostGame()
    }
    else if(position.x <= 0){
        SNAKE.style.gridRowStart = 1
        lostGame()
    }
    else if(position.y <= 0){
        SNAKE.style.gridColumnStart = 1
        lostGame()
    }
}