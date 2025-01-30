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
  //Sorting S which requires splitting and joining back together
  let sortedS = s.split("").sort().join("");
  //Sorting T which requires the same
  let sortedT = t.split("").sort().join("");

  //Onec sorted these anagrams should either match or not
  return sortedS === sortedT;
};

console.log(isAnagram("cat", "tac"));
console.log(isAnagram("rat", "car"));
