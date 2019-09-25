//Ready the doucment
$(document).ready(function () {

    // create the trivia questions, choices, and answers.
    var triviaQuestions = [
        {
            question: "What Running Back is the all-time leading rusher at the Univsersity of Georgia?",
            choices: ["Nick Chubb", "Todd Gurley", "Herschel Walker", "Garrison Hurst", "Rodney Hampton"],
            correctAnswer: "Herschel Walker"
        },

        {
            question: "What team did the University of Georgia beat to win a National Championship in 1980?",
            choices: ["Southern California (USC)", "Notre Dame", "Alabama", "Clemson", "Miami"],
            correctAnswer: "Notre Dame"
        },

        {
            question: "On September 7th 2019, the University of Georgia named the field at Sanford Stadium after what Hall of Fame coach?",
            choices: ["Wally Butts", "Ray Goff", "Mark Richt", "Vince Dooley", "Kirby Smart"],
            correctAnswer: "Vince Dooley"
        },

        {
            question: "What is the name of the English Bulldog mascot for the University of Georgia?",
            choices: ["UGA", "Hairy Dawg", "Bevo", "Mike", "Cam"],
            correctAnswer: "UGA"
        },

        {
            question: "What 3 time All American Defensive Lineman, was drafted in the first round of the NFL Draft in 2005?",
            choices: ["Richard Seymour", "Jonathan Sullivan", "Charles Grant", "Jarvus Jones", "David Pollack"],
            correctAnswer: "David Pollack"
        }
    ];

    // Create an array of the gif images to be displayed when user answers a question correctly
    var winImages = [
        "https://media.giphy.com/media/XbCXthwx7BrxKszKzn/giphy.gif",
        "https://media.giphy.com/media/6FFDLMaq1WD7O/giphy.gif",
        "https://media.giphy.com/media/xUOxeV6Xe1YtXKNJkY/giphy.gif",
        "https://media.giphy.com/media/3GnhXD3vhlB2pnQG3n/giphy.gif"
    ];

    // Create an array of the gif images to be displayed when the user answers a question incorrectly
    var lostImages = [
        "https://media.giphy.com/media/GDnomdqpSHlIs/giphy.gif",
        "https://media.giphy.com/media/13ywPzPJdfhmBG/giphy.gif",
        "https://media.giphy.com/media/wsab8KPaE3ojlWOaKh/giphy.gif",
        "https://media.giphy.com/media/9Hc5GrcxM452M/giphy.gif"
    ];

    // Create the varibles needed for the game
    var corrAnswers = 0;
    var missedAnswers = 0;
    var timeCounter = 30;
    var curQuestion = 0;
    var time;


    displayQuestion();

    // Create function to move to next question
    function nextQuest() {

        var isQuestfinished = (triviaQuestions.length - 1) === curQuestion;

        if (isQuestfinished) {
            results();
        } else {
            curQuestion++;
            displayQuestion();
        }
    }

    // Create function to make the timer countdown.
    function countDown() {
        timeCounter--;

        $("#timer").html(`Time left: ${timeCounter}`);

        if (timeCounter === 0) {
            clearInterval(time);
            missedAnswers++;
            loadMessage("incorrect");
            setInterval(nextQuest, 3000);
        }
    }
    // Display the questions
    function displayQuestion() {
        timeCounter = 30;
        time = setInterval(countDown, 1000)

        var quest = triviaQuestions[curQuestion].question;
        var guess = triviaQuestions[curQuestion].choices;

        $("#app").html(`
            <h4>${quest}</h4>
            ${displayChoices(guess)}`);
        $("#timer").html(`Time left: ${timeCounter}`);

    }

    // Display choices/guesses
    function displayChoices(guess) {
        result = "";

        for (var i = 0; i < guess.length; i++) {
            result += `<p class="choice" data-guess="${guess[i]}">${guess[i]}</p>`;
        }

        return result;

    }

    // Create a on click function to handle correct or incorrect answers

    $(document).on("click", ".choice", function () {
        clearInterval(time);
        var userChoice = $(this).attr("data-guess");
        var corAnswer = triviaQuestions[curQuestion].correctAnswer;
        if (userChoice === corAnswer) {
            corrAnswers++;
            loadMessage("correct")
            setTimeout(nextQuest, 3000);
        } else {
            missedAnswers++
            loadMessage("incorrect")
            setTimeout(nextQuest, 3000);
        };
    });

    // Create a function to display the results of the game
    function results() {
        var result = `
        <h4>You correctly answered ${corrAnswers} questions</h4>
        <h4>You missed ${missedAnswers} questions</h4>
        <h4>The total number of question is ${triviaQuestions.length}</h4>
        <button id="reset-button">Reset Game</button>
        `;

        $("#app").html(result);
    };

    // create an on click function that resets the game
    $(document).on("click", "#reset-button", function(){
        curQuestion = 0;
        corrAnswers = 0;
        missedAnswers = 0;
        timeCounter = 30;
        time ;

        displayQuestion();
    });

    // Create function to select gif image from array
    function selImage(image){
        var ranImage = Math.floor(Math.random() * image.length);
        var selectedImage = image[ranImage];
        return selectedImage;
    };

    // Display a message after each question informing the user if they answered the question correctly of incorrectly
    function loadMessage(answer){
        var correctAnswer = triviaQuestions[curQuestion].correctAnswer;

        if (answer === "correct"){
            $("#app").html(`
                <p class="load-message">You anwsered the question correctly!!</p>
                <p class="load-message">The correct answer is ${correctAnswer}</p>
                <img id="funny-images" src="${selImage(winImages)}" />
            `)
        } else {
            $("#app").html(`
                <p class="load-message">You answered the question incorrectly!!</p>
                <p class="load-message">The correct answer is ${correctAnswer}</p>
                <img id="funny-images" src="${selImage(lostImages)}"/>
            `)
        }
            
    };

});
