
// TASK 2: Variables and Area Calculation
let radius = 7;
const pi = 3.14;
let area = radius * radius * pi;
console.log("Area:", area);


// TASK 3: Template Literals & String Interpolation
let name = "bob";
let age = 24;

console.log(typeof(name));  // string
console.log(typeof(age));   // number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
console.log(`I was born in ${2020 - age}`);


// =============================================
// TASK 4.1: Type Coercion with ==
// =============================================
console.log('1' == 1);          // true
console.log(1 == true);         // true
console.log("false" == false);  // false
console.log("false" == true);   // false

if ("false") {
  console.log("Hello false!"); // prints because "false" is truthy
}


// =============================================
// TASK 4.2: Hard Comparison with ===
// =============================================
console.log('1' === 1);        // false
console.log(1 === true);       // false
console.log("true" === true);  // false


// =============================================
// TASK 4.3: FizzBuzz (1 to 50)
// =============================================
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}


// =============================================
// TASK 5: Callback Functions
// =============================================
function happyPrint(string) {
  console.log("😀: " + string);
}

function sadPrint(string) {
  console.log("😢: " + string);
}

function add(a, b, callback) {
  let ans = a + b;
  callback(ans);
}

add(5, 10, happyPrint);
add(11, 12, sadPrint);


// =============================================
// TASK 5.1: Array Methods
// =============================================
let arr = [-5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5)); // true

arr.push(11);
console.log(arr); // [..., 11]

let lastItem = arr.pop();
console.log(lastItem, arr);

arr.unshift(22);
console.log(arr);

let firstItem = arr.shift();
console.log(firstItem, arr);

let reversed = arr.reverse();
console.log(reversed);
console.log(arr.join('-'));


// =============================================
// TASK 5.2: Callback-Based Array Methods
// =============================================
let arr2 = [12, 33, 4, 5, -4, 8, 19, 25];

function double(num) {
  return num * 2;
}
let doubledArr = arr2.map(double);
console.log("Doubled:", doubledArr);

function isOdd(num) {
  return num % 2 !== 0;
}
let odds = arr2.filter(isOdd);
console.log("Odds:", odds);

function has5Factor(ele) {
  return ele % 5 === 0;
}
let hasFiveFactor = arr2.some(has5Factor);
console.log("Has multiple of 5:", hasFiveFactor);

function intCompare(a, b) {
  return a - b;
}
let ascending = arr2.sort(intCompare);
console.log("Sorted ascending:", ascending);


//BMI Calculator

function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    sum += calcBMI(person.weight, person.height);
  }
  return sum / people.length;
}

let people = [
  createPerson("Sally", 1.60, 60),
  createPerson("Ben", 1.75, 81),
  createPerson("Shelly", 1.65, 55)
];

console.log("Average BMI:", avgBMI(people));


let bob = {
  fname: "bob", lname: "smith", age: 18, height: 6,
  transcript: [
    { course: 'INFO 1603', grades: [89, 34, 67] },
    { course: 'INFO 1601', grades: [89, 34, 67] }
  ]
};

let sally = {
  fname: "sally", lname: "smith", age: 18, height: 6,
  transcript: [
    { course: 'INFO 1601', grades: [100, 89, 79] }
  ]
};

let paul = {
  fname: "paul", lname: "smith", age: 18, height: 6,
  transcript: [
    { course: 'INFO 1600', grades: [89, 34, 67] }
  ]
};

const students = [bob, sally, paul];

// Returns average grade for a student in a given course, or -1 if not found
function getAverageGrade(student, course) {
  for (let entry of student.transcript) {
    if (entry.course === course) {
      let sum = 0;
      for (let grade of entry.grades) {
        sum += grade;
      }
      return sum / entry.grades.length;
    }
  }
  return -1;
}

// Returns a specific assignment mark for a student in a course, or -1 if not found
function getAssignmentMark(student, course, num) {
  for (let entry of student.transcript) {
    if (entry.course === course) {
      return entry.grades[num];
    }
  }
  return -1;
}

// Returns average mark for a specific assignment across all students in a course
function averageAssessment(students, courseName, assignment) {
  let total = 0;
  let count = 0;
  for (let student of students) {
    let mark = getAssignmentMark(student, courseName, assignment);
    if (mark !== -1) {
      total += mark;
      count++;
    }
  }
  return count === 0 ? -1 : total / count;
}

// Test the functions
console.log("Bob's avg in INFO 1601:", getAverageGrade(bob, 'INFO 1601'));   // 63.33
console.log("Sally's assignment 0 in INFO 1601:", getAssignmentMark(sally, 'INFO 1601', 0)); // 100
console.log("Average for assignment 0 in INFO 1601:", averageAssessment(students, 'INFO 1601', 0)); // 94.5