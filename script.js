// linkitysjuttuja
const list = document.getElementById("toDoList");
const inputtext = document.getElementById("inputfield");
//const form = document.querySelector(".toDoForm");
const addBtn = document.getElementById("addButton");
const delBtn = document.getElementById("delete");



//lisää tehtävän local storageen ja tarkistaa etttei kenttä ole tyhjä ->ok
function validate(){
    //var textfield = document.getElementById("inputfield").value;
    //var tasks = toDo.elements.todo.value;
    //var listaus = document.getElementById("toDoList");
    if(inputtext.value ==""){
        inputtext.style.border = "solid";
        inputtext.style.borderColor = "red";
        alert("Älä jätä kenttää tyhjäksi.");
        return false;
        
    }
    //var li = document.createElement("li");
    //li.innerText = inputtext.value;
    //li.classList.add("agenda");
    //list.appendChild(li);
        
    inputtext.style.border = "none";
    let getLclStrgDta = localStorage.getItem("tekemista");
    if (getLclStrgDta) {
        lista = JSON.parse(getLclStrgDta);
    } else {
        lista = [];
    }
    lista.push(inputtext.value);
    localStorage.setItem("tekemista", JSON.stringify(lista));
    
    taskList();
    //return true;
    //taskList();
    
    //taskList();
    //var listamus = document.getElementById
    
}
//lisää ja näyttää kaikki listalla olevat tehtävät -> ok
function taskList() {
    let getLclStrgDta = localStorage.getItem("tekemista");
    if (getLclStrgDta) {
        lista = JSON.parse(getLclStrgDta);
    } else {
        lista = [];
    }
    let li = "";
    lista.forEach((element, id) => {
        li += `<li class ="liTag"><span class="check" onclick="markAsDone(${id})"><i class="fas fa-check"></i></span>${element}<span class="del" onclick="deleteTask(${id})"><i class="fas fa-trash"></i></span></li>`;
    });
    list.innerHTML = li; 
    inputtext.value = "";
    

}
//poista tehtävä ->ok
function deleteTask(id) {
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
// merkitsee tehdyksi
function markAsDone() {
    let getLclStrgDta = localStorage.getItem("tekemista");
    if (getLclStrgDta) {
        lista = JSON.parse(getLclStrgDta);
    } else {
        lista = [];
    }
    
}

// poistaa kaikki tehtävät listalta ->ok
function deleteAllTasks() {
    list.innerHTML ="";
    localStorage.clear();
    
}




       
// tallenna listan tiedot selaimeen ->ok
// muista siirtää css ja javascript ulkoiseen tiedostoon
// tee kivemman näköiseksi