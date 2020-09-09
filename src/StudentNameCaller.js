let students = ["Aijan","Aikel","Ainura","Anna" ,"Alina" ,"Begaiym", "Eliza",	"Kamila","Karligach","Rakhat","Shola","Tilek","Umut","Viktoriia","Aizat","Rustam","Kanikei","Atai","Kasiet","Sholpan"];
 import './css/styles.css';
document.querySelector('.overlay').addEventListener('mouseover',function(e){
  if(e.target.tagName==='DIV'){
    e.target.classList.toggle('hide');
  }
},false);

let main = document.querySelector('.submit');
main.addEventListener('click',function(e){
  let name = e.target.firstElementChild.firstElementChild;
  let index = Math.floor(Math.random()*(students.length));
  name.innerText = students[index];
  name.style.fontSize = "60px";

},false);
