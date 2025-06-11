let addDate = document.querySelector("#date")
let addTask = document.querySelector("#task")
let container = document.querySelector(".container")
let addColor = document.querySelector(".selected")
const add = document.querySelector("#submit")

copyright()
add.addEventListener("click", (event) => {
        if(addTask.value.trim() != "" && addDate.value != ""){
        event.preventDefault()
        createTasks()
        copyright()
    }
})
function formatDateWithLeadingZeros(isoDate) {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("-");
    return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
} // chatgpt neberu credit 

function createTasks() {
    let taskContainer = document.createElement("div")
    container.appendChild(taskContainer)
    taskContainer.classList.add("taskContainer")

    let newDate = document.createElement("p")
    let newTask = document.createElement("p")
    let newColor = document.createElement("div")
    let icon1 = document.createElement("img")
    
    let icon2 = document.createElement("img")

    let colorContainer = document.createElement("div")
    colorContainer.classList.add("colorContainer")
    newDate.textContent = formatDateWithLeadingZeros(addDate.value)
    newTask.textContent = addTask.value
    if(addColor.textContent != "Yellow"){
        newColor.style.backgroundColor = addColor.textContent
    }
    else{
        newColor.style.backgroundColor = "rgb(212, 206, 24)"
    }

    setTimeout(() => {
        taskContainer.appendChild(newDate)
        newDate.classList.add("date")
    
        taskContainer.appendChild(newTask)
        newTask.classList.add("task")
    
        taskContainer.appendChild(colorContainer)
    
        colorContainer.appendChild(newColor)
        newColor.classList.add("color")
        
        colorContainer.appendChild(icon1)
        icon1.src = "../Icons/pen.png"
        icon1.classList.add("Pen")
    
        colorContainer.appendChild(icon2)
        icon2.src = "../Icons/trash.png"
        icon2.classList.add("Trash")
    }, 1100);
    icon2.addEventListener("click", () => {
        setTimeout(() => {
            taskContainer.classList.add("removing-taskContainer");
        }, 1100);
        setTimeout(() => {
            taskContainer.remove()
        }, 2100);
        newDate.classList.add("removing-date");
        newTask.classList.add("removing-task");
        colorContainer.classList.add("removing-colorContainer");
        newColor.classList.add("removing-color");
        icon1.classList.add("removing-pen");
        icon2.classList.add("removing-trash");
        setTimeout(() => {
            newDate.remove()
            newTask.remove()
            colorContainer.remove()
            newColor.remove()
            icon1.remove()
            icon2.remove()
        }, 1200);
    })
}

function copyright() {
    const oldCopyright = container.querySelector(".copyright");
    if (oldCopyright) { 
        oldCopyright.remove();
    }
    let copyright = document.createElement("p");
    copyright.className = "copyright";
    copyright.innerHTML = "&copy; 2025, Dominik Opat.";
    container.appendChild(copyright);
}

let customSelect = document.querySelector(".customSelect")
let options = document.querySelector(".options")


customSelect.addEventListener("click", ()=> {
    if(options.style.display != "contents"){
        options.style.display = "contents"
    }
    else{
        options.style.display = "none"
    }
})

let option = document.querySelectorAll(".option")
let selected = document.querySelector("#selected")


option.forEach(opt => {
    opt.addEventListener("click",()=> {
        selected.textContent = opt.textContent
    })
});


