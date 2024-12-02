/*
Search Pattern (KMP-Algorithm)

Given two strings, one is a text string txt and the other is a pattern string pat. The task is to print the indexes of all the occurrences of the pattern string in the text string. Use 0-based indexing while returning the indices. 
Note: Return an empty list in case of no occurrences of pattern.

Examples :

Input: txt = "abcab", pat = "ab"
Output: [0, 3]
Explanation: The string "ab" occurs twice in txt, one starts at index 0 and the other at index 3. 

Input: txt = "abesdu", pat = "edu"
Output: []
Explanation: There's no substring "edu" present in txt.

Constraints:
1 ≤ txt.size() ≤ 10^6
1 ≤ pat.size() < txt.size()
Both the strings consist of lowercase English alphabets.
*/

// My Approach : Not sure about kmp algo but, also work in this way
function search(pat, txt) {
  if (pat.length < 1 || txt.length < 1) return [];

  const res = [];
  for (let i = 0; i < txt.length - 1; i++) {
    let found = true;
    for (let j = 0; j < pat.length; j++) {
      if (txt[j + i] !== pat[j]) break;
    }
    if (found) res.push(i);
  }
  return res;
}
// however this code works but having a time complexity of O(n*m) which is huge

// better approach : As we are backtracking in the above algorithim, instead of a complete backup, we can find repeatation of prefix in the and assigning them indices

function search(pat, txt) {
  const lps = lpsArray(pat);
  const res = [];
  let i = 0,
    j = 0;
  while (i < txt.length) {
    if (txt[i] === pat[j]) {
      i++;
      j++;
      if (j === pat.length) {
        res.push(i - j); // j === pat.length
        j = lps[j - 1];
      }
    } else {
      if (j > 0) j = lps[j - 1];
      else i++;
    }
  }
  return res;
}

function lpsArray(pat) {
  let lps = new Array(pat.length).fill(0);
  let i = 1,
    j = 0;
  while (i < pat.length) {
    if (pat[i] === pat[j]) lps[i++] = ++j;
    else {
      if (j > 0) j = lps[j - 1];
      else i++;
    }
  }
  return lps;
}
// this algo has a time complexity of O(m+n) which is way less than O(m*n)

// Date Added 02.December.2024, Time : 11: 23 PM
