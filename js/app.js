let form = document.getElementById("form__todo");
let formSubmit = document.getElementById("form__submit");
let formTasks = document.getElementById("form__tasks");

function addTasks(e){
    let formTitle = document.getElementById("input__title").value;
    let formDescription = document.getElementById("input__description").value;
    
    const tasks = {
        formTitle,
        formDescription
    };

    e.preventDefault()
    console.log(tasks)
}
form.addEventListener("submit", addTasks);