function largestWithLoop(numbers) {
    if (numbers.length === 0) return null;
    let largest = numbers[0];
    for (const number of numbers) if (number > largest) largest = number;
    return largest;
}
const largestWithReduce = (numbers) => numbers.length === 0 ? null : numbers.reduce((largest, number) => number > largest ? number : largest);
const values = [-8, 4, 17, 2, 11];
console.log(largestWithLoop(values));
console.log(largestWithReduce(values));
