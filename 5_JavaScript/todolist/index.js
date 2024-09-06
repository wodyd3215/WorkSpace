let todoList = [{
    title : "밥먹기",
    date : new Date().getTime(),
    isDone : false
}];

// 할 일을 todoList에 넣기
function addTodo(){
    // input요소 가져오기
    const searchInput = document.querySelector("#search-bar input");
    todoList.push({
        title : searchInput.ariaValueMax,
        date : new Date().getTime(),
        isDone : false
    });

    searchInput.value = "";
    drawTodoList();
}

// 할 일 목록을 ui에 나타내기
function drawTodoList(){
    const removeTodo = function(removeTodo){
        todoList = todoList.filter(t => !(t.date === removeTodo.date && removeTodo.title === t.title));

        drawTodoList();
    }

    const toggleStatus = function(targetTodo){
        todoList = todoList.map(function(t){
            if (t.date === targetTodo.date && t.title === targetTodo.title){
                t.isDone = !t.isDone;
            }
            return t;
        })

        drawTodoList();
    }
    
    const todoUi = document.querySelector(".todo-list");
    todoUi.innerHTML = "";

    for(let todo of todoList){
        const todoLi = document.createElement("li") // <li></li>
        todoLi.innerText = todo.title; // <li>밥먹기</li>
        todoLi.className = todo.isDone ? 'done' : '';
        todoUl.appendChild(todoLi); // a.appendChild(b) -> b요소가 a요소 뒤에가서 붙는다. 

        todoLi.onclick = function(){
            toggleStatus(todo);
        }

        const removeBtn = document.createElement("div");
        removeBtn.className = "todo-remove-btn";
        removeBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
        todoLi.appendChild(removeBtn);
        
        removeBtn.onclick = function(){
            removeTodo(todo)
        }
    }
    
}

















/*
function addTodo(){
    const searchInput = document.querySelector("#search-bar input")

    const todoLi = document.createElement("li") // <li></li>
    todoLi.innerText = searchInput.value; // <li>밥먹기</li>

    const removeBtn = document.createElement("div");
    removeBtn.className = "todo-remove-btn";
    removeBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
    todoLi.appendChild(removeBtn);
    
    removeBtn.onclick = function(){
        $(this.parentNode).remove();
    }

    const todoUl = document.querySelector(".todo-list");
    todoUl.appendChild(todoLi); // a.appendChild(b) -> b요소가 a요소 뒤에가서 붙는다. 

}
    */