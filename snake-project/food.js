import {Score,position,gameBoard,snakeBody} from "./game.js";
import {} from "./input.js";


let X
let Y
let scoreCount = 1

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
        for(let i = 1; i <= scoreCount; i++){
            const SNAKEPART = document.createElement("div")
            snakeBody.push(SNAKEPART)
            snakeBody[i].classList.add("snake-part")

  
            
            gameBoard.appendChild(SNAKEPART) 
        }
    }
}