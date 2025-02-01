
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern =[];
var userClickedPattern = [];
var started = false;
var level = 1;
var x =0;

$(document).keypress(function(){
    if (started === false){
        nextSequence();
        started =true;
    }
});


function nextSequence(){
    
    $("h1").text("Level "+ level);
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;

    var buttonid = "#" + randomChosenColour;
    $(buttonid).fadeIn(300).fadeOut(300).fadeIn(300);
  
    playSound(randomChosenColour);       
}


$(".btn").click(handler);




function handler(){
        var userChosenColour = this.id; 
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        check(x);
     
        
        
       
        
        
};

function check(num){
    if (gamePattern[num] === userClickedPattern[num] && gamePattern.length === userClickedPattern.length){
        userClickedPattern = [];

        setTimeout(function(){
            x=0;
            nextSequence();
        },1000);
        
           
    } 
    else if (gamePattern[num] === userClickedPattern[num] && gamePattern.length != userClickedPattern.length ){
        x=x+1;
      
    }
    else {
    
        playSound("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
} 
function startOver(){
    gamePattern =[];
    userClickedPattern = [];
    started = false;
    level = 1;
}



function playSound(name){
    
        var audio = new Audio("./sounds/" + name + ".mp3");
        audio.play();
   

}

function animatePress(currentColour){
    
    $("#"+ currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColour).removeClass("pressed");
    }, 100);
    
    
}
   