// Week 4: Lessons 7 and 8. Run with `node main.js` or open index.html.

// Task 7.1: variables and types
const learnerHandle = "zubedahassan01-creator";
let ageInYears = 45;
const isStudent = true;
const favoriteColors = ["gray"];
const today = new Date();
console.log("Learner handle:", learnerHandle);
console.log("Age:", ageInYears);
console.log("Student:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Today:", today.toDateString());
console.log("Types:", typeof learnerHandle, typeof 21, typeof true);
let practiceScore = 100;
practiceScore = 150;
const circlePi = 3.14159;
console.log("Updated score and PI:", practiceScore, circlePi);

// Task 7.2: operators and strings
const firstValue = 14;
const secondValue = 4;
console.log("Arithmetic:", firstValue + secondValue, firstValue - secondValue, firstValue * secondValue,
    firstValue / secondValue, firstValue % secondValue, firstValue ** secondValue);
let counter = 0;
counter++;
counter--;
const givenName = "zubedahassan01-creator";
const familyName = "";
const fullName = `${givenName} ${familyName}`;
console.log(fullName.toUpperCase(), fullName.toLowerCase(), givenName.charAt(0), fullName.includes(givenName));
console.log(`Hello, ${givenName}! ${givenName} has ${givenName.length} letters.`);
console.log("Comparisons:", 8 > 5, 8 < 5, 5 === 5, 5 !== 3);
console.log("Logical:", true && true, true || false, !true);
if (typeof ageInYears === "number" && ageInYears > 0) {
    console.log("Age in days (approx.):", ageInYears * 365.25);
    console.log("Age in hours (approx.):", ageInYears * 365.25 * 24);
    console.log("Year turning 100:", today.getFullYear() + (100 - ageInYears));
}

// Task 7.3: declaration, expression and arrow functions
function greet(name) { return `Hello, ${name}!`; }
const add = function (a, b) { return a + b; };
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Cannot divide by zero" : a / b;
const calculateArea = (width, height) => width * height;
const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const isEven = (number) => number % 2 === 0;
const getInitials = (name) => name.trim().split(/\s+/).map((part) => part[0].toUpperCase()).join("");
const reverseString = (value) => [...value].reverse().join("");
function greetWithDefault(name = "there", greeting = "Hello") { return `${greeting}, ${name}!`; }
const calculateTip = (bill, tipPercent = 15) => bill * tipPercent / 100;
console.log(greet("Zubeda"), add(4, 6), multiply(4, 6), divide(8, 2), calculateArea(5, 3));
console.log(celsiusToFahrenheit(20), isEven(14), getInitials("Zubeda Hassan"), reverseString("code"));
console.log(greetWithDefault(), greetWithDefault("Zubeda"), greetWithDefault("Zubeda", "Welcome"));
console.log("Tip:", calculateTip(2000));

// Task 7.4: branches and loops
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}
console.log("Grade/day:", getGrade(84), getDayName(1));
for (let number = 1; number <= 100; number++) console.log(number);
for (let number = 1; number <= 50; number++) if (number % 2 === 0) console.log("Even:", number);
let whileCount = 0;
while (whileCount < 5) { console.log("While:", whileCount); whileCount++; }
for (const color of ["teal", "gold", "plum"]) console.log("Color:", color);
for (let row = 1; row <= 5; row++) console.log("*".repeat(row));

// Calculator mini-project
function subtract(a, b) { return a - b; }
function calculatorMultiply(a, b) { return a * b; }
function calculatorDivide(a, b) { return b === 0 ? "Cannot divide by zero" : a / b; }
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return calculatorMultiply(num1, num2);
        case "/": return calculatorDivide(num1, num2);
        case "%": return num2 === 0 ? "Cannot divide by zero" : num1 % num2;
        case "**": return num1 ** num2;
        default: return "Invalid operator";
    }
}
console.log("Calculator:", calculate(10, "+", 5), calculate(10, "-", 5), calculate(10, "*", 5),
    calculate(10, "/", 5), calculate(10, "/", 0), calculate(10, "%", 3), calculate(2, "**", 3));

// Task 8.1: arrays and array methods
const fruitBasket = ["pear", "mango", "kiwi"];
console.log("Array basics:", fruitBasket[0], fruitBasket.length);
fruitBasket.push("papaya"); fruitBasket.unshift("lime"); fruitBasket.pop(); fruitBasket.shift();
const values = [3, -2, 7, 12, 4];
values.forEach((value) => console.log("Double via forEach:", value * 2));
const doubledValues = values.map((value) => value * 2);
const nonNegativeValues = values.filter((value) => value >= 0);
const firstOverTen = values.find((value) => value > 10);
const product = values.reduce((total, value) => total * value, 1);
console.log("Array tasks:", doubledValues, nonNegativeValues, firstOverTen, product, values.includes(7));

