
let inputBar = document.getElementById("input-bar");
let submitBtn = document.getElementById("submit-btn");
let taskList = document.getElementById("task-list");

function addTask(task) {
    if (task == null || task == "")
        return false;

    let listItem = document.createElement("li");
    listItem.setAttribute("class", "task");
    listItem.textContent = task;
    listItem.addEventListener("click", () => {
        listItem.classList.toggle("done");
    })


    taskList.appendChild(listItem);

    inputBar.value = "";
    return true;
}




submitBtn.addEventListener("click",
    (event) => {
        addTask(inputBar.value);
    }
)
