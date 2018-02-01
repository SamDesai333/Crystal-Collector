var myScore = 0;
var wins = 0;
var losses = 0;

// var resetFunction = function(){
//     var myScore = 0;
//     var wins = 0;
//     var losses = 0;
//     var targetScore = Math.floor(Math.random() * ((120-19)+1) + 19);
//     var crystal1 = Math.floor(Math.random() * ((12-1)+1) + 1);
//     var crystal2 = Math.floor(Math.random() * ((12-1)+1) + 1);
//     var crystal3 = Math.floor(Math.random() * ((12-1)+1) + 1);
//     var crystal4 = Math.floor(Math.random() * ((12-1)+1) + 1);
//     $("#randomNum").text(targetScore);
//     $("#wins").text(wins);
//     $("#losses").text(losses);
//     $("#yourScore").text(myScore);
// }

var startGame= function(){
    //assign random number to your target score
    var targetScore = Math.floor(Math.random() * ((120-19)+1) + 19);
    //assign random numbers to crystals
    var crystal1 = Math.floor(Math.random() * ((12-1)+1) + 1);
    var crystal2 = Math.floor(Math.random() * ((12-1)+1) + 1);
    var crystal3 = Math.floor(Math.random() * ((12-1)+1) + 1);
    var crystal4 = Math.floor(Math.random() * ((12-1)+1) + 1);
    //print the random target number to the DOM
    $("#randomNum").text(targetScore);   
    
    winFunction = function(){
        alert ("You Win!");
        wins++;
        $("#wins").text(wins);
        startGame();
        
    }
    lossFunction = function(){
        alert ("You Lose!");
        losses++;
        $("#losses").text(losses);
        startGame();
        
    }  

    
    //adding on clicks to each crystal and setting whether the user wins or not.
    $("#crystal1").on("click",function(){
        myScore = myScore + crystal1;
        $("#yourScore").text(myScore);
        if (myScore === targetScore){
            winFunction();
            
        }
        else if(myScore > targetScore){
            lossFunction();
            
        }
    })
    $("#crystal2").on("click",function(){
        myScore = myScore + crystal2;
        $("#yourScore").text(myScore);
        if (myScore === targetScore){
            winFunction();
            
        }
        else if(myScore > targetScore){
            lossFunction();
            
        }
    })
    $("#crystal3").on("click",function(){
        myScore = myScore + crystal3;
        $("#yourScore").text(myScore);
        if (myScore === targetScore){
            winFunction();
            
        }
        else if(myScore > targetScore){
            lossFunction();
            
        }
    })
    $("#crystal4").on("click",function(){
        myScore = myScore + crystal4;
        $("#yourScore").text(myScore);
        if (myScore === targetScore){
            winFunction();
            
        }
        else if(myScore > targetScore){
            lossFunction();
            
        }
    })
    //reset function so that 
    // var reset = function(){
    //     var myScore = 0;
    // }

    // winFunction = function(){
    //     alert ("You Win!");
    //     wins++;
    //     $("#wins").text(wins);
    //     reset();
    // }
    // lossFunction = function(){
    //     alert ("You Lose!");
    //     losses++;
    //     $("#losses").text(losses);
    //     reset();
    // }  

    
}
startGame();
