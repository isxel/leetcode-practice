//Given an integer array nums, return an array
//output where output[i] is the product of all
// the elements of nums except nums[i].
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;

  const prefix = new Array(n).fill(1);
  const suffix = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
