import {Score,position,gameBoard,snakeBody} from "./game.js";
import { restartGame } from "./input.js";


let X
let Y
export let scoreCount = 1
export function resetScore() {
    scoreCount = 1
}
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
    for(let i = 0; i < snakeBody.length; i++){
        if(snakeBody[i].style.gridColumnStart !== X && snakeBody[i].style.gridRowStart !== Y){
            svg.style.gridColumnStart = X
            svg.style.gridRowStart = Y
        }
        else{
            applePosition()
            foodSpawn()
        }
    }
}

export function appleSpawn() {
    for(let i = 0; i < snakeBody.length; i++){
        if(snakeBody[i].style.gridColumnStart == getPosition()[0] && snakeBody[i].style.gridRowStart == getPosition()[1]){
            applePosition()
            foodSpawn()
            scoreCount++
            Score.innerHTML = "Score: " + scoreCount
            for(let i = 1; i <= scoreCount; i++){
                const SNAKEPART = document.createElement("div")
                snakeBody.push(SNAKEPART)
                if(i == 1){
                    snakeBody[0].classList.add("snake")
                }
                else snakeBody[i].classList.add("snake-part")
                gameBoard.appendChild(snakeBody[i]) 
            }
        }
    }
}
