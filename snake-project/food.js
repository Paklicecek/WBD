import {Score,position,gameBoard,snakeBody} from "./game.js";
import { getInput } from "./input.js";

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
    let maximum = 0
    let isOnSnake = true

    while(isOnSnake && maximum < 225){
        isOnSnake = false
        for(let i = 0; i < snakeBody.length; i++){
            if(snakeBody[i].style.gridColumnStart == X && snakeBody[i].style.gridRowStart == Y){
                isOnSnake = true
                applePosition()
                maximum++
                break
            }
        }
    }
        svg.style.gridColumnStart = X
        svg.style.gridRowStart = Y
}
let firstApple = true
export function appleSpawn() {
    if(snakeBody[0].style.gridColumnStart == getPosition()[0] && snakeBody[0].style.gridRowStart == getPosition()[1]){
        if(firstApple){
            firstApple = false
            const SNAKEPART = document.createElement("div")
            SNAKEPART.classList.add("snake-part")
            snakeBody.push(SNAKEPART)
            gameBoard.appendChild(SNAKEPART) 
        }
        const SNAKEPART = document.createElement("div")
        scoreCount++
        Score.innerHTML = "Score: " + scoreCount
        SNAKEPART.classList.add("snake-part")
        snakeBody.push(SNAKEPART)
        gameBoard.appendChild(SNAKEPART) 
        snakeBody[0].classList.add("snake")
        applePosition()
        foodSpawn()
    }
}

