import {SNAKE,position} from "./game.js";

export function updateSnakePosition() {
    SNAKE.style.gridColumnStart = position.y
    SNAKE.style.gridRowStart = position.x
}

function movementRight(){
    position.y += 1
}
function movementLeft(){
    position.y -= 1
}
function movementUp(){
    position.x -= 1
}
function movementDown(){
    position.x += 1
}

export const directions = {
    "up": movementUp,
    "down": movementDown,
    "left": movementLeft,
    "right": movementRight,
}

export let currentDirection = ""

let inputDirection = {x: 0, y:0}
let lastDirection = {x:0, y:0}



window.addEventListener("keydown", key => 
    {
        
        switch (key.key) {
            case "ArrowUp":
                    inputDirection = {x: -1 , y: 0}
                
                break;
            case "ArrowDown":
                    inputDirection = {x: 1 , y: 0}
                
                break;
            case "ArrowLeft":
                    inputDirection = {x: 0 , y: -1}
                
                break;
            case "ArrowRight":
                    inputDirection = {x: 0 , y: 1}
                
                break;
        }
        updateSnakePosition()
    })
export function getInput(){
    lastDirection = inputDirection
    position.x += inputDirection.x
    position.y += inputDirection.y
    return inputDirection
}
