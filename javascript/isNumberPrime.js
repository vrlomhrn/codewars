function isPrime(num) {
  let x = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      x++;
    }
  }
  if (x == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(7));
