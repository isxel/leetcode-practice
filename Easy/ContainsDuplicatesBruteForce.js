//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
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
var containsDuplicateBruteForce = function (nums) {
  if (nums.length === 0) {
    console.log("Array Is Empty");
    return false;
  }

  let containsDuplicate = false;
  console.log(nums);

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        containsDuplicate = true;
        break;
      }
    }
  }
  console.log("Array: ", containsDuplicate);
  return containsDuplicate;
};

containsDuplicateBruteForce([1, 2, 3, 4, 5]);
containsDuplicateBruteForce([1, 2, 3, 4, 1]);
containsDuplicateBruteForce([]);
containsDuplicateBruteForce([1]);
