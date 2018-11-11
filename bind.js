var years = [1990, 1965, 1937, 2005, 1998];

// This is the equivalent of running .foreach or .map on an array
// i.e. apply a function to each element of the array.
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

// Limit can vary per country
function isLegalAdult(limit, el) {
      return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

// isLegalAdult has two parameters so need to bind the preset one
// i.e. the one that is always compared to each array element.
// 'this' here refers to the function isLegalAdult (it's scope context).
// The first parameter is always the this keyword scope. If it was a method
// it would be the name of the object.
var isAdultJapan = arrayCalc(ages, isLegalAdult.bind(this, 20));
console.log(isAdultJapan);

var isAdultMedieval = arrayCalc(ages, isLegalAdult.bind(this, 13));
console.log(isAdultMedieval);
