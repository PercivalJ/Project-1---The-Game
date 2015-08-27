
//////////////////////////////////// VARIABLES

// Blue = 1
// Green = 2 
// Yellow = 4 
// Orange = 4 
// Red = 5

// TASKS: 
// 1. Finish all event listeners (code block line 28 + )
// 2. make sure each conditional results in push to playSequence


var blueSound = new Audio("sounds/IWU.mp3");
var greenSound = new Audio("sounds/IWU.mp3");
var yellowSound = new Audio("sounds/IWU.mp3");
var orangeSound = new Audio("sounds/IWU.mp3");
var redSound = new Audio("sounds/IWU.mp3");

var genSequence = [];
var playSequence = [];
var playTwoSequence = []; 

var challengeLength = 5; 
// var yellowSound = new Audio("sounds/.mp3")
// var orangeSound = new Audio("sounds/.mp3")
// var redSound = new Audio("sounds/.mp3")



//////////////////////////////////// EVENT LISTENERS



$(window).on("keydown", function(event) {
     console.log(event.which);
     if(event.which === 54 ){ //Blue
     //trigger mp3 audio
         console.log("Blue");
         blueSound.pause();         // audio stop
         blueSound.currentTime = 0;
         blueSound.play();
         $('.col1dark').addClass('col1light');
         playSequence.push(1)
         winCheck();

    } else if(event.which === 55 ){ //Green
     //trigger mp3 audio
         console.log("Green");
         greenSound.pause();
         greenSound.currentTime = 0;
         greenSound.play();
         playSequence.push(2);
         winCheck();
    } else if(event.which === 56 ) { // Yellow
         console.log("Yellow"); 
         yellowSound.pause();
         yellowSound.currentTime = 0;
         yellowSound.play();
         playSequence.push(3);
         winCheck(); 

    } else if(event.which === 57 ) { // Orange
         console.log("Orange"); 
         orangeSound.pause();
         orangeSound.currentTime = 0;
         orangeSound.play();
         playSequence.push(4);
         winCheck(); 

    } else if(event.which === 48 ) { // Red
         console.log("Red"); 
         redSound.pause();
         redSound.currentTime = 0;
         redSound.play();
         playSequence.push(5);
         winCheck(); 

    }
  
        
}); 

  
var $title = $('h1')[0]

// $title[0].mousedown(gameStart)

function gameStart () {
     for (var i = 0 ; i < challengeLength ; i++) { //for loop to 10
          var randNum = Math.floor(Math.random() * 5) + 1; //generates random whole integer between 1 and 5
          genSequence.push(randNum);  //each time push into array 
     }
     console.log(genSequence);

}   


function playSequence () {
          playSequence.push(challengeLength)
          
     }     

     // body...

function winCheck() {
     console.log(genSequence)
     console.log(playSequence)
//      if (playSequence !== genSequence) {
//           //gameOver() funciton
//      } else if 
}



// player sequence: gets pushed into empty aray


// checkSequence  

// if (playerSequence !-- randomSequence) {
//      gameOver 
// } else {  
//      update scoreBoard
//      change turn 
// }



// display sequence

//function displaySequence () { 
     // if gameStart 
    
     // flash lights and sound. // blueSound.Play();

// scoreBoard



// endGame function


// Menu State 
// Game Logo
//      Buttons
//           1st player     2nd player
//      Player vs. AI



// Solo gamePlay
// transition from Menu state

//      AI initiates note. adds a note every time a player is able to replay note. 

// AI Notes played:  [ c d e f g…... ] add 1 note 1 by 1 as each note is matched. 

// Player Notes: [ c d e f g……. ] 

// if  player notes    c d e f g !=== AI notes   
//      return false. 
//           alert GameOver. 


// 2 player:
// Battle mode will have a point limit of 5. 1st player creates pattern w/maximum of  8 notes.  

// Player 1 [ g f e c d ]
// Player 2 [ g f e c d]

// If player 2  !=== player 1 notes 
//      return false
//       Player 1 gets point. 


// Game Over
//      Player 1 , Player 2  === 5



// function takeTurn(){

//  if (turn%2==0){
//      console.log("player 1 turn”);
// } else {
//      console.log(“Player 2 turn”);{

// }



// On Click, tap, 1-5:

// When we click , we want the Box (element) to change to a brighter color and play its assigned note. 


// Score
// Every correct note will yield 1 point. ++ .


// Play again. restart button 
// End game, clear score back to Home screen. 


// document.querySelectorAll(“keys”).addEventListener(“on click”,”tap,)