// Task 8.2: objects, methods and iteration
const learnerProfile = {
    firstName: givenName, lastName: familyName, age: ageInYears, isStudent,
    hobbies: ["reading", "walking", "learning JavaScript"],
    location: { city: "Nairobi", country: "Kenya" }
};
console.log("Profile:", learnerProfile.firstName, learnerProfile["lastName"], learnerProfile.location.city);
learnerProfile.phone = ""; // Add a phone number if you want to include it.
delete learnerProfile.phone;
const arithmetic = {
    add: function (a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    multiply: (a, b) => a * b
};
console.log("Object methods:", arithmetic.add(5, 3), arithmetic.subtract(5, 3), arithmetic.multiply(5, 3));
const subjectScores = { algebra: 91, writing: 86, biology: 89 };
console.log("Object keys/values/entries:", Object.keys(subjectScores), Object.values(subjectScores), Object.entries(subjectScores));
for (const [subject, score] of Object.entries(subjectScores)) console.log(`${subject}: ${score}`);

// Task 8.3: array of objects (original sample data)
const classmates = [
    { name: "Amani", age: 21, grade: 85, major: "Computing" },
    { name: "Nia", age: 20, grade: 72, major: "Mathematics" },
    { name: "Kito", age: 23, grade: 90, major: "Computing" },
    { name: "Zuri", age: 21, grade: 88, major: "Physics" },
    { name: "Taji", age: 22, grade: 95, major: "Computing" }
];
const classmateNames = classmates.map((student) => student.name);
const highAchievers = classmates.filter((student) => student.grade > 80);
const namedClassmate = classmates.find((student) => student.name === "Kito");
const classAverage = classmates.reduce((total, student) => total + student.grade, 0) / classmates.length;
const computingMajors = classmates.filter((student) => student.major === "Computing");
const rankedClassmates = [...classmates].sort((a, b) => b.grade - a.grade);
const hasTopStudent = classmates.some((student) => student.grade > 90);
const allPassing = classmates.every((student) => student.grade >= 60);
console.log("Class data:", classmateNames, highAchievers, namedClassmate, classAverage, computingMajors, rankedClassmates, hasTopStudent, allPassing);

// Task 8.4: JSON parse, transform and stringify
const postsJson = '[{"id":1,"title":"Garden notes","likes":12,"published":true},{"id":2,"title":"Sketch ideas","likes":0,"published":false},{"id":3,"title":"JavaScript recap","likes":30,"published":true}]';
const posts = JSON.parse(postsJson);
const publishedPosts = posts.filter((post) => post.published).sort((a, b) => b.likes - a.likes);
const postSummaries = publishedPosts.map((post) => `${post.title} (${post.likes} likes)`);
const publishedPostsJson = JSON.stringify(publishedPosts, null, 2);
console.log("JSON exercise:", postSummaries, publishedPostsJson);
try {
    console.log("Parsed grades:", JSON.parse('{"grades":{"algebra":88,"writing":92}}').grades.algebra);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}

// Grade tracker mini-project
const gradeTracker = {
    students: [],
    addStudent(name, grades) {
        if (this.getStudent(name) !== null) return "A student with that name already exists";
        this.students.push({ name, grades: { ...grades } });
        return this.getStudent(name);
    },
    getStudent(name) { return this.students.find((student) => student.name === name) ?? null; },
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (student === null) return null;
        const scores = Object.values(student.grades);
        return scores.length === 0 ? null : scores.reduce((sum, score) => sum + score, 0) / scores.length;
    },
    getSubjectAverage(subject) {
        const scores = this.students.map((student) => student.grades[subject]).filter((score) => typeof score === "number");
        return scores.length === 0 ? null : scores.reduce((sum, score) => sum + score, 0) / scores.length;
    },
    getTopStudent() {
        if (this.students.length === 0) return null;
        return this.students.reduce((top, student) => this.getStudentAverage(student.name) > this.getStudentAverage(top.name) ? student : top);
    },
    getStrugglingStudents() { return this.students.filter((student) => this.getStudentAverage(student.name) < 70); },
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (student === null) return "Student not found";
        const gradeLines = Object.entries(student.grades).map(([subject, score]) => `${subject}: ${score} (${this.getLetterGrade(score)})`);
        const average = this.getStudentAverage(name);
        return [`Report card: ${student.name}`, ...gradeLines, `Average: ${average.toFixed(2)} (${this.getLetterGrade(average)})`].join("\n");
    }
};
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Nia", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });
console.log("Tracker:", gradeTracker.getStudentAverage("Alice").toFixed(2), gradeTracker.getSubjectAverage("math").toFixed(2));
console.log(gradeTracker.getTopStudent().name, gradeTracker.getStrugglingStudents().map((student) => student.name));
console.log(gradeTracker.generateReportCard("Alice"));
