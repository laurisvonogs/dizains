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