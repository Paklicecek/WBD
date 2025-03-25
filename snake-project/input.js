import {SNAKE,position, snakeBody} from "./game.js";

export function updateSnakePosition() {
    SNAKE.style.gridColumnStart = position.y
    SNAKE.style.gridRowStart = position.x
    
    for(let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i].style.gridColumnStart = snakeBody[i-1].style.gridColumnStart
        snakeBody[i].style.gridRowStart = snakeBody[i-1].style.gridRowStart
    }
}
let inputDirection = {x: 0, y:1}
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