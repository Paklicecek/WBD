import {position, snakeBody,gameOver, hidePopup, Score, popupContainer, SNAKE} from "./game.js";
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
        console.log(scoreCount)
        getInput()
        updateSnakePosition()
        appleSpawn()
        gameOver()
    }, snakeSpeed);
}
function gameControl(){
    clearInterval(interval)
    getInput()
    updateSnakePosition()
    appleSpawn()
    gameOver()
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

export const restartButton = document.querySelector("#Restart")
const speedSelect = document.querySelector("#speedSelect")
const menuContainer = document.querySelector(".menuContainer")
const startButton = document.querySelector("#startButton")
const Difficulty = document.querySelector("#Difficulty")
function speedChange(){
    const selectedSpeed = speedSelect.value

    if(selectedSpeed == "clearInterval"){
        clearInterval(interval)
        window.removeEventListener("keydown",controls)
        inputDirection = {x: 0, y:0}
        return
    }
    else if(selectedSpeed == "600"){
        speedChangeControl()
        return
    }
    else if(selectedSpeed == "450"){
        speedChangeControl()
        return
    }
    else if(selectedSpeed == "350"){
        speedChangeControl()
        return
    }
    else if(selectedSpeed == "200"){
        speedChangeControl()
        return
    }
}
speedSelect.addEventListener("change", speedChange)

restartGame()
speedChange()
export function restartGame(){ 
    restartButton.addEventListener("click", () => {
        position.x = 8
        position.y = 8
        updateSnakePosition()
        hidePopup()
        clearInterval(interval)
        window.removeEventListener("keydown",controls)
        for(let i = 1; i < snakeBody.length; i++){
            snakeBody[i].remove()
        }
        Score.innerHTML = "Score: 1"
        resetScore()
        menuContainer.style.opacity = "1"
        popupContainer.style.zIndex = "0"
        inputDirection = {x: 0, y:0}
        lastDirection = {x:0, y:0}
        speedSelect.disabled = false
        for(let i = 0; i < snakeBody.length; i++){
            snakeBody[i].classList.remove("lostAnimation")
        }
        SNAKE.classList.remove("startAnimation")
        SNAKE.style.opacity = "1"
        Difficulty.remove()
    })
}

function startGame(){
    
    const menuContainer = document.querySelector(".menuContainer")
    window.removeEventListener("keydown",controls)
    startButton.addEventListener("click", () => {
        const selectedSpeed = speedSelect.value
        if(selectedSpeed.value != "clearInterval"){  
            menuContainer.style.opacity = "0"
            window.addEventListener("keydown",controls)
            speedSelect.disabled = true
        } 
        window.addEventListener("keydown",controls)
    }) 
    
}
function speedChangeControl(){ 
    startGame()
    clearInterval(interval)
    snakeSpeed = Number(speedSelect.value)
}
function snakeCollision() { // Zabugovane 
    for(let i = 4; i < snakeBody.length; i++){
            if(snakeBody[i].style.gridColumnStart == snakeBody[0].style.gridColumnStart && snakeBody[i].style.gridRowStart == snakeBody[0].style.gridRowStart){
                console.log(position.x, position.y)
                console.log("odpalim tuhle skolu")
            }
    }
}