//Given an integer array nums and an integer k, return the k most frequent elements within the array.
// You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //Initializing the map to store the numbers and their frequencies
  let numFrequencyMap = new Map();

  //Iterating through the array of nums
  for (i = 0; i < nums.length; i++) {
    //The current number we are looking at from the array
    let currNumber = nums[i];
    //Checking to see if the current number exists in the map or not already
    if (numFrequencyMap.has(currNumber)) {
      //if it does, add a counter val to key pair
      numFrequencyMap.set(currNumber, numFrequencyMap.get(currNumber) + 1);
    } else {
      //if it does not exist yet, create key with value 1(seen 1 time so far)
      numFrequencyMap.set(currNumber, 1);
    }
  }

  //Turning the map into an array and sorting it in decending order based on frequency
  let sortedArray = Array.from(numFrequencyMap).sort((a, b) => b[1] - a[1]);
  let topKNums = [];
  for (let i = 0; i < k; i++) {
    topKNums.push(sortedArray[i][0]);
  }
  return topKNums;
};

console.log(topKFrequent([3, 3, 2, 5, 3, 5, 1], 2)); // [3, 5]
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3], 3)); // [1,2,3]
