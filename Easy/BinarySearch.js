/* Given an array of integers nums which is sorted in
 ascending order, and an integer target, write a function 
 to search target in nums. If target exists, then return its index. 
 Otherwise, return -1. */

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //Initialize left pointer to be first index of array
  let left = 0;
  //Right pointer will be final value of array
  let right = nums.length - 1;

  //As long as they are still shirinking
  while (left < right) {
    //Initializing middle value
    let mid = left + Math.floor((right - left + 1) / 2);

    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return nums[left] == target ? left : -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
