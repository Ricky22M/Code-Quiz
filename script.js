/* Declared variables */

// Variables declared for the introduction page
var intro = document.querySelector("#intro");
var beginButton = document.querySelector("#beginButton");
var introPage = document.querySelector("#introPage");

// Variables declared for the question page
var questionPage = document.querySelector("#questionPage");
var questionPrompt = document.querySelector("#questionPrompt");

// Variables declared for the button options
var answeredButtons = document.querySelectorAll("buttonOption");
var optionButtonOne = document.querySelector("#optionButtonOne");
var optionButtonTwo = document.querySelector("#optionButtonTwo");
var optionButtonThree = document.querySelector("#optionButtonThree");
var optionButtonFour = document.querySelector("#optionButtonFour");

// Variables declared for the user answers
var BottomLine = document.querySelector("#bottomLine");
var scoreBoard = document.querySelector("#submitResults");
var userScore = document.querySelector("#userScore");
var userInitial = document.querySelector("#initials");
    
// Variables declared for the end quiz page
var submitButton = document.querySelector("#submitButton");
var highScorePage = document.querySelector("#highScorePage");
var scoreTracker = document.querySelector("#scoreTracker");
var scores = document.querySelector("#scores");
var endQuiz = document.querySelector("#endQuiz");
    
// Variables declared for the high score page
var backButtonn = document.querySelector("#backButton");
var clearButton = document.querySelector("#clearButton"); 

//Defined all question prompts
var questionPromptsList = [
    {
        question: "What is commonly used data types that DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3"
    },
    {
        question: "What is the condition in an if / else statement is enclosed within?",
        options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "2"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "c"
    },
    {
        question: "A very useful tool uesd during development and debugging for printing content to the debugger is:",
        options: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
        answer: "4"
    },
    {
        question: "What is the correct abbreviation of CSS?",
        options: ["1. Cool Super Styling", "2. Code styling Sheets", "3. Cascading Style Sheets", "4. Color styled sheet"],
        answer: "3"
    },
    {
        question: "What variable is used during the creation of a for loop?",
        options: ["1. i", "2. f", "3. l", "4. o"],
        answer: "1"
    },
    {
        question: "What language is used for coding?",
        options: ["1. HTML", "2. CSS", "3. JavaScript", "4. All of the above"],
        answer: "4"
    },
    {
        question: "While using HTML code, what is the code used to make a break or a blank line in the HTML document?",
        options: ["1. <title></title>", "2. <br>", "3. <main></main>", "4. <body></body>"],
        answer: "2"
    }, {
        question: "What value does a boolean equal to?",
        options: ["1. true / false", "2. variables", "3. strings", "4. numbers"],
        answer: "1"
    },
];

var timeRemaining = document.getElementById("timer");
   
var secondsRemaining = 60;
var questionOrder = 0;
var finalScore = 0;
var questionAmount = 1;