import {position, snakeBody,popupMessage,gameOver} from "./game.js";
import {appleSpawn} from "./food.js";

let interval

export function updateSnakePosition() {
    snakeBody[0].style.gridColumnStart = position.y
    snakeBody[0].style.gridRowStart = position.x
    
    for(let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i].style.gridColumnStart = snakeBody[i-1].style.gridColumnStart
        snakeBody[i].style.gridRowStart = snakeBody[i-1].style.gridRowStart
    }
}

let inputDirection = {x: 0, y:1}
let lastDirection = {x:0, y:0}
const snakeSpeed = 500

export function intervalStart(){
    interval = setInterval(() => {
        appleSpawn()
        getInput()
        gameOver()
        updateSnakePosition()
    }, snakeSpeed);
}

window.addEventListener("keydown", key => 
    {
        
        switch (key.key) {
            case "ArrowUp":
            case "w":
            case "W":
                if(lastDirection.x !== 0) break
                    inputDirection = {x: -1 , y: 0}
                    clearInterval(interval)
                    getInput()
                    updateSnakePosition()
                    intervalStart()
                break;
            case "ArrowDown":
            case "s":
            case "S":
                if(lastDirection.x !== 0) break
                    inputDirection = {x: 1 , y: 0}
                    clearInterval(interval)
                    getInput()
                    updateSnakePosition()
                    intervalStart()
                break;
            case "ArrowLeft":
            case "a":
            case "A":
                if(lastDirection.y !== 0) break
                    inputDirection = {x: 0 , y: -1}
                    clearInterval(interval)
                    getInput()
                    updateSnakePosition()
                    intervalStart()
                break;
            case "ArrowRight":
            case "d":
            case "D":
                if(lastDirection.y !== 0) break
                    inputDirection = {x: 0 , y: 1}
                    clearInterval(interval)
                    getInput()
                    updateSnakePosition()
                    intervalStart()
                break;
        }
    })
export function getInput(){
    lastDirection = inputDirection
    position.x += inputDirection.x
    position.y += inputDirection.y
    return inputDirection
}

intervalStart()