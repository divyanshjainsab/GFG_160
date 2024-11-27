// Reverse an Array

// Bruteforce
function reverseAnArray(arr) {
  const arr2 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  return arr2;
}
// time O(n), space O(n)

// Better-1
function reverseAnArray(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
// space O(1), time O(n)

// Better-2
function reverseAnArray(arr) {
  const n = arr.length;
  for (let i = 0; i < n / 2; i++)
    [arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]];
  return arr;
}
// space O(1), time O(n)

// Better-3
function reverseAnArray(arr) {
  reverse(arr, 0, arr.length - 1);
  return arr;
}
function reverse(arr, l, r) {
  if (l >= r) return;
  [arr[l], arr[r]] = [arr[r], arr[l]];
  reverse(arr, l + 1, r - 1);
}
// space O(n), time O(n)

// Better-4
function reverseAnArray(arr) {
  return arr.reverse();
}
// space O(1), time O(n)

console.log(reverseAnArray([12, 0, 0, 2, 23, 4, 2, 0]));
