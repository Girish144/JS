function isPalindrome(str) {
    str = str.toLowerCase().replaceAll(" ", "");

    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
        return "Palindrome";
    } else {
        return "Not a Palindrome";
    }
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("Race Car"));
console.log(isPalindrome("hoh"));