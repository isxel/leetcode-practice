//Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

//An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupedAnagrams = function (strs) {
  let groupedMap = new Map(); //Initializing the hashMap we are going to be returning

  for (i = 0; i < strs.length; i++) {
    //Creating a sorted version of the current string
    let currWord = strs[i].split("").sort().join("");
    console.log("CurrWord (sorted): ", currWord);

    //If the sorted word is already a key in the map, add the original word to its array
    if (groupedMap.has(currWord)) {
      groupedMap.get(currWord).push(strs[i]);
    } else {
      //If not, create a new array with the current word
      groupedMap.set(currWord, [strs[i]]);
    }
    console.log("Grouped Map: ", groupedMap);
  }

  //Convert the map's values into an array of arrays
  let groupedAnagrams = Array.from(groupedMap.values());
  console.log("Final Grouped Anagrams: ", groupedAnagrams);

  return groupedAnagrams;
};

groupedAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
