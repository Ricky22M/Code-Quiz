# Code-Quiz
![Picture of Code Quiz project](./assets/Images/Code-Quiz.png)
Learning to use JavaScript can be a difficult process for some, while for others it comes naturally to them. To improve upon my skills as a coder, I decided to create a small coding quiz that tests the user with questions relating to coding. These test questions range from HTML questions to JavaScript questions to generally known knowledge of coding.

## Objectives
To compete this project, I give myself a specific acceptance criteria that this project should be capable of doing.

Step 1, when the user clicks the start button, then the timer starts a countdown as well as providing the user with a question.
Step 2, when the user answers a question, then the user will be provided with another question.
Step 3, when the user answers a question incorrectly, then the some time is subtracted from the countdown timer.
Step 4, when the user answers all the questions or the timer ends its countdown at 0, then the user is presented with a "end of quiz" screen.
Step 5, when the game is over, the user is able to save their initials and their score.

## Step 1
![This is a picture of code which completes step one](./assets/Images/Step-1-code.png)
![This is a picture of the webpage completing step one](./assets/Images/Step-1-Webpage.png)
In both of these images we are able to see that the code that is being provided helps the user to start the timer and the quiz with a question.

## Step 2
![Displays code that completes step two](./assets/Images/Step-2-Code.png)
In the first image, we can see that the code is checking if the input the user put in is correct, but after that code at the bottom of the function we see that the questions are being provided after every answer the user provides.
![Displays image of step twp code working on the webpage](./assets/Images/Step-2-Webpage(1%3A2).png)
![Displays image of step twp code working on the webpage](./assets/Images/Step-2-Webpage(2%3A2).png)
The last two images just show how it is being shown through the HTML.

## Step 3
![Displays code for step three](./assets/Images/Step-3-Code.png)
In the previous step we saw the function that was being used to anaylze the user input. Now that we take a closer look into that function, in the image above, shows that every time a user gets an incorrect answer then 10 seconds will be subtracted from their timer.

## Step 4
![Displays code showing what happens when the finishes all the questions](./assets/Images/Step-4-Code(1%3A2).png)
In this image we see that when the user finishes all of the questions provided by the developer, then the user will be brought to the endQuiz function which just sends the user to the "end quiz screen" section on the HTML. Also this if statement that is being used to send the user to the "end quiz screen" section of the HTML, is being used in the same function as of the image in step 2.
![Displays code showing what happens to the user when the timer reaches 0 seconds](./assets/Images/Step-4-Code(2%3A2).png)
In this image we see that the user will be sent to the "end quiz screen" once the timer ends.

## Step 5
![Displays image of the "end quiz screen"](./assets/Images/Step-5-Webpage(1%3A2).png)
In this image we see how the "end quiz screen" looks like through the HTML. This section of the HTML shows the user their final score as well as giving the user the option to save their score with their initials.
![Displays image of the webpage showing the highscores of each user from the user's local storage](./assets/Images/Step-5-Webpage(2%3A2).png)
Lastly, in this image the user is able to see where their scores are being ranking at, which is at the "highscore screen" section from the HTML, and the top three scores will be displayed in the rankings.