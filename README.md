# Week 4: JavaScript Fundamentals

Repository: `iyf-s12-week-04-zubedahassan01-creator`

## What I built

- `main.js`: Lesson 7 and 8 practice for variables, types, operators, functions, control flow, arrays, objects, arrays of objects, JSON, a calculator, and a grade tracker.
- `calculator.js`: standalone calculator supporting `+`, `-`, `*`, `/`, `%`, and `**`, including a zero-division message.
- `grade-tracker.js`: student records, averages, top performer, struggling students, letter grades, and report cards.
- `daily-challenges/`: FizzBuzz, string reversal, largest number, duplicate removal, and palindrome checker.
- `index.html`: page that loads `main.js` and includes the required viewport setting.

## Run it

Use `node main.js`, `node calculator.js`, or `node grade-tracker.js` from this folder. To view `main.js` in a browser, open `index.html` with Live Server and check the developer console.

## Lessons learned

- `===` checks both type and value, so `5 === "5"` is false; this avoids JavaScript silently converting values during comparisons.
- `const` prevents rebinding a variable, while `let` allows a value to be reassigned.
- Returning a result keeps functions reusable; `console.log` belongs at the call site when I want to inspect a result.
- `map`, `filter`, `find`, and `reduce` transform, select, locate, and combine array data.
- JSON is text: `JSON.parse` turns it into JavaScript data and `JSON.stringify` turns it back into text.

## Submission checklist

- [x] Correct repository name is recorded above.
- [x] `.gitignore` is present.
- [x] Required JavaScript practice and project files are present.
- [x] Personal age, student status, and favorite color are included in `main.js`.
- [ ] Make at least five meaningful commits across the week, beginning with `.gitignore` before the first commit.
- [x] Push this folder to a public GitHub repository and verify its link in a private/incognito window.
