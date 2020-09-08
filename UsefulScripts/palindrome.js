const palindrome = (str) => str.toLowerCase().split("").reverse().join("") == str.toLowerCase();

console.log(palindrome("yael"));