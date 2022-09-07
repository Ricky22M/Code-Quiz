/* Declared Variables */

// Variables declared for the introduction page
var intro = document.querySelector("#intro");
var beginButton = document.querySelector("#beginButton");
var introPage = document.querySelector("#introPage");

// Variables declared for the question page
var questionPage = document.querySelector("#questionPage");
var questionPrompt = document.querySelector("#questionPrompt");

// Variables declared for the button options
var answeredButtons = document.querySelectorAll(".options");
var optionButtonOne = document.querySelector("#optionButtonOne");
var optionButtonTwo = document.querySelector("#optionButtonTwo");
var optionButtonThree = document.querySelector("#optionButtonThree");
var optionButtonFour = document.querySelector("#optionButtonFour");

// Variables declared for the user answers
var bottomLine = document.querySelector("#bottomLine");
var scoreBoard = document.querySelector("#submitResults");
var userScore = document.querySelector("#userScore");
var userInitials = document.querySelector("#initials");
    
// Variables declared for the end quiz page
var submitButton = document.querySelector("#submitButton");
var highScorePage = document.querySelector("#highScorePage");
var scoreTracker = document.querySelector("#scoreTracker");
var scores = document.querySelector("#scores");
var endQuiz = document.querySelector("#endQuiz");
    
// Variables declared for the high score page
var backButton = document.querySelector("#backButton");
var clearButton = document.querySelector("#clearButton"); 

// Defined all question prompts
var questionPromptsList = [
    {
        question: "What is commonly used data types that DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "c"
    },
    {
        question: "What is the condition in an if / else statement is enclosed within?",
        options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "b"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "d"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "c"
    },
    {
        question: "A very useful tool uesd during development and debugging for printing content to the debugger is:",
        options: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
        answer: "d"
    },
    {
        question: "What is the correct abbreviation of CSS?",
        options: ["1. Cool Super Styling", "2. Code styling Sheets", "3. Cascading Style Sheets", "4. Color styled sheet"],
        answer: "c"
    },
    {
        question: "What variable is used during the creation of a for loop?",
        options: ["1. i", "2. f", "3. l", "4. o"],
        answer: "a"
    },
    {
        question: "What language is used for coding?",
        options: ["1. HTML", "2. CSS", "3. JavaScript", "4. All of the above"],
        answer: "d"
    },
    {
        question: "While using HTML code, what is the code used to make a break or a blank line in the HTML document?",
        options: ["1. <title></title>", "2. <br>", "3. <main></main>", "4. <body></body>"],
        answer: "b"
    }, 
    {
        question: "What value does a boolean equal to?",
        options: ["1. true / false", "2. variables", "3. strings", "4. numbers"],
        answer: "a"
    }
];

var timeRemaining = document.getElementById("timePlacement");
   
var secondsRemaining = 60;
var questionOrder = 0;
var finalScore = 0;
var questionAmount = 1;

/* Declared Functions */

// After clicking the start button, then the timer will start its count down
function timeLoss() {        
    var timeInterval = setInterval(function() {
        secondsRemaining--;
        timeRemaining.textContent = "Time: " + secondsRemaining + "s";
        // When the timer ends, then the user will have their quiz session end
        if (secondsRemaining <= 0){
            clearInterval(timeInterval);
            timeRemaining.textContent = "Time is up!"; 
            endQuiz.textContent = "Time is up!";
            quizDone(); 
        } else  if(questionAmount >= questionPromptsList.length +1) {
            clearInterval(timeInterval);
            quizDone();
        } 
    }, 1000);
}
    
// Once the user clicks on the begin button, then the quiz will begin.
function beginQuiz() {
    introPage.style.display = "none";
    questionPage.style.display = "block";
    submitResults.style.display = "none";
    questionOrder = 0 
    timeLoss();
    showQuestionPrompt(questionOrder);
}

// This code will show the user the question prompts and question answer options.
function showQuestionPrompt (n) {
    questionPrompt.textContent = questionPromptsList[n].question;
    optionButtonOne.textContent = questionPromptsList[n].options[0];
    optionButtonTwo.textContent = questionPromptsList[n].options[1];
    optionButtonThree.textContent = questionPromptsList[n].options[2];
    optionButtonFour.textContent = questionPromptsList[n].options[3];
    questionOrder = n;
    // console.log(showQuestionPrompt);
}

