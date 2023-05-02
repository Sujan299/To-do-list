const inputValue = document.querySelector(".Task");
const listContainer = document.querySelector(".listContainer");

function addTask(){
    if(inputValue.value===""){
        alert("enter something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputValue.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
       span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputValue.value = "";
    saveData();
}
document.querySelector("button").addEventListener(
    "click", addTask
);


listContainer.addEventListener("click",
function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();