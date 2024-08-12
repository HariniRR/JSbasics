//Number of multiples of 3 and 5 within 1 to 50
var count = 0;
var count1 = 0;
var n = 50;
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0) {
    count++;
  }
}
console.log("Number of multiples of 3 is:",count);

var j = 1;
  while ( j <= n) {
    if (j % 5 === 0) {
      count1++;
    }
    j++;
}
console.log("Number of multiples of 5 is:",count1);
