function isPalindrome(value) {
    const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, "");
    return normalized === [...normalized].reverse().join("");
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
