 const footer=document.querySelector('footer');
const start=document.querySelector('.start')
const headerText=document.querySelector('h1')
const main=document.querySelector('main')
const boxes=document.querySelectorAll()   




 footer.addEventListener('click', function(evt){
 console.dir(evt.target)
 if(evt.target.classList.contains('start')){
    let player=randomIntFromInterval(1,2);
    headerText.innerText=`Player #${player} starts! Click play button!`
console.log(headerText)
 }else if(evt.target.classList.contains('reset')){
main.innerHTML='';
 }
 })

 function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
