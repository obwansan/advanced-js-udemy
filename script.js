// An object literal
var john = {
  name: 'john',
  yearOfBirth: 1990,
  job: 'Dustman'
}

//console.log(john);
//console.dir(john);

// An object function constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

// Create a new object (new instance) using the Person object function constructor
var bobs = new Person('bobs', 1977, 'Web Developer');
var gollum = new Person('smeagol', 1327, 'murderer');

// Add a function (method) to the Person object's prototype property
Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

// Can call the calculateAge method even though it's not on the object itself
console.log(bobs.calculateAge());
console.log(gollum.calculateAge());

// Can add a property to the object's prototype property (but not common to do so)
Person.prototype.lastName = 'Smith';

console.log(bobs.lastName);
console.log(gollum.lastName);


