function fibonacciSeq(n) {
  let total = [];

  for (let i = 0; i < n; i++) {
    if (i == 0) {
      total.push(i);
    } else if (i == 1){
      total.push(i);
    } else {
      let fib = total[i - 1] + total[i - 2];
      total.push(fib);
    }
  }
  return total;
}

console.log(fibonacciSeq(8));

