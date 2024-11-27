// Move all zero's to end without disturbing the order of the elements

// BruteForce Approach
function moveAllZerosToEnd(arr) {
  const arr2 = [];
  for (let i of arr) if (i !== 0) arr2.push(i);
  for (let i = arr.length - arr2.length; i > 0; i--) arr2.push(0);
  return arr2;
}

// Better Approach
function moveAllZerosToEnd(arr) {
  let index = 0,
    count = 0;
  for (let i of arr) {
    if (i !== 0) arr[index++] = i;
    else if (i === 0) count++;
  }
  while (count-- > 0) arr[index++] = 0;
  return arr;
}

// Best Approach
function moveAllZerosToEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}

console.log(moveAllZerosToEnd([12, 0, 0, 2, 23, 4, 2, 0]));
