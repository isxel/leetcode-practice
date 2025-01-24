//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numsMap = new Map();

  for (i = 0; i < nums.length; i++) {
    let complimentaryNum = target - nums[i];
    if (numsMap.has(complimentaryNum)) {
      return [numsMap.get(complimentaryNum), i];
    }
    numsMap.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
