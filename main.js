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






// Event Listeners 

var blueSound = new Audio("sounds/IWU.mp3")
var greenSound = new Audio("sounds/Leads.mp3")
// var yellowSound = new audio("sounds/.mp3")
// var orangeSound = new audio("sounds/.mp3")
// var redSound = new audio("sounds/.mp3")


$(window).on("keydown", function(event) {
     console.log(event.which);
     if(event.which === 54 ){
     //trigger mp3 audio
         console.log("Blue");
         blueSound.pause();
         blueSound.currentTime = 0;
         blueSound.play();
    }
     else if(event.which === 55 ){
     //trigger mp3 audio
         console.log("Green");
         greenSound.pause();
         greenSound.currentTime = 0;
         greenSound.play();
    }
// else if(event.which === ){
//      //trigger mp3 audio
//      console.log("Green");
//      greensound.play();

// }
        
}); 



// //Lights function]
// function lights (element, times, speed, pad) {
     
// }
   




// game start:


// random sequence. gets pushed into array. (10 DIGITS)
   
function gameStart () {
        ///generate 10 random numbers
        return Math.floor(Math.random() * 5) + 1;
        //each time push into array
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


// 66
// scoreBoard



// endGame function




