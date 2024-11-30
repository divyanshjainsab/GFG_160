/*

Next Permutation

Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order). 

Note - A permutation of an array of integers refers to a specific arrangement of its elements in a sequence or linear order.

Examples:

Input: arr = [2, 4, 1, 7, 5, 0]
Output: [2, 4, 5, 0, 1, 7]
Explanation: The next permutation of the given array is {2, 4, 5, 0, 1, 7}.
Input: arr = [3, 2, 1]
Output: [1, 2, 3]
Explanation: As arr[] is the last permutation, the next permutation is the lowest one.
Input: arr = [3, 4, 2, 5, 1]
Output: [3, 4, 5, 1, 2]
Explanation: The next permutation of the given array is {3, 4, 5, 1, 2}.
Constraints:
1 ≤ arr.size() ≤ 10^5
1 ≤ arr[i] ≤ 10^5

*/

/*
We Have to figure out 3 things in these questions
1 -> Find the Dip, the point were downfall starts or Happend
2 -> Figure out next bigger candidate from the element that is cause for the dip and swap with that
3 -> reverse the array from dip point as every one is in Sorted form
*/

class Solution {
  nextPermutation(arr) {
    let dipIndex = -1;

    // get the breakpoint
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] < arr[i + 1]) {
        dipIndex = i;
        break;
      }
    }

    // Edge Case
    if (dipIndex === -1) {
      this.swap(arr, 0, arr.length - 1);
      return arr;
    }

    // find next candidate
    let upcomingEleIdx = arr.length - 1;
    for (let i = arr.length - 1; i > dipIndex; i--) {
      if (arr[i] > arr[dipIndex]) {
        upcomingEleIdx = i;
        break;
      }
    }

    // swap the upcoming and dipIndex
    [arr[dipIndex], arr[upcomingEleIdx]] = [arr[upcomingEleIdx], arr[dipIndex]];

    // now swap rest elements from dipIndex+1
    this.swap(arr, dipIndex + 1, arr.length - 1);
    return arr;
  }

  swap(arr, left, right) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
}

// Date Added 29/11/24
