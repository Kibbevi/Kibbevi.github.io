callEvents();

function callEvents(){
  document.querySelector('form').addEventListener('submit',validate);
  document.getElementById('clear').addEventListener('click',clearAllTasks);
  document.getElementById('refresh').addEventListener('click',taskList);
  document.querySelector('ul').addEventListener('click',deleteorCheck);
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
    li.innerHTML = `<input type="checkbox" id ="chackmark"><label>${task}</label><span class="delete"><i class="fas fa-trash"></i></span>`;
    ul.appendChild(li);
    storeTasks();
}
function storeTasks(){
    var list = document.getElementById('toDoList');
    window.localStorage.stuffToDo = list.innerHTML;
}
// show tasks
function taskList(){
    //var list = document.getElementById("toDoList");
    //let getLclStrgDta = localStorage.getItem("tekemista");
    //if (getLclStrgDta) {
    //    lista = JSON.parse(getLclStrgDta);
    //} else {
    //    lista = [];
    //}
    //let li = "";
    //lista.forEach((element, id) => {
    //    li += `<li class ="liTag"><input type="checkbox"onclick="check(${id})"></span>${element}<span class="delete" onclick="deleteTask(${id})">\u00D7</span></li>`;
    //});
    //list.innerHTML = li;

}

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
    }else {
      task.style.textDecoration = "none";
      task.style.color = "#2f4f4f";
    }
    storeTasks();
}
       
// tallenna listan tiedot selaimeen ->ok
// muista siirtää css ja javascript ulkoiseen tiedostoon ->ok
// tee kivemman näköiseksi ->ok