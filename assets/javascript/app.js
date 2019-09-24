// Ready the document
$(document).ready(function () {
    // create the trivia questions, choices, and answers.
    var questions = [
        {
            question: "What Running Back is the all-time leading rusher at the Univsersity of Georgia?",
            choices: ["Nick Chubb", "Todd Gurley", "Herschel Walker", "Garrison Hurst", "Rodney Hampton"],
            correctAnswer: "Herschel Walker"
        },

        {
            question: "What team did the University of Georgia beat to win a National Championship in 1980?",
            choices: ["Southern California (USC)", "Notre Dame", "Alabama", "Clemson", "Miami"],
            correctAnswer: "Notre Dame"
        }

    {
            question: "On September 7th 2019, the University of Georgia named the field at Sanford Stadium after what Hall of Fame coach?",
            choices: ["Wally Butts", "Ray Goff", "Mark Richt", "Vince Dooley", "Kirby Smart"],
            correctAnswer: "Vince Dooley"
        }

    {
            question: "What is the name of the English Bulldog mascot for the University of Georgia?",
            choices: ["UGA", "Hairy Dawg", "Bevo", "Mike", "Cam"],
            correctAnswer: "UGA"
        }

    {
            question: "What 3 time All American Defensive Lineman, was drafted in the first round of the NFL Draft in 2005?",
            choices: ["Richard Seymour", "Jonathan Sullivan", "Charles Grant", "Jarvus Jones", "David Pollack"],
            correctAnswer: "David Pollack"
        }
    ];

    // Create the varibles needed for the game
    // varible to hold the correct answers
    var corrAnswers = 0;
    // varible to hold the missed answers
    var missedAnswers = 0;
    // varible to hold the time to answer a question
    var timeCounter = 30;
    // varible to hold the current question
    var curQuestion = 0;
    var timer = ;
    
        // Display question and answers

        function displayQuestion(array) {
            for (var i = 0; i < array.length; i++) {
                
            }
        };
            // Restart game

            // Create game logic

        });