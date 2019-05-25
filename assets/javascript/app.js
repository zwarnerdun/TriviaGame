$(document).ready(function() {
    //hide timer, questions, and results
    $('#timer').hide();
    $('#counter').hide();
    $('#questionnaire').hide();
    $('#results').hide();
    $('#DoneBtn').hide();
    
    // Declare Variables
    var number = 120; //number of seconds
    var intervalId;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    // to show questions
    function showQuestions(){
        $('#questionnaire').show();
        // $('#results').show();
        $('#DoneBtn').show();
    }
    
    // timing for countdown
    function countdownTimer(){
        intervalId = setInterval(decrement, 120000);
    }
    // $('#timer').show();
    // $('#counter').show();
   
    // decrement timer
    function decrement(){
        number--;
        $('#timer').html(" " + number + " " + "seconds");
        if (number ===1){
            $('#timer').html(" " + number + " " + "seconds");
        }
        else if(number ===0) {
            stop();
            hide();
            results();
        }
        number();

    }
    
    //to clear timer
    function stop() {
        clearInterval(intervalId);
    }
    
    //to hide text after questions are answered or time out
    function hide(){
        $('#timer').hide();
        $('#questionnaire').hide();
        // $('#DoneBtn').hide();
    }
    
    // display results of game
    function results(){
        $('#results').show();
        unanswered = (8-(correct+incorrect));
        $('#correct score').text("Correct Answers:" + " " + correct); 
        $('#incorrect score').text("Incorrect Answers:" + " " + incorrect); 
        $('#unanswered score').text("Unanswered:" + " " + unanswered); 
        document.getElementById("#correct score").innerHTML = " " + correct;
        document.getElementById("#incorrect score").innerHTML = " " + incorrect;
        document.getElementById("#unanswered score").innerHTML = " " + unanswered;
    }
    
    //Clicking Start Button
    $('#game-start').on('click', function(){
        $('#game-start').hide();
        showQuestions();
        countdownTimer();
        $('#image').hide();
    }); 
    
    //Clicking Done Button
    $('#game-done').on('click', function(){
        $('#game-start').hide();
        $('#DoneBtn').hide();
        $('#counter').hide();
        $('#timer').hide();
        hide();
        results();
    });
    
    //Clicking Radio button
    $('input[type=radio]').on ('change', function(){
    correct = $('input[value=correct]:checked').length;
    incorrect = $('input[value=wrong]:checked').length;
    unanswered = (8-(correct+incorrect));
    });
    

});