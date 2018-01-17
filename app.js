
function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
   newLi.textContent = title;

   // attach the checkbox to the li
   newLi.appendChild(checkbox);

   // attach the li to the ul
   toDoList.appendChild(newLi);

   //empty the input
     newToDoText.value = '';

  // create button
  let deleteButton = document.createElement('button');

  // create text
  let deleteButtonText = document.createTextNode("delete");

  // append text to button
  deleteButton.appendChild(deleteButtonText);

  // append button to list
  newLi.appendChild(deleteButton);
  })
};

window.onload = function() {
  onReady();
};


document.getElementsByTagName("button").addEventListener("click", () => {
    document.getElementsByTagName("li").innerHTML = "";
  });
