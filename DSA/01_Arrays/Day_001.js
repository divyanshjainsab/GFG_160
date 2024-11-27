// We have to figure out 2nd largest element in an Array (if exists), example : arr = [12,2,1,43,34,99] in this case we have to return 43,other one : arr = [10,10,10] as all are same then -1.

// Approach 1 : Naives(Bruteforce) Approch
function secondLargest(arr) {
  if (arr.length < 2) return -1;
  const arr2 = arr.toSorted((a, b) => a - b);
  for (let i = arr2.length - 1 - 1; i >= 0; i--) {
    if (arr2[arr2.length - 1] !== arr2[i]) return arr2[i];
  }
  return -1;
}

// Approach 2 : Better Approch
function secondLargest(arr) {
  if (arr.length < 2) return -1;
  let max1 = -1,
    max2 = -1;
  for (let i of arr) max1 = max1 > i ? max1 : i;
  for (let i of arr) if (max1 > max2 && max2 < i && max1 !== i) max2 = i;
  return max2;
}

// Approach 3 : Best Approach
function secondLargest(arr) {
  if (arr.length < 2) return -1;
  let max1 = -1,
    max2 = -1;
  for (let i of arr) {
    if (max1 < i) {
      max2 = max1;
      max1 = i;
    } else if (max1 > i && max2 < i) max2 = i;
  }
  return max2;
}

console.log(secondLargest([12, 2, 1, 43, 34, 99]));
