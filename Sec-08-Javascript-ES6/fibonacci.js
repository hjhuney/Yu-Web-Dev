function fibonacciGenerator (n) {
    numbers = [0,1];
    for (var i=2; i<=n; i++) {
      numbers.push(numbers[i-2] + numbers[i-1]);
    }
    console.log(numbers.slice(0,n));
  }
  
  fibonacciGenerator(10);