# Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
# Example 1:
# Input: nums = [1, 2, 3, 3]
# Output: true
# Example 2:
# Input: nums = [1, 2, 3, 4]
# Output: false

#Time complexity is O(1) with the use of sets

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        duplicateFreeSet = set(nums)
        if(len(nums) == len(duplicateFreeSet)):
            return False
        return True
    
#Can also be written as:
# class Solution:
#     def hasDuplicate(self, nums: list) -> bool:
#         return len(nums) != len(set(nums))

         
         
solution = Solution()
print(solution.hasDuplicate([1, 2, 3, 3]))
print(solution.hasDuplicate([1, 2, 3, 4]))