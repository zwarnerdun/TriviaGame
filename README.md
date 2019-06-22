# TriviaGame
[https://zwarnerdun.github.io/TriviaGame/]


Problem: The timer would not function and countdown correctly, it just stayed at 60 seconds.


Solution: Added the function countdown timer with intervalId = setInterval(decrement, 1000).


Technical Approach: I had to go back to my previous class to look over class activities that had to do with constrcuting a timer in javascript. I had realized that the function countdownTimer(){ intervalId = setInterval(decrement, 1000)} was missing which ultimately makes the timer coutdown by every second. 
