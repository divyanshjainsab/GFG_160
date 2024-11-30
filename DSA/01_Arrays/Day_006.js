/*
Majority Element II

You are given an array of integer arr[] where each number represents a vote to a candidate. Return the candidates that have votes greater than one-third of the total votes, If there's not a majority vote, return an empty array. 

Note: The answer should be returned in an increasing format.

Examples:

Input: arr[] = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
Output: [5, 6]
Explanation: 5 and 6 occur more n/3 times.

Input: arr[] = [1, 2, 3, 4, 5]
Output: []
Explanation: no candidate occur more than n/3 times.

Constraint:

1 <= arr.size() <= 10^6
-10^9 <= arr[i] <= 10^9
*/

// My First Approach
function majorityElement(arr) {
  const map = {};
  for (let i of arr) map[i] = 1 + (map[i] ?? 0);
  const res = [];
  for (let i in map) if (map[i] > Math.floor(arr.length / 3)) res.push(i);
  return res.toSorted((a, b) => a - b);
}
// this approach has Time Complexity of O(n) which is minimal but as we use a Hashmap which is an added space which can be minimized

// Optimal approach : Boyer Moore's Voting algorithm
function majorityElement(arr) {
  let ele1 = -1,
    ele2 = -1;
  let cnt1 = 0,
    cnt2 = 0;

  for (const i of arr) {
    if (cnt1 === 0) ele1 = i;
    else if (cnt2 === 0) ele2 = i;
    if (ele1 === i) cnt1++;
    else if (ele2 === i) cnt2++;
    else {
      cnt1--;
      cnt2--;
    }
  }

  // Edge case : if we decide the elements on these cnts then we may face some bugs, to avoid them reintialize them and count the exact frequency of them;
  (cnt1 = 0), (cnt2 = 0);
  for (const i of arr) {
    if (i === ele1) cnt1++;
    else if (i === ele2) cnt2++;
  }

  const res = [];
  if (cnt1 > Math.floor(arr.length / 3)) res.push(ele1);
  if (cnt2 > Math.floor(arr.length / 3)) res.push(ele2);

  // return in sorted order : as we have strict case of n/3 max 2 elements can satisfy this so check for direct return
  if (res.length === 2 && res[0] > res[1]) [res[0], res[1]] = [res[1], res[0]];

  return res;
}

// Date added 30/11/24
