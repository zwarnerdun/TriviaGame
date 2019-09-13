# TriviaGame
In this assignment, You'll create a Trivia game using JavaScript for the logic and jQuery to manipulate HTML. 

# Getting Started 
Instructions - Multiple choice fashion trivia
1. Players have 60 seconds to answer 8 questions.
2. The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
3. Don't pick more than one answer per question.
4. Let's see how much you know about fashion.......HAVE FUN!!!!

# Deployment
Try the it out here: https://zwarnerdun.github.io/TriviaGame/

# Overview
Problem: The timer would not function and countdown correctly, it just stayed at 60 seconds.

Solution: Added the function countdown timer with intervalId = setInterval(decrement, 1000).

Technical Approach: I had to go back to my previous class to look over class activities that had to do with constrcuting a timer in javascript. I had realized that the function countdownTimer(){ intervalId = setInterval(decrement, 1000)} was missing which ultimately makes the timer coutdown by every second. 

# Built With
* HTML5
* CSS
* JavaScript
* JQuery
