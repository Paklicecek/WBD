import {Score,position,gameBoard} from "./game.js";
import {currentDirection,directions, updateSnakePosition} from "./input.js";


let X
let Y
let scoreCount = 0

export function applePosition() {
    X = Math.floor(Math.random()*15)+1
    Y = Math.floor(Math.random()*15)+1
}

applePosition()
export function getPosition(){
    return[X,Y]
}

export function foodSpawn() {
    const svg = document.querySelector("svg")
    svg.style.gridColumnStart = X
    svg.style.gridRowStart = Y
}

export function appleSpawn() {
    if(position.y == getPosition()[0] && position.x == getPosition()[1]){
        applePosition()
        foodSpawn()
        scoreCount++
        Score.innerHTML = "Score: " + scoreCount
        for(let i = 0; i <= scoreCount; i++){
            const SNAKEPART = document.createElement("div")
            SNAKEPART.classList.add("snake-part")

            SNAKEPART.style.gridColumnStart = position.y // špatně
            SNAKEPART.style.gridRowStart = position.x  // špatně
            
            gameBoard.appendChild(SNAKEPART) 
        }
    }
}