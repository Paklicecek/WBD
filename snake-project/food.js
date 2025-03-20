import {Score,position} from "./game.js";

let x 
let y 
let scoreCount = 0

export function applePosition() {
    x = Math.floor(Math.random()*15)+1
    y = Math.floor(Math.random()*15)+1
}

applePosition()
export function getPosition(){
    return[x,y]
}

export function foodSpawn() {
    const svg = document.querySelector("svg")
    svg.style.gridColumnStart = x
    svg.style.gridRowStart = y
}
export function appleSpawn() {
    if(position.y == getPosition()[0] && position.x == getPosition()[1]){
    applePosition()
    foodSpawn()
    scoreCount++
    Score.innerHTML = "Score: " + scoreCount
    }
}
