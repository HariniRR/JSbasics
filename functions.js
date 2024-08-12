function countMultiplesOfThree(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0) {
        count++;
      }
    }
    return count;
  }
  
  console.log("Number of multiples of 3 is:",countMultiplesOfThree(50));
  c = ((n) => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 5 === 0) {
        count++;
      }
    }
    return count;
  })(50);
  
  console.log("Number of multiples of 5 is:", c);
