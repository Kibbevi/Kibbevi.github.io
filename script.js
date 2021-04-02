callEvents();

function callEvents(){
  document.querySelector('form').addEventListener('submit',validate);
  document.getElementById('clear').addEventListener('click',clearAllTasks);
  //document.querySelector('ul').addEventListener('click',deleteorCheck);
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
    //let ul = document.querySelector('ul');
    //let li = document.createElement('li');
    //li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete">\u00D7</span>`;
    //ul.appendChild(li);
    
    let getLclStrgDta = localStorage.getItem("tekemista");
    if (getLclStrgDta) {
        lista = JSON.parse(getLclStrgDta);
    } else {
        lista = [];
    }
    lista.push(task);
    localStorage.setItem("tekemista", JSON.stringify(lista));
    taskList();
    
    
  
}
function taskList(){
    var list = document.getElementById("toDoList");
    let getLclStrgDta = localStorage.getItem("tekemista");
    if (getLclStrgDta) {
        lista = JSON.parse(getLclStrgDta);
    } else {
        lista = [];
    }
    let li = "";
    lista.forEach((element, id) => {
        li += `<li class ="liTag"><input type="checkbox"onclick="check(${id})"><i class="fas fa-check"></i></span>${element}<span class="delete" onclick="deleteTask(${id})">\u00D7</span></li>`;
    });
    list.innerHTML = li;
}

function clearAllTasks(e){
    let ul = document.querySelector('ul').innerHTML = '';
    localStorage.clear();
}
//function deleteorCheck(e){
    //if(e.target.className == 'delete')
   //   deleteTask(e);
    //else {
    //  check(e);
    //}
//}
  
  // delete task
function deleteTask(id){
    //let remove = e.target.parentNode;
    //let parentNode = remove.parentNode;
    //parentNode.removeChild(remove);
    let getLclStrgDta = localStorage.getItem("tekemista");
    if (getLclStrgDta) {
        lista = JSON.parse(getLclStrgDta);
    } else {
        lista = [];
    }
    lista.splice(id, 1);
    localStorage.setItem("tekemista", JSON.stringify(lista));
    taskList();
    
    

    
}

  
  // tick a task
function check(id){
    let getLclStrgDta = localStorage.getItem("tekemista");
    if (getLclStrgDta) {
        lista = JSON.parse(getLclStrgDta);
    } else {
        lista = [];
    }
    let ul = document.querySelector('ul');
    let li = document.querySelector('liTag');
    
    //lista.splice(id, 0);
    
    
    //id.textDecoration ="line-through";
    //localStorage.setItem("tekemista", JSON.stringify(lista));
    //taskList();
    //const task = e.target.nextSibling;
    //if(e.target.checked){
      //task.style.textDecoration = "line-through";
      //task.style.color ="lightslategrey";
    //}else {
     // task.style.textDecoration = "none";
    //  task.style.color = "#2f4f4f";
    
}
       
// tallenna listan tiedot selaimeen ->ok
// muista siirtää css ja javascript ulkoiseen tiedostoon
// tee kivemman näköiseksi