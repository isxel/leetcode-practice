//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
};

console.log(isAnagram("cat", "tac"));
console.log(isAnagram("rat", "car"));
