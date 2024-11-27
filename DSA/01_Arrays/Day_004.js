// Left Rotate an Array by d places, for [1, 2, 3, 4, 5,6] -> [ 3, 4, 5, 6, 1, 2 ]

//Brute
function rotateArray(arr, d) {
  const n = arr.length;
  d = d % n;
  for (let i = 0; i < d; i++) {
    const first = arr[0];
    for (let j = 0; j < n - 1; j++) arr[j] = arr[j + 1];
    arr[n - 1] = first;
  }
  return arr;
}
// time complexity O(n*d) and S.C O(1)

// Best-1 Array Rotation method
function rotateArray(arr, d) {
  const newArr = [],
    n = arr.length;
  for (let i = n - d; i < n; i++) newArr.push(arr[i]);
  for (let i = 0; i < d; i++) newArr.push(arr[i]);
  return arr;
}

// ChatGpt approach
function rotateArray(arr, d) {
  return arr.slice(d).concat(arr.slice(0, d));
}
// takes T.C as O(n) and same as Space C. as we aren't mutating then orginal one that takes space 

// Optimal one
function rotateArray(arr,d){
  const n = arr.length;
  reverse(arr,0 , n-1);
  reverse(arr, 0, n-d-1);
  reverse(arr, d , n-1);
  return arr;
}
function reverse(arr,start,end){
  while (start< end) {[arr[start], arr[end]] = [arr[end],arr[start]];
    start++;
    end--;
  }
}


console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));