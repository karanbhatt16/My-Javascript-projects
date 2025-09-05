const inputBox = document.querySelector("input");
inputBox.setAttribute("spellcheck", "true");
const listContainer = document.querySelector(".list-container");

// Showing stored data
if(localStorage.getItem("data") != null){
    listContainer.innerHTML = localStorage.getItem("data")
}

// Adding tasks dynamically
const button = document.querySelector(".add");
function handleAddTask(event){
    if (event.type === 'keydown' && event.key !== 'Enter') return;
    if(inputBox.value === ''){
        // error message
        const box = document.getElementsByClassName("messageBox")[0];
        box.innerHTML = '';
        let div = document.createElement("div");
        div.classList.add("message");
        div.innerHTML = `<img src="images/invalid.png">You must write something`;
        box.appendChild(div);
        setTimeout(()=>{
            div.remove();
        },2000)
    } else{
        let li = document.createElement("li");
        let cross = document.createElement("span");
        cross.innerHTML = "╳";
        li.innerHTML = inputBox.value;
        inputBox.value='';
        listContainer.appendChild(li);
        li.appendChild(cross);
        li.classList.add("task");
        saveData();
        
    }
}

// event listener for completed tasks and to delete task 
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        e.target.querySelector("span").style.textDecoration = "none";
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// function that stores data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// add task when add button is clicked or enter is pressed
button.addEventListener('click',handleAddTask);
inputBox.addEventListener('keydown',handleAddTask);

