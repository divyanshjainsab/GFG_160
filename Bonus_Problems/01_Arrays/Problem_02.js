/*
Split array in three equal sum subarrays

Given an array, arr[], determine if arr can be split into three consecutive parts such that the sum of each part is equal. If possible, return any index pair(i, j) in an array such that sum(arr[0..i]) = sum(arr[i+1..j]) = sum(arr[j+1..n-1]), otherwise return an array {-1,-1}.

Note: Since multiple answers are possible, return any of them. The driver code will print true if it is correct otherwise, it will print false.

Examples :

Input:  arr[] = [1, 3, 4, 0, 4]
Output: true
Explanation: [1, 2] is valid pair as sum of subarray arr[0..1] is equal to sum of subarray arr[2..3] and also to sum of subarray arr[4..4]. The sum is 4, so driver code prints true.

Input: arr[] = [2, 3, 4]
Output: false
Explanation: No three subarrays exist which have equal sum.

Input: arr[] = [0, 1, 1]
Output: false

Constraints:
3 ≤ arr.size() ≤ 106
0 ≤ arr[i] ≤ 106
*/

function splitArray(arr) {
  const TOTAL_SUM = arr.reduce((acc, ele) => (acc += ele), 0);
  // Check if total sum is divisible by 3 then it can be splitted else it can't
  if (TOTAL_SUM % 3 !== 0) return [-1, -1];

  let currSum = 0;
  const res = [];
  for (let i in arr) {
    currSum += arr[i];
    if (currSum === TOTAL_SUM / 3) {
      // As we are adding this indice then we must need to reset current sum, the indice will only added if currSum is equal to target value
      currSum = 0;
      res.push(i);

      // If 2 parts are already added and we already checked that it can be splitted in 3 parts then the remaining will be last part so, exit then
      if (res.length === 2) return res;
    }
  }
  return [-1, -1];
}

console.log(splitArray([1, 3, 4, 0, 4]));
