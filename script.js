 const footer=document.querySelector('footer');
const start=document.querySelector('.start')
const headerText=document.querySelector('h1')
const main=document.querySelector('main')
const boxes=document.querySelectorAll('.box')   
const aside2=document.querySelector('.aside2')
const random1=document.querySelector('.random1')
const random2=document.querySelector('.random2')
const timerEl=document.getElementById('timer')

const color1="rgb(190, 57, 57)";
const color2="rgb(42, 158, 158)";


let playButtonClicked=false;


 footer.addEventListener('click', function(evt){
 console.dir(evt.target)
 if(evt.target.classList.contains('start')){
    let player=randomIntFromInterval(1,2);
    headerText.innerText=`Player #${player} starts! Click play button!`
console.log(headerText)
 }else if(evt.target.classList.contains('reset')){
console.dir(boxes)
 // there should be a code to clear from color
 }
 })

aside2.addEventListener('click',function(evt){
    if(evt.target.classList.contains('play')){
        if(!playButtonClicked){
     random1.innerText=randomIntFromInterval(1,4);
     random2.innerText=randomIntFromInterval(1,4);
     random1.classList.add('clicked')
     random2.classList.add('clicked')
     playButtonClicked=true;
     timerCountDown(timerEl);
    }
}
})

function timerCountDown(timerElement){
  const storedMouseOver = mouseOver;
   let count=extractNumericValue(timerElement);
    const setTimer=setInterval(function(){
        if(count<=0){
            clearInterval(setTimer);
            timerElement.innerText='Finished';   
            playButtonClicked = false;
      random1.classList.remove('clicked');
      random2.classList.remove('clicked');
      main.removeEventListener('mouseover', storedMouseOver);
             }else{
            timerElement.innerText=count+ " seconds"
        }
        count--;
    },1000);
}


function extractNumericValue(element){
    let textContent=element.innerText || element.textContent;
    let numericPart=textContent.match(/\d+/)
    let numericValue=parseInt(numericPart,10);
    return  numericValue;
      }

 function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


 
    let isDragging = false;
  
    main.addEventListener("mouseover", mouseOver);
    main.addEventListener("mousedown", mouseDown);
  
    function mouseOver(event) {
      if (isDragging) {
        const targetBox = event.target;
        if (targetBox.classList.contains("box") && headerText.textContent=='Player #1 starts! Click play button!') {
          targetBox.style.backgroundColor = color1;  
        }else if(targetBox.classList.contains("box") && headerText.textContent=='Player #2 starts! Click play button!'){
            targetBox.style.backgroundColor = color2;  
        }
      }
    }
  
    function mouseDown() {
      isDragging = true;
      document.addEventListener("mouseup", mouseUp);
    }
  
    function mouseUp() {
      isDragging = false;
      document.removeEventListener("mouseup", mouseUp);
  
      }
  