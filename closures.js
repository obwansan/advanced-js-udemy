/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/

// Rewrite using the power of closures
function interviewQuestion(job) {
  
  return function(name) {
    if (job === 'designer') {
        console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
        console.log('What subject do you teach, ' + name + '?');
    } else {
        console.log('Hello ' + name + ', what do you do?');
    }
  }
}
  
// The inner function - designerQuestion() - has access to the argument (job)
// passed into the outer function - interviewQuestion() - even after the outer 
// function has been called and dropped off the call stack.
var designerQuestion = interviewQuestion('designer');
designerQuestion('bob');
interviewQuestion('designer')('bob');