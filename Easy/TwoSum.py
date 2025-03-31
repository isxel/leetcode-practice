# Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
# You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
# Return the answer with the smaller index first.
# Example 1:
# Input: 
# nums = [3,4,5,6], target = 7
# Output: [0,1]
# Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
# Example 2:
# Input: nums = [4,5,6], target = 10
# Output: [0,2]

class Solution:
    def twoSum(self, nums: list, target: int) -> list:
        differenceDict = {} #Initializing the dictionary

        for i in range(len(nums)): #Looping through nums
            diff = target - nums[i] #Calculating difference
            if diff in differenceDict: #This means we've seen it already in the dictionary
                return [differenceDict[diff], i] #Returning the pair of indecies that equal the target
            else:
                differenceDict[nums[i]] = i #Otherwise, store current number in dictionary with its index
            
            
solution = Solution()
print(solution.twoSum([4, 5, 6], 10))