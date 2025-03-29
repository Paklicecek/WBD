import {position, snakeBody,gameOver, hidePopup, Score} from "./game.js";
import {appleSpawn, resetScore, scoreCount} from "./food.js";

export let interval

export function updateSnakePosition() {
    snakeBody[0].style.gridColumnStart = position.y
    snakeBody[0].style.gridRowStart = position.x
    
    for(let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i].style.gridColumnStart = snakeBody[i-1].style.gridColumnStart
        snakeBody[i].style.gridRowStart = snakeBody[i-1].style.gridRowStart
    }
}

let inputDirection = {x: 0, y:0}
let lastDirection = {x:0, y:0}
let snakeSpeed = 600

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
    appleSpawn()
    gameOver()
    getInput()
    updateSnakePosition()
    
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

export function getInput(){
    lastDirection = inputDirection
    position.x += inputDirection.x
    position.y += inputDirection.y
    return inputDirection
}

const speedSelect = document.querySelector("#speedSelect")
function speedChange(){
speedSelect.addEventListener("change", () => {

    const selectedSpeed = speedSelect.value

    if(selectedSpeed == "clearInterval"){
        clearInterval(interval)
        window.removeEventListener("keydown",controls)
        inputDirection = {x: 0, y:0}
    }
    else if(selectedSpeed == "600"){
        clearInterval(interval)
        snakeSpeed = Number(speedSelect.value)
        intervalStart()
        window.addEventListener("keydown",controls)
    }
    else if(selectedSpeed == "450"){
        clearInterval(interval)
        snakeSpeed = Number(speedSelect.value)
        intervalStart()
        window.addEventListener("keydown",controls)
    }
    else if(selectedSpeed == "350"){
        clearInterval(interval)
        snakeSpeed = Number(speedSelect.value)
        intervalStart()
        window.addEventListener("keydown",controls)
    }
    else if(selectedSpeed == "200"){
        clearInterval(interval)
        snakeSpeed = Number(speedSelect.value)
        intervalStart()
        window.addEventListener("keydown",controls)
    }
})
}
restartGame()
speedChange()
export function restartGame(){
    const restartButton = document.querySelector("#Restart")
    restartButton.addEventListener("click", () => {
        position.x = 8
        position.y = 8
        updateSnakePosition()
        hidePopup()
        speedSelect.value = "clearInterval"
        clearInterval(interval)
        window.removeEventListener("keydown",controls)
        for(let i = 1; i < snakeBody.length; i++){
            snakeBody[i].remove()
        }
        Score.innerHTML = "Score: 1"
        resetScore()
    })
}