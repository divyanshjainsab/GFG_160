function nonRepeatingChar(arr) {
  const hash = {};
  for (const ele of arr) hash[ele] = 1 + (hash[ele] ?? 0);
  for (const ele in hash) if (hash[ele] < 2) return ele;
  return -1;
}
// Expected time complextiy O(n) and Space Complexity is also O(n)

// Other Approach that refines this for large test cases is
function nonRepeatingChar(s) {
  const hash = new Array(128).fill(0);
  for (const char of s) hash[char.charCodeAt(0)]++;
  for (const char of s) if (hash[char.charCodeAt(0)] == 1) return char;
  return -1;
}
// As we have Time Complexity same as previous version but in Space we are using array of fixed length for all time so that will be considered as O(128) -> O(1) which is denoted for constant space

// Changes : for smaller strings s.length < 128 version 1 is fast and effictive but for larger one's 2nd one is better

// Date Added : 01/12/24, Time : 12:30 AM