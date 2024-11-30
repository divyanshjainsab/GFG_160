/*
Anagram

Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, act and tac are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets.

Note: You can assume both the strings s1 & s2 are non-empty.

Examples :

Input: s1 = "geeks", s2 = "kseeg"
Output: true
Explanation: Both the string have same characters with same frequency. So, they are anagrams.

Input: s1 = "allergy", s2 = "allergic"
Output: false
Explanation: Characters in both the strings are not same, so they are not anagrams.

Input: s1 = "g", s2 = "g"
Output: true
Explanation: Character in both the strings are same, so they are anagrams.

Constraints:
1 ≤ s1.size(), s2.size() ≤ 10^5

*/

class Solution {
  // Function is to check whether two strings are anagram of each other or not.
  areAnagrams(s1, s2) {
    // code here
    if (s1.length !== s2.length) return false;
    const obj1 = {},
      obj2 = {};
    for (let i of s1) obj1[i] = 1 + (obj1[i] ?? 0);
    for (let i of s2) obj2[i] = 1 + (obj2[i] ?? 0);
    for (let i in obj1) if (obj1[i] !== obj2[i]) return false;
    return true;
  }
}

// Date Added -> 30/11/24
