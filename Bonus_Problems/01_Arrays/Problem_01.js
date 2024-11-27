// we have to return single digit sum of an Integer n, example for 12345 we have to return 6 as 1+2+3+4+5 = 15, 1+5 = 6

// First try (My Approach)

function singleDigitSum(n) {
  if (n < 9) return n;
  else if (n % 9 === 0) return 9;
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10); // js converts integer to float automatically that's why used floor, example : 123 -> 12.3, to get 12 used floor()
  }
  return singleDigitSum(sum);
}
// In this approach the time consumed was exactly equal to the number of digits and it is recurrsive function too that may consume much resources, However the more Optimal was this..

function singleDigitSum(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
  // this is known as digital root of number
}

console.log(singleDigitSum(123456));
