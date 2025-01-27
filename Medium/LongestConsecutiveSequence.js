//Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
//A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

//Must be written in O(n) time complexity.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  //Create a set from the nums array to ensure we only have unique values
  let numsSet = new Set(nums);

  //This will keep track of the longest sequence
  let longestSequence = 0;

  //Iterate through the set we made
  for (let num of numsSet) {
    //We are checking to see if this would be the start of a consecutive sequence
    //If there is a number that exists one value less then it is not the start of a sequence.
    //If no number exists before then it is the start of a sequence
    if (!numsSet.has(nums - 1)) {
      //we initialize the current number and start the sequence
      let currentNum = num;
      let currentSequence = 1;

      //If we find a value that is one greater then we make that the current number and incriment one
      while (numsSet.has(currentNum + 1)) {
        currentNum += 1;
        currentSequence += 1;
      }

      //Update the longest sequence if needed, compares the current sequence to the longest so far, replaces if it is the new largest.
      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }
  return longestSequence;
};

console.log(longestConsecutive([100, 4, 200, 1, 2, 3]));
