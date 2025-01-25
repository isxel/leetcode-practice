//Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Notice: This is a simple encoding and decoding problem. It is not a compression algorithm. The encoded string is the original strings concatenated with a special character between them. The special character is not in the original strings.

// Example 1:
// Input: strs = ["hello","world"]
// Output: "hello|world"

// Example 2:
// Input: strs = ["practice","makes","perfect","coding"]
// Output: "practice|makes|perfect|coding"

/**
 * @param {string[]} strs
 */
var encode = function (strs) {
  //We will return a completed string with everything put together
  let encodedString = "";

  //Iterate through every string in the array
  for (i = 0; i < strs.length; i++) {
    encodedString += strs[i] + "/";
  }
  return encodedString;
};

/**
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  let decodedStrings = [];
  let currString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "/") {
      decodedStrings.push(currString);
      currString = "";
    } else {
      currString += s[i];
    }
  }
  return decodedStrings;
};

const originalStrings = ["This", "Should", "All", "Be", "Together"];
const encoded = encode(originalStrings); // Call encode
console.log("Encoded: ", encoded); // Print the encoded string

const decoded = decode(encoded); // Pass the encoded string into decode
console.log("Decoded: ", decoded); // Print the decoded array
