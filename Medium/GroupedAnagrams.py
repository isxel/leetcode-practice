class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        #We will utilize a dictionary data structure in order to hold key value pairs
        anagram_dict = dict()
        #At each iteration we will translate the word into its sorted self
        currWord = ""
        
        #iterating through the list of strings
        for word in strs:
            #Logic for sorting the current word
            currWord = "".join(sorted(word))
            #If the current word exists in the dict, add it into that pair
            if currWord in anagram_dict:
                anagram_dict[currWord].append(word)           
            #If it does not exist, create a key-value pair
            else: 
                anagram_dict[currWord] = [word]
                
        #We will return the values(words) that share anagrams
        return(list(anagram_dict.values()))