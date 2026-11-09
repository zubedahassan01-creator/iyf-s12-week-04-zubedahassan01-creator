function reverseWithLoop(value) {
    let reversed = "";
    for (const character of value) reversed = character + reversed;
    return reversed;
}
const reverseWithMethods = (value) => [...value].reverse().join("");
console.log(reverseWithLoop("weekend academy"));
console.log(reverseWithMethods("JavaScript"));
