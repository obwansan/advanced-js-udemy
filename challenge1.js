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
*/

// function constructor called Question
var Question = function(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

// method to log the question and its answers to the console
Question.prototype.logQuestionAndAnswers = function() {
    console.log(this.question);
    // Have to assign it to a variable or doesn't work (why?)
    var answers = this.answers;
    answers.forEach(function(el) {
      console.log(answers.indexOf(el) + ': ' + el);
    });
};

var languageQuestion = 'What is the best programming language?';
var languageAnswers = ['ruby', 'python', 'javascript'];
var correctLanguageAnswer = languageAnswers[2];

var instructorQuestion = 'What is the name of your instructor?';
var instructorAnswers = ['john', 'jonas', 'james'];
var correctInstructorAnswer = instructorAnswers[1];

var coursesQuestion = 'Which is the best online web development course platform?';
var coursesAnswers = ['pluralsight', 'teamtreehouse', 'udemy'];
var correctCourseAnswer = 'udemy';

// Create a couple of questions (question objects) using the constructor
var bestProgLang = new Question(languageQuestion, languageAnswers, correctLanguageAnswer);
var jsCourseInstructor = new Question(instructorQuestion, instructorAnswers, correctInstructorAnswer);
var bestCoursePlatform = new Question(coursesQuestion, coursesAnswers, correctCourseAnswer);

// Store them inside an array
var questions = [bestProgLang, jsCourseInstructor, bestCoursePlatform];

// log a random question and its answers to the console (using an IIFE)
// function logQuestionAndAnswers () {
//   var rndNum = Math.floor(Math.random() * 3);
//   var randQuestion = questions[rndNum];
//   randQuestion.logQuestionAndAnswers();
//   };
//
// logQuestionAndAnswers();

// Refactor to an IIFE
(function () {
  var rndNum = Math.floor(Math.random() * 3);
  var randQuestion = questions[rndNum];
  randQuestion.logQuestionAndAnswers();
})();
