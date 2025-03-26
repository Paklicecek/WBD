import {SNAKE,position, snakeBody} from "./game.js";

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



window.addEventListener("keydown", key => 
    {
        
        switch (key.key) {
            case "ArrowUp":
                if(lastDirection.x !== 0) break
                    inputDirection = {x: -1 , y: 0}
                    updateSnakePosition()
                break;
            case "ArrowDown":
                if(lastDirection.x !== 0) break
                    inputDirection = {x: 1 , y: 0}
                    updateSnakePosition()
                break;
            case "ArrowLeft":
                if(lastDirection.y !== 0) break
                    inputDirection = {x: 0 , y: -1}
                    updateSnakePosition()
                break;
            case "ArrowRight":
                if(lastDirection.y !== 0) break
                    inputDirection = {x: 0 , y: 1}
                    updateSnakePosition()
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