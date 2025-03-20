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

window.addEventListener("keydown", key => 
    {
        switch (key.key) {
            case "ArrowUp":
                if(currentDirection != "down"){
                    currentDirection = "up"
                SNAKE.style.rotate = "-90deg"
                } 
                break;
            case "ArrowDown":
                if(currentDirection != "up"){
                    currentDirection = "down"
                    SNAKE.style.rotate = "90deg"
                } 
                break;
            case "ArrowLeft":
                if(currentDirection != "right"){
                    currentDirection = "left"
                    SNAKE.style.rotate = "180deg"
                }
                break;
            case "ArrowRight":
                if(currentDirection != "left"){
                    currentDirection = "right"
                    SNAKE.style.rotate = "0deg"  
                } 
                break;
        }
        updateSnakePosition()
    })
