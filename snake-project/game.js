import {updateSnakePosition,controls, interval} from "./input.js";
import {foodSpawn,appleSpawn} from "./food.js";

export const SNAKE = document.createElement("div")
export const gameBoard = document.querySelector(".game-board")
export let Score = document.querySelector("#Score")
const boardClasses = ["board2", "board"];
export const popupContainer = document.querySelector(".lostContainer")
export const snakeBody = [SNAKE]


//Změnit lehce barvu nebo tvar hlavy
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

foodSpawn()
updateSnakePosition()
export function hidePopup(){
    popupContainer.style.opacity = "0"
}
function popupMessage(){
    popupContainer.style.opacity = "1"
    popupContainer.style.zIndex = "3000"
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