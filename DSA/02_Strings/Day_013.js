// You are given a String, we have to covert it to number without using any inbuilt method
/*
Given a string s, the objective is to convert it into integer format without utilizing any built-in functions. Refer the below steps to know about atoi() function.

Cases for atoi() conversion:

Skip any leading whitespaces.
1: Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
2: Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the string is reached. 
3: If no digits are present, return 0.
4: If the integer is greater than 2^31 – 1, then return 2^31 – 1 and if the integer is smaller than -2^31, then return -2^31.


Examples:

Input: s = "-123"
Output: -123
Explanation: It is possible to convert -123 into an integer so we returned in the form of an integer

Input: s = "  -"
Output: 0
Explanation: No digits are present, therefore the returned answer is 0.

Input: s = " 1231231231311133"
Output: 2147483647
Explanation: The converted number will be greater than 2^31 – 1, therefore print 2^31 – 1 = 2147483647.

Input: s = "-999999999999"
Output: -2147483648
Explanation: The converted number is smaller than -2^31, therefore print -2^31 = -2147483648.


*/

function atoi(s) {
  let num = 0,
    isNeg = false;
  s = s.trim();
  for (let i of s) {
    if (num === 0 && i === "-") isNeg = !isNeg;
    else if (Number(i) <= 9 && Number(i) >= 0) num = num * 10 + Number(i);
    else break;
  }
  if (num === 0 && isNeg) return 0;
  else if (num >= 2147483647 && !isNeg) return 2147483647;
  else if (num >= 2147483648 && isNeg) return -2147483648;
  return isNeg ? -num : num;
}


// Date Added -> 28/11/24
