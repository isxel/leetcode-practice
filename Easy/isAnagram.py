# Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
# Example 1:
# Input: s = "racecar", t = "carrace"
# Output: true
# Example 2:
# Input: s = "jar", t = "jam"
# Output: false

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return("".join(sorted(s)) == "".join(sorted(t)))

# Same version Laid out  with easier to follow logic
# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         sorted_s = "".join(sorted(s))
#         sorted_t = "".join(sorted(t))
#         if(sorted_s == sorted_t):
#             return True
#         return False

solution = Solution()
print(solution.isAnagram("racecar", "carrace"))
print(solution.isAnagram("jar", "jam"))
        