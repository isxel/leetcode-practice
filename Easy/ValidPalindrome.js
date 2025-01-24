//Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a word that is the same when reversed.

// Example 1:
// Input: s = "racecar"
// Output: true

// Example 2:
// Input: s = "hello"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //We are creating a string that removes any special characters/spaces
  //Anything that is not a-z and or 0-9
  let strippedPhrase = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  //Returning boolean based on if this stripped character is the same reversed
  return strippedPhrase === strippedPhrase.split("").reverse().join("");
};

console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("hello")); //false
console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
