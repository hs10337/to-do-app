
function onReady(){
  let toDos = [];
  // doesn't toDos have to be an empty object?

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    // Is const function-scope? Do we have to call const in every function?

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      //can this also be written as toDos.forEach(toDoItem => ){}
      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      // why do we use double-quotation here instead of single?

      const title = document.createElement('span');
      title.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
}





window.onload = function() {
  onReady();
};
