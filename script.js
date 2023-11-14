const reset=document.querySelector('.reset');
const start=document.querySelector('.start')
const headerText=document.querySelector('h1')
const main=document.querySelector('main')
const boxes=document.querySelectorAll('.box')   
const aside2=document.querySelector('.aside2')
const random1=document.querySelector('.random1')
const random2=document.querySelector('.random2')
const timerEl=document.getElementById('timer')
const score1Div=document.querySelector('.score1')
const score2Div=document.querySelector('.score2')
const color1="red";
const color2="blue";
// const initialTimerValue=10
// timerEl.innerText=initialTimerValue+ " seconds";



//start & reset buttons
let player1Turn=false;
let player2Turn=false;
let startButtonClicked=false;


 start.addEventListener('click', function(evt){
 console.dir(evt.target)
    let player1=`Player #1's turn!`
    headerText.innerText=player1;
    if(!startButtonClicked){
         randomArr[0] = random1.innerText=randomIntFromInterval(1,4);
         randomArr[1]=  random2.innerText=randomIntFromInterval(1,4);
           random1.classList.add('clicked')
           random2.classList.add('clicked')
           startButtonClicked=true;
           timerCountDown(timerEl);
      
           console.log(randomArr)
           console.log('expected amount of colored divs '+expectedColoredDivsNum(randomArr));
          }
      
    player1Turn=true;
console.log(headerText)
 })

 function switchPlayers() {
  if (timerEl.innerText === 'Finished') {
    player1Turn = !player1Turn;
    player2Turn = !player2Turn;

    if (player1Turn) {
      headerText.innerText = "Player #1's turn!";
      timerCountDown(timerEl);
      main.addEventListener("mouseover", mouseOver);
    } else {
      headerText.innerText = "Player #2's turn!";
      timerCountDown(timerEl);
      main.addEventListener("mouseover", mouseOver);
    }
  }
}

//  const playCombination = [
//   [1,1],
//   [[1,2],[2,1]],
//   [[1,3],[3,1]],
//   [[1,4],[4,1]],
//   [2,2],
//   [[2,3],[3,2]],
//   [[2,4],[4,2]],
//   [3,3],
//   [[3,4],[4,3]],
//   [4,4]
// ];

const randomArr=[];

//timer count

let setTimer

let storedMouseOver;
function timerCountDown(timerElement){
   storedMouseOver = mouseOver;
   let count=10;
   setTimer=setInterval(function(){
        if(count<=0){
            clearInterval(setTimer);
            timerElement.innerText='Finished';  
            startButtonClicked = false;
      random1.classList.remove('clicked');
      random2.classList.remove('clicked');
      main.removeEventListener('mouseover', storedMouseOver);
      switchPlayers();
      randomArr[0] = random1.innerText=randomIntFromInterval(1,4);
      randomArr[1]=  random2.innerText=randomIntFromInterval(1,4);
             }else{
            timerElement.innerText=count+ " seconds"
            isTimer=true
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

 





// Function to check the current color of each box



function checkBoxesColor(){
  let  color1Count=0;
 let color2Count=0;
  boxes.forEach(box=>{
    const currentColor=box.style.backgroundColor;
    if(currentColor==color1){  
      color1Count++;      
    }else if(currentColor==color2){
      color2Count++;
    }
  });
  return {color1Count,color2Count}
} 

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function expectedColoredDivsNum(array) {
  let num = 0;

  if (arraysAreEqual(array, [1, 1])) {
    num = 1;
  } else if (arraysAreEqual(array, [1, 2]) || arraysAreEqual(array, [2, 1])) {
    num = 2;
  } else if (arraysAreEqual(array, [1, 3]) || arraysAreEqual(array, [3, 1])) {
    num = 3;
  } else if (arraysAreEqual(array, [1, 4]) || arraysAreEqual(array, [4, 1])|| arraysAreEqual(array, [2, 2])) {
    num = 4;
  } else if (arraysAreEqual(array, [2, 3]) || arraysAreEqual(array, [3, 2])) {
    num = 6;
  } else if (arraysAreEqual(array, [2, 4]) || arraysAreEqual(array, [4, 2])) {
    num = 8;
  }else if (arraysAreEqual(array, [3, 3])) {
    num = 9;
  }else if (arraysAreEqual(array, [3, 4]) || arraysAreEqual(array, [4, 3])) {
    num = 12;
  }else if (arraysAreEqual(array, [4,4])) {
    num = 16;
  }
  return num;
}

let actualColor1Count=0;  
let actualColor2Count=0;
let expectedColor1Count=0;  
let expectedColor2Count=0;
 
    let isDragging = false;
  // main div color function
    main.addEventListener("mouseover", mouseOver);
    main.addEventListener("mousedown", mouseDown);
  
    function mouseOver(event) {
      if (isDragging) {
        const targetBox = event.target;
        if ((targetBox.classList.contains("box") && headerText.textContent=='Player #1\'s turn!' && player1Turn)) {
          targetBox.style.backgroundColor = color1;  
   const counts= checkBoxesColor()
       actualColor1Count=counts.color1Count;
       expectedColor1Count=expectedColoredDivsNum(randomArr)
          console.log('actualcolor1 '+actualColor1Count)
          console.log('expectedcolor1 '+expectedColor1Count)
           if(expectedColor1Count==actualColor1Count){
          main.removeEventListener('mouseover', storedMouseOver);
        }
           
           
        }else if(targetBox.classList.contains("box") && headerText.textContent=='Player #2\'s turn!' && player2Turn){
            targetBox.style.backgroundColor = color2; 
            const counts= checkBoxesColor()
            actualColor2Count=counts.color2Count;
            expectedColor2Count=expectedColoredDivsNum(randomArr)
          console.log('actualcolor2 '+actualColor2Count)
          console.log('expectedcolor2 '+expectedColor2Count)
               if(expectedColor2Count==actualColor2Count){
               main.removeEventListener('mouseover', storedMouseOver);
               }   
                
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
  
 
 reset.addEventListener('click', function(event){
  boxes.forEach(box=>{
  box.style.backgroundColor='#f3efef'})
  random1.innerHTML=''
  random2.innerHTML=''
  player1Turn = false;
  player2Turn = false;
  headerText.innerText="ZARUBA GAME"
  main.classList.remove('clicked');
  startButtonClicked = false;
  main.removeEventListener('mouseover', storedMouseOver);
  actualColor1Count = 0;
  actualColor2Count = 0;
  isDragging = true;
  timerEl.innerText = ''
  clearInterval(setTimer)
  main.addEventListener('mouseover', mouseOver);
 })
 
  

     
 

 
  

     
 

 
  

     
 

 
  

     
 
  

     