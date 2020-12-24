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
  if(e.target == modal1){
    modal1.style.display = "none"
  }
  if(e.target == modal2){
    modal2.style.display = "none"
  }
  if(e.target == modal3){
    modal3.style.display = "none"
  }
  if(e.target == modal4){
    modal4.style.display = "none"
  }
  if(e.target == modal5){
    modal5.style.display = "none"
  }
  if(e.target == modal6){
    modal6.style.display = "none"
  }
  if(e.target == modal7){
    modal7.style.display = "none"
  }
  if(e.target == modal8){
    modal8.style.display = "none"
  }if(e.target == modal9){
    modal9.style.display = "none"
  }
  if(e.target == modal10){
    modal10.style.display = "none"
  }
  if(e.target == modal11){
    modal11.style.display = "none"
  }
  if(e.target == modal12){
    modal12.style.display = "none"
  }
  if(e.target == modal13){
    modal13.style.display = "none"
  }
  if(e.target == modal14){
    modal14.style.display = "none"
  }
  if(e.target == modal15){
    modal15.style.display = "none"
  }
  if(e.target == modal16){
    modal16.style.display = "none"
  }
  if(e.target == modal17){
    modal17.style.display = "none"
  }
  if(e.target == modal18){
    modal18.style.display = "none"
  }if(e.target == modal19){
    modal19.style.display = "none"
  }
  if(e.target == modal20){
    modal20.style.display = "none"
  }
}

/* SPECSEMINARU INFO POPUP SCRIPT */

let info1 = document.getElementById("info1");
let modal1 = document.querySelector(".modal1");
info1.onclick = function(){
    modal1.style.display = "block"
}
let info2 = document.getElementById("info2");
let modal2 = document.querySelector(".modal2");
info2.onclick = function(){
    modal2.style.display = "block"
}
let info3 = document.getElementById("info3");
let modal3 = document.querySelector(".modal3");
info3.onclick = function(){
    modal3.style.display = "block"
}
let info4 = document.getElementById("info4");
let modal4 = document.querySelector(".modal4");
info4.onclick = function(){
    modal4.style.display = "block"
}
let info5 = document.getElementById("info5");
let modal5 = document.querySelector(".modal5");
let closeBtn5 = document.querySelector(".close-btn-5");
closeBtn5.onclick = function(){
  modal5.style.display = "none"
}
info5.onclick = function(){
    modal5.style.display = "block"
}
let info6 = document.getElementById("info6");
let modal6 = document.querySelector(".modal6");
info6.onclick = function(){
    modal6.style.display = "block"
}
let info7 = document.getElementById("info7");
let modal7 = document.querySelector(".modal7");
info7.onclick = function(){
    modal7.style.display = "block"
}
let info8 = document.getElementById("info8");
let modal8 = document.querySelector(".modal8");
info8.onclick = function(){
    modal8.style.display = "block"
}
let info9 = document.getElementById("info9");
let modal9 = document.querySelector(".modal9");
info9.onclick = function(){
    modal9.style.display = "block"
}
let info10 = document.getElementById("info10");
let modal10 = document.querySelector(".modal10");
info10.onclick = function(){
    modal10.style.display = "block"
}
let info11 = document.getElementById("info11");
let modal11 = document.querySelector(".modal11");
info11.onclick = function(){
    modal11.style.display = "block"
}
let info12 = document.getElementById("info12");
let modal12 = document.querySelector(".modal12");
info12.onclick = function(){
    modal12.style.display = "block"
}
let info13 = document.getElementById("info13");
let modal13 = document.querySelector(".modal13");
info13.onclick = function(){
    modal13.style.display = "block"
}
let info14 = document.getElementById("info14");
let modal14 = document.querySelector(".modal14");
info14.onclick = function(){
    modal14.style.display = "block"
}
let info15 = document.getElementById("info15");
let modal15 = document.querySelector(".modal15");
info15.onclick = function(){
    modal15.style.display = "block"
}
let info16 = document.getElementById("info16");
let modal16 = document.querySelector(".modal16");
info16.onclick = function(){
    modal16.style.display = "block"
}
let info17 = document.getElementById("info17");
let modal17 = document.querySelector(".modal17");
info17.onclick = function(){
    modal17.style.display = "block"
}
let info18 = document.getElementById("info18");
let modal18 = document.querySelector(".modal18");
info18.onclick = function(){
    modal18.style.display = "block"
}
let info19 = document.getElementById("info19");
let modal19 = document.querySelector(".modal19");
info19.onclick = function(){
    modal19.style.display = "block"
}
let info20 = document.getElementById("info20");
let modal20 = document.querySelector(".modal20");
info20.onclick = function(){
    modal20.style.display = "block"
}


/* Specseminaru registresanas poga */

function registerToCourse(number) {
  if (document.getElementById(`registration-status-${number}`).textContent == "Nav reģistrējies") {
    document.getElementById(`registration-status-${number}`).innerHTML = "Reģistrējies";
    document.getElementById(`button-${number}`).innerHTML = "Atteikties";
    document.getElementById(`button-${number}`).style.backgroundColor = "red";
    var remaining = parseInt(document.getElementById(`remaining-${number}`).innerHTML);
    document.getElementById(`remaining-${number}`).innerHTML = remaining - 1;
  }
  else {
    document.getElementById(`registration-status-${number}`).innerHTML = "Nav reģistrējies";
    document.getElementById(`button-${number}`).innerHTML = "Reģistrēties";
    document.getElementById(`button-${number}`).style.backgroundColor = "#44c767";
    var remaining = parseInt(document.getElementById(`remaining-${number}`).innerHTML);
    document.getElementById(`remaining-${number}`).innerHTML = remaining + 1;
  }
}

function studentCount(number) {
  var x = document.getElementsByName(`register-${number}`);
  var count = 0;
  for (i = 0; i < x.length; i++) {
    if (x[i].checked) {
      count++;
    }
  }
  document.getElementById(`register-${number}-count`).innerHTML = count;
  document.getElementsByClassName(`modal${number}`)[0].style.display = "none"
}

function checkCount(register,number) {
  var count = document.getElementById(`register-${register}-count`).innerHTML;
  if (count >= number) {
    var button1 = document.getElementById(`button-${register}`);
    button1.innerHTML = "Specseminars pieteikts";
  }
  else {
    alert(`Vajag vismaz ${number} studentus`);
  }
}