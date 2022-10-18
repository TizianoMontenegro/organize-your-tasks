let form = document.getElementById("form__todo");

function setTasks(e){
    e.preventDefault()
    let formTitle = document.getElementById("input__title").value;
    let formDescription = document.getElementById("input__description").value;
    
    const task = {
        formTitle,
        formDescription
    };
    if(localStorage.getItem("tasks") === null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }else{
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    getTasks();
};
function getTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let listTasks = document.getElementById("tasks");
    
    listTasks.innerHTML = "";

    for(let i = 0; i < tasks.length; i++){
        let title = tasks[i].formTitle;
        let description = tasks[i].formDescription;
        listTasks.innerHTML += `<div class="card__tasks">
            <p>${title} - ${description}</p>
            <button id="remove" onclick="removeTask('${title}');">Remove</button>
        </div>`;
    }
};
function removeTask(title){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].formTitle == title){
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));
    getTasks();
}
form.addEventListener("submit", setTasks);
getTasks();