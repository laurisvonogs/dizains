const name = "Jānis Bērziņš";
const students = {
    "name": "Jānis Bērziņš",
    "role": "students"   
}
const pasniedzejs = {
    "name": "Jānis Bērziņš",
    "role": "pasniedzejs"   
}
const metodike = {
    "name": "Jānis Bērziņš",
    "role": "metodike"   
}





/* MODAL SCRIPT */
let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}

/* SPECSEMINARU INFO POPUP SCRIPT */

document.getElementById("saveForm").addEventListener("click", openSeminarInfo);
function openSeminarInfo(){
    modal.style.display = "block"
}
/* Specseminaru registresanas poga */

function registerToCourse(number) {
  if (document.getElementById(`registration-status-${number}`).textContent == "Nav reģistrējies") {
    document.getElementById(`registration-status-${number}`).innerHTML = "Reģistrējies";
    document.getElementById(`button-${number}`).innerHTML = "Atteikties";
    document.getElementById(`button-${number}`).style.backgroundColor = "red";
  }
  else {
    document.getElementById(`registration-status-${number}`).innerHTML = "Nav reģistrējies";
    document.getElementById(`button-${number}`).innerHTML = "Reģistrēties";
    document.getElementById(`button-${number}`).style.backgroundColor = "#44c767";
  }
}