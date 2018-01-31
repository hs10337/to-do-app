
function onReady(){
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'delete'

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton)
    });
  }
}

var deleteTask = function(){
  console.log("Delete task...");
  //remove parent list item from the ul
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

button.addEventListener('click', event => {
  deleteTask();
});

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};
