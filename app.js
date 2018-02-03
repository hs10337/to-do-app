function onReady(){
  let toDos = [];
  let id = 0;

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
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

      deleteButton.addEventListener('click', event => {
        deleteButton.parentNode.remove();
      });
    });
  };

function deleteToDo(id) {
  toDos.filter(item => item.id !== id);
};


addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
  newToDoText.value = '';
});
}

window.onload = function() {
  onReady();
};
