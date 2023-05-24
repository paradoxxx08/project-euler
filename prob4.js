const isPalindrome = function(palindrome) {
    let palindromeToString = palindrome.toString().split('');
    for (let index = 0; index <= Math.floor(palindromeToString.length); index++) {
        if (palindromeToString[index] !== palindromeToString[(palindromeToString.length - (index + 1))]) {
            return false;
        }
      }
    return true;
}
let answer = 1;
for (let a = 1; a < 1000; a++) {
  for (let b = 1; b < 1000; b++) {
    let palindrome = a * b;
    if (isPalindrome(palindrome)) {
      if (palindrome > answer) {
        answer = palindrome;
      }
    }
  }
}
console.log(answer);