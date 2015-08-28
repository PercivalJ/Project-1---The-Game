
//////////////////////////////////// VARIABLES

var blueSound = new Audio("sounds/wiHarder1.mp3");
var greenSound = new Audio("sounds/miBetter2.mp3");
var yellowSound = new Audio("sounds/diFasterMuStrong3.mp3");
var orangeSound = new Audio("sounds/mtEverhourAfter4.mp3");
var redSound = new Audio("sounds/oWorkiNO5.mp3");
var soundsArray = [blueSound, greenSound, yellowSound, orangeSound, redSound]

var genSequence = [];
var playerSequence = [];
var playTwoSequence = [];
var turn = 0; 

var challengeLength = 5; 
var compPlaySpeed = 1666

var $col1 = $('#col1')     //variables for changing opacity  
var $col2 = $('#col2') 
var $col3 = $('#col3') 
var $col4 = $('#col4')  
var $col5 = $('#col5')


$( window ).load( gameStart );
//////////////////////////////////// EVENT LISTENERS


$(window).on("keydown", function(event) {
     console.log(event.which);
    if ( playerSequence.length < genSequence.length ) {
         if(event.which === 54 ){ //Blue
         //trigger mp3 audio
             console.log("Blue");
             changeColors($col1) 
             setTimeout(playSound(blueSound),1175);
              
             playerSequence.push(1)
             winCheck();

        } else if(event.which === 55 ){ //Green
         //trigger mp3 audio
             console.log("Green");
             changeColors($col2)
             setTimeout(playSound(greenSound),1097);
             greenSound.play();
             playerSequence.push(2);
             winCheck();

        } else if(event.which === 56 ) { // Yellow
             console.log("Yellow");
             changeColors($col3) 
             setTimeout(playSound(yellowSound),2011);
             playerSequence.push(3);
             winCheck(); 

        } else if(event.which === 57 ) { // Orange
             console.log("Orange"); 
             changeColors($col4)
             setTimeout(playSound(orangeSound),2063);
             playerSequence.push(4);
             winCheck(); 

        } else if(event.which === 48 ) { // Red
             console.log("Red");
             changeColors($col5) 
             setTimeout(playSound(redSound),1985);
             playerSequence.push(5);
             winCheck(); 
        }
    }
}); 

  
$('#content').on("mousedown", gameStart)



function gameStart () {
    console.log( genSequence)
    genSequence = [];
     for (var i = 0 ; i < challengeLength ; i++) { //for loop to 10
          var randNum = Math.floor(Math.random() * 5) + 1; //generates random whole integer between 1 and 5
          genSequence.push(randNum);  //each time push into array 
     }

    // var sequenceArray = gameStart();
    var intervalI = 0
    var myInterval = setInterval(function(){
    if(intervalI < genSequence.length){
        genSequencePlay( genSequence[intervalI] );
        console.log(genSequence[intervalI]);
    } else {
        clearInterval(myInterval);
    }

    intervalI ++;
    }, compPlaySpeed);

} 


function genSequencePlay (i) {


    if( i === 1 ){ //Blue
     //trigger mp3 audio
        console.log("Blue");
        changeColors($col1)
        playSound(blueSound);
        // $('#col1dark').addClass('col1light');
        // function (){ $('#col1dark').removeClass('col1light'); },3000)

    } else if(i === 2 ){ //Green
     //trigger mp3 audio
        console.log("Green");
        changeColors($col2)
        playSound(greenSound);

    } else if(i === 3 ) { // Yellow
        console.log("Yellow"); 
        changeColors($col3)
        playSound(yellowSound);
  
    } else if(i === 4 ) { // Orange
        console.log("Orange");
        changeColors($col4) 
        playSound(orangeSound);
     
    } else if(i === 5 ) { // Red
        console.log("Red");
        changeColors($col5) 
        playSound(redSound);
    }
}

function playSound(clip){              //plays the sound that corresponds to the pad chosen 
    clip.currentTime=0;                //resets audio position to the start of the clip
    clip.play();                      //play the sound
}


function changeColors ( columns ) {          //changes opacity and reverts to original opacity after .5 second
    columns.css('opacity','1');   
    setTimeout(
        function () {
            columns.css('opacity','0.5')
    }, 1400 );
}



function winCheck() {    
     console.log(genSequence)
     console.log(playerSequence)
     for (var i = 0 ; i <= challengeLength ; i++){
        if (playerSequence[i] !== genSequence[i]) {
         console.log("you lose");
         return false;
         
         } else {
         console.log("good job");



         }

    }
}

$(document).ready(function(){           //reset function. reloads page
    $('#reset').click(function(){
        location.reload();
    });
});


// function test() {
//     sequenceInterval = setInterval(function(){genSequencePlay(1)}, 500);
// }


// function playerSequence () {
//     playerSequence.push(challengeLength)
// }     

   

    //setTimeout is to allow 10seconds of time for the player to play the computers sequence
    // setTimeout( winCheck, 10000);
    // checkWinner();







// Blue = 1
// Green = 2 
// Yellow = 4 
// Orange = 4 
// Red = 5

// TASKS: 
// 1. Finish all event listeners (code block line 28 + )
// 2. make sure each conditional results in push to playerSequence



// player sequence: gets pushed into empty aray


// checkSequence  

// if (playerSequence !-- randomSequence) {
//      gameOver 
// } else {  
//      update scoreBoard
//      change turn 
// }



// display sequence

//function displayerSequence () { 
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






