const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

// Todo 리스트를 로컬스토리지에 저장
function saveToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

// Todo 항목중 선택항목을 삭제
function deleteToDo(event) {
  const li = event.target.parentElement;
  const lis = document.querySelectorAll('#todo-list li');
  lis.forEach((liTagElement, index) => {
    if (liTagElement.id === li.id) {
      console.log(liTagElement.id, li.id);
      toDos.splice(index, 1); // 저장한 DB(배열)에서 삭제
    }
  })
  li.remove(); // 화면에서 삭제
  saveToDos(); // 저장
}

// Todo 리스트를 화면에 보여줌 (appendChild이용)
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener('click', deleteToDo);
  span.innerHTML = newTodo.text;
  button.innerHTML = 'Delete';

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// Form Submit 이벤트를 처리하는 콜백함수
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = {};
  newTodo.text = toDoInput.value;
  newTodo.id = Date.now();
  toDos.push(newTodo);
  toDoInput.value = '';
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedData = localStorage.getItem('toDos');
if (savedData !== null) {
  const parsedToDos = JSON.parse(savedData);
  toDos = parsedToDos;
  toDos.forEach(paintToDo);
}