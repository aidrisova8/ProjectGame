const footer = document.querySelector("footer");
const reset=document.querySelector('.reset');
const start = document.querySelector(".start");
const headerText = document.querySelector("h1");
const main = document.querySelector("main");
const boxes = document.querySelectorAll(".box");
const aside2 = document.querySelector(".aside2");
const random1 = document.querySelector(".random1");
const random2 = document.querySelector(".random2");
const timerEl = document.getElementById("timer");
const score1Div = document.querySelector(".score1");
const score2Div = document.querySelector(".score2");
const color1 = "red";
const color2 = "blue";
let player1Turn = false;
let player2Turn = false;
let startButtonClicked = false;
let actualColor1Count = 0;
let actualColor2Count = 0;

// keep track of the random dimensions of box
let numberOfBoxesOne, numberOfBoxesTwo, totalBoxesAllowed;


//start  button
start.addEventListener("click", function (evt) {

  console.dir(evt.target);

    let player1 = `Player #1's turn!`;
    headerText.innerText = player1;

    if (!startButtonClicked) {

      numberOfBoxesOne = randomIntFromInterval(1, 4)
      numberOfBoxesTwo = randomIntFromInterval(1, 4);

      randomArr[0] = random1.innerText = numberOfBoxesOne
      randomArr[1] = random2.innerText = numberOfBoxesTwo

      totalBoxesAllowed = numberOfBoxesOne * numberOfBoxesTwo

      random1.classList.add("clicked");
      random2.classList.add("clicked");

      startButtonClicked = true;
      timerCountDown(timerEl);

      console.log(randomArr);
      // console.log(
      //   "expected amount of colored divs " + expectedColoredDivsNum(randomArr)
      // );
    }

    player1Turn = true;
    console.log(headerText);
});

function switchPlayers() {

  if (timerEl.innerText === "Finished") {

    player1Turn = !player1Turn;
    player2Turn = !player2Turn;

    actualColor1Count = 0
    actualColor2Count = 0

    if (player1Turn) {

      headerText.innerText = "Player #1's turn!";
      timerCountDown(timerEl);
      // main.addEventListener("mouseover", mouseOver);

    } else {

      headerText.innerText = "Player #2's turn!";
      timerCountDown(timerEl);
      // main.addEventListener("mouseover", mouseOver);

    }
  }
}


const randomArr = [];
let setTimer;
let storedMouseOver;

function timerCountDown(timerElement) {

  storedMouseOver = mouseOver;
  let count = 10;

   setTimer = setInterval(function () {

    if (count <= 0) {

      clearInterval(setTimer);
      timerElement.innerText = "Finished";
      startButtonClicked = false;

      random1.classList.remove("clicked");
      random2.classList.remove("clicked");

      // main.removeEventListener("mouseover", storedMouseOver);
      switchPlayers();

      numberOfBoxesOne = randomIntFromInterval(1, 4)
      numberOfBoxesTwo = randomIntFromInterval(1, 4);

      randomArr[0] = random1.innerText = numberOfBoxesOne
      randomArr[1] = random2.innerText = numberOfBoxesTwo

      totalBoxesAllowed = numberOfBoxesOne * numberOfBoxesTwo

    } else {

      timerElement.innerText = count + " seconds";
    }

    count--;
  }, 1000);
}



function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




let isDragging = false;
// main div color function
main.addEventListener("mouseover", mouseOver);
main.addEventListener("mousedown", mouseDown);

function mouseOver(event) {
console.log('mouse', isDragging, actualColor1Count, actualColor2Count, totalBoxesAllowed)
  if (isDragging) {
    const targetBox = event.target;
    if (
      targetBox.classList.contains("box") &&
      headerText.textContent == "Player #1's turn!" &&
      actualColor1Count < totalBoxesAllowed
    ) {
      targetBox.style.backgroundColor = color1;
      
      actualColor1Count++

  
console.log(actualColor1Count)
 
    } else if (
      targetBox.classList.contains("box") &&
      headerText.textContent == "Player #2's turn!" && 
      actualColor2Count < totalBoxesAllowed
    ) {
      targetBox.style.backgroundColor = color2;

      actualColor2Count++
      console.log(actualColor2Count)

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



//reset button

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
     
 

 
  

     
 

 
  

     
 

 
  

     
 
  

     