/////////////////////////////
// CODING CHALLENGE
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here,
array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers
(each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number
of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure
that all your code is private and doesn't interfere with the other programmers code
(Hint: we learned a special technique to do exactly that).

<<How to do this? Wrap all the code in an IIFE (at least if it was all procedural). This is the main
purpose of IIFEs>>
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends
(Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game
if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct,
add 1 point to the score (Hint: I'm going to use the power of closures for this, but you
don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// Wrap it all in an IIFE to "make sure that all your code is private and doesn't interfere
// with other programmers code"
(function () {

// A function constructor is a function that is used to create objects with
// the same properties / methods (passed in as arguments).
var Question = function(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

// Method to log the question and its answers to the console
// [A method added on an object's prototype property (added via the protoype chain)
// is not a method on every object created using the function constructor. It is
// just available to each such object. Benefits of this?
Question.prototype.logQuestionAndAnswers = function() {
    console.log(this.question);
    // Have to assign this.answers to a variable or forEach doesn't work (why?)
    var answers = this.answers;
    answers.forEach(function(el) {
      console.log(answers.indexOf(el) + ': ' + el);
    });
};

// method to check the user's answers
// score works because the checkAnswer method of the random question object
// (randQuestionObj) which is called in playGame() has access to the score
// variable in the global scope.
Question.prototype.checkAnswer = function(userAnswer) {
    if (userAnswer == this.correctAnswer) {
      score += 1;
      console.log('Correct answer!');
      console.log('Your current score is: ' + score);
      console.log('-----------------------------------------');
    } else {
      console.log('Wrong answer. Try again');
      console.log('Your current score is: ' + score);
      console.log('-----------------------------------------');
    }
};

var languageQuestion = 'What is the best programming language?';
var languageAnswers = ['Ruby', 'Python', 'JavaScript'];
var correctLanguageAnswer = 2;

var instructorQuestion = 'What is the name of your instructor?';
var instructorAnswers = ['John', 'Jonas', 'James'];
var correctInstructorAnswer = 1;

var coursesQuestion = 'Which is the best online web development course platform?';
var coursesAnswers = ['Pluralsight', 'Teamtreehouse', 'Udemy'];
var correctCourseAnswer = 2;

// Create some questions (question objects) using the constructor
var bestProgLang = new Question(languageQuestion, languageAnswers, correctLanguageAnswer);
var jsCourseInstructor = new Question(instructorQuestion, instructorAnswers, correctInstructorAnswer);
var bestCoursePlatform = new Question(coursesQuestion, coursesAnswers, correctCourseAnswer);

// Store the question objects inside an array
var questions = [bestProgLang, jsCourseInstructor, bestCoursePlatform];
var score = 0;

// Get and return a random question object
function getRandQuestionObj() {
  var rndNum = Math.floor(Math.random() * questions.length);
  return questions[rndNum];
}

function playGame() {
  do {
    var randQuestionObj = getRandQuestionObj();
    randQuestionObj.logQuestionAndAnswers();
    var userAnswer = prompt('Enter the number of the correct answer');
    var correctAnswer = randQuestionObj.correctAnswer;
    randQuestionObj.checkAnswer(userAnswer, correctAnswer);
  } while (userAnswer !== 'exit')
}

playGame();

})();
