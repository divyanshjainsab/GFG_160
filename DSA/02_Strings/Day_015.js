/*
Add Binary Strings
Given two binary strings s1 and s2 consisting of only 0s and 1s. Find the resultant string after adding the two Binary Strings.
Note: The input strings may contain leading zeros but the output string should not have any leading zeros.

Input: s1 = "1101", s2 = "111"
Output: 10100
Explanation:
 1101
+ 111
10100

Input: s1 = "00100", s2 = "010"
Output: 110
Explanation: 
  100
+  10
  110

Constraints:
1 ≤ s1.size(), s2.size() s≤ 106
*/

function addBinary(s1, s2) {
  const maxLen = Math.max(s1.length, s2.length);
  s1 = s1.padStart(maxLen, "0");
  s2 = s2.padStart(maxLen, "0");

  let sum = "";
  let carry = 0;
  for (let i = maxLen - 1; i >= 0; i--) {
    const res = Number(s1[i]) + Number(s2[i]) + carry;
    carry = 0;
    switch (res) {
      case 0:
      case 1: {
        sum = String(res) + sum;
        break;
      }
      case 2: {
        sum = "0" + sum;
        carry = 1;
        break;
      }
      case 3: {
        sum = "1" + sum;
        carry = 1;
        break;
      }
    }
  }
  if (carry) sum = "1" + sum;

  // Edge case : Leading zeros
  let isStart = false,
    result = "";
  for (let i of sum) {
    if (isStart) result = result + i;
    else if (!isStart && i === "1") {
      result = result + i;
      isStart = true;
    }
  }

  return result;
}

// Date Added -> 29/11/24
