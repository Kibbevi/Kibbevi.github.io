callEvents();

function callEvents(){
  document.querySelector('form').addEventListener('submit',validate);
  document.getElementById('clear').addEventListener('click',clearAllTasks);
  document.getElementById('refresh').addEventListener('click',showTasks);
  document.querySelector('ul').addEventListener('click',deleteorCheck);
  //document.querySelector('active').addEventListener('click',showActive);
  //document.querySelector('completed').addEventListener('click',showCompleted);
}
// validate
function validate(e){
  e.preventDefault();
  let input = document.querySelector('input');
    
  if(input.value ==""){
    input.style.border="solid";
    input.style.borderColor ="red";
    alert("Älä jätä kenttää tyhjäksi");
    return false;
  }
  input.style.border ="none";
  addTask(input.value);
  input.value = '';
}

// add tasks
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  var list = document.getElementById('toDoList');
  li.innerHTML = `<input type="checkbox" class ="checkmark"><label>${task}</label><span class="delete"><i class="fas fa-trash"></i></span>`;
  ul.appendChild(li);
  storeTasks();
}
// store in localstorage
function storeTasks(){
  var list = document.getElementById('toDoList');
  window.localStorage.stuffToDo = list.innerHTML;
}
// show tasks from localstorage
function showTasks(){
  var list = document.getElementById("toDoList");
  let getLclStrgDta = localStorage.getItem("stuffToDo");
  list.innerHTML = getLclStrgDta;

}
// clear list and localstorage
function clearAllTasks(e){
  let ul = document.querySelector('ul').innerHTML = '';
  localStorage.clear();
}

function deleteorCheck(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    check(e);
  }
}
  // delete task
function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
  storeTasks();
}

  // mark task
function check(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color ="lightslategrey";
  } else {
    task.style.textDecoration ="none";
    task.style.color ="#2f4f4f";
  }
  storeTasks();
}
//function showActive(){
//  var li = document.getElementsByClassName('activeTask');
//}
//function showCompleted(){
//  var li = document.getElementsByClassName('checkedTask');
//}
       
// tallenna listan tiedot selaimeen ->ok
// muista siirtää css ja javascript ulkoiseen tiedostoon ->ok
// tee kivemman näköiseksi ->ok