import {position, snakeBody,gameOver} from "./game.js";
import {appleSpawn} from "./food.js";

export let interval

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
        updateSnakePosition()
        gameOver()
    }, snakeSpeed);
}
function gameControl(){
    clearInterval(interval)
    getInput()
    updateSnakePosition()
    appleSpawn()
    intervalStart()
}
export function controls(key) {
           switch (key.key) {
                case "ArrowUp":
                case "w":
                case "W":
                    if(lastDirection.x !== 0) break
                        inputDirection = {x: -1 , y: 0}
                        gameControl()
                    break;
                case "ArrowDown":
                case "s":
                case "S":
                    if(lastDirection.x !== 0) break
                        inputDirection = {x: 1 , y: 0}
                        gameControl()
                    break;
                case "ArrowLeft":
                case "a":
                case "A":
                    if(lastDirection.y !== 0) break
                        inputDirection = {x: 0 , y: -1}
                        gameControl()
                    break;
                case "ArrowRight":
                case "d":
                case "D":
                    if(lastDirection.y !== 0) break
                        inputDirection = {x: 0 , y: 1}
                        gameControl()
                    break;
            }
        
}
window.addEventListener("keydown",controls)
export function getInput(){
    lastDirection = inputDirection
    position.x += inputDirection.x
    position.y += inputDirection.y
    return inputDirection
}

intervalStart()