// This code will display the result of the user choice and give a response back to the user showing whether they got the correct or wrong answer below their question options.
function analyzeAnswer(event) {
    event.preventDefault();
    bottomLine.style.display = "block";
    setTimeout(function () {
    bottomLine.style.display = 'none';
    }, 1000);
    
    // Used to analyze the question prompt answers
    if (questionPromptsList[questionOrder].answer == event.target.value) {
        bottomLine.textContent = "Correct!"; 
        finalScore = finalScore + 1;
    } else {
        secondsRemaining = secondsRemaining - 10;
        bottomLine.textContent = "Wrong! The correct answer is " + questionPromptsList[questionOrder].answer + " .";
    }
    // Leads the user to the next question after answering previous question prompt
    if (questionOrder < questionPromptsList.length -1 ) {
        showQuestionPrompt(questionOrder +1);
    } else {
        quizDone();
    }
    questionAmount++;
}

// If the user is able to finish answering all of the question prompts, then this code will run and end the quiz session.
// If the timer ends and the user is in the process of answering the question prompts, then this code will run and will end the quiz session.
function quizDone() {    
    questionPage.style.display = "none";
    scoreBoard.style.display = "block";
    console.log(scoreBoard);
    // This shows the user their final score
    userScore.textContent = "Your final score is :" + finalScore ;
    // clearInterval(timeInterval06-Server-Side-APIs);  
    timeRemaining.style.display = "none"; 
};
    
// This will grab local storage keys and values if they are in local storage, if not then a new array will be used to storage the new keys and values from the user
function endScore() {
    var presentList = localStorage.getItem("Scores");
    if (presentList !== null ){
        newList = JSON.parse(presentList);
        return newList;
    } else {
        newList = [];
    }
    return newList;
};

// applies score to the score board
function showScore() {
    scoreTracker.innerHTML = "";
    scoreTracker.style.display ="block";
    var topScores = filterRankings();   
    // This code will run by  showing only the top three scores at the scoreboard section 
    var topThree = topScores.slice(0,3);
    for (var i = 0; i < topThree.length; i++) {
        var item = topThree[i];
        // This will apply the scores on the scoreboard
        var li = document.createElement("li");
        li.textContent = item.user + " - " + item.score;
        li.setAttribute("data-index", i);
        scoreTracker.appendChild(li);
    }
};
    
// This function will filter the scores and rankings on the highscore scoreboard
function filterRankings() {
    var unfilteredList = endScore();
    if (endScore == null ){
        return;
    } else{
        unfilteredList.sort(function(a,b){
            return b.score - a.score;
        })
        return unfilteredList;
    }
};
    
// These functions will allow the user to save their initials and scores into their local storage
function addNewKey (n) {
    var addedNewKeyList = endScore();
    addedNewKeyList.push(n);
    localStorage.setItem("Scores", JSON.stringify(addedNewKeyList));
};
    
function savedUserScore () {
    var localUserScore = {
        user: userInitials.value,
        score: finalScore
    }
    addNewKey(localUserScore);
    showScore();
}

/* Declared Event Listeners */

// When beginButton is clicked, the quiz will begin for the user
beginButton.addEventListener("click", beginQuiz);
    
// When the user clicks on any of the answer options button, then the user will go onto the next question prompt
answeredButtons.forEach(function(click){    
    click.addEventListener("click", analyzeAnswer);
});

// When this button s clicked, it will save the information from the user input and go to next page
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    scoreBoard.style.display = "none";
    introPage.style.display = "none";
    highScorePage.style.display = "block";
    questionPage.style.display = "none";
    savedUserScore();
});
    
// When clicked, the code will anaylze the scoreboard and see if the rankings are correct
scores.addEventListener("click", function(event) {
    event.preventDefault();
    scoreBoard.style.display = "none";
    introPage.style.display = "none";
    highScorePage.style.display = "block";
    questionPage.style.display = "none";
    showScore();
});
    
// This button will send the user back to the start of the webpage
backButton.addEventListener("click",function(event){
    event.preventDefault();
    scoreBoard.style.display = "none";
    introPage.style.display = "block";
    highScorePage.style.display = "none";
    questionPage.style.display = "none";
    location.reload();
});
    
// After this button is clicked, the code will run and will delete local storage keys and values while also deleting the text displayed in the scoreboard from local storage
clearButton.addEventListener("click",function(event) {
    event.preventDefault();
    localStorage.clear();
    showScore();
});