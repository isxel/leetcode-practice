//Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

/**
 * Checks if the given array contains any duplicates using a brute force approach.
 *
 * @param {number[]} nums - The array of numbers to check for duplicates.
 * @returns {boolean} - Returns true if duplicates are found, otherwise false.
 */

var containsDuplicate = function (nums) {
  console.log(nums);
  let setOfNums = new Set();

  for (i = 0; i < nums.length; i++) {
    console.log("current i:", i, "which is:", nums[i]);
    if (setOfNums.has(nums[i])) {
      console.log("Duplicate Found");
      return true;
    }
    setOfNums.add(nums[i]);
  }
  console.log("No Duplicates Were Found");

  return false;
};

console.log(containsDuplicate([1, 2, 3]));
console.log(containsDuplicate([1, 2, 1]));
console.log(
  containsDuplicate([1, 2, 4, 5, 7, 8, 9, 10, 12, 16, 23, 654, 23, 25, 1])
);
