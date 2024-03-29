function product(values) {
  if (values === null || values == 0) return null;
  return values.reduce((acc, curr) => acc * curr, 0);
}

console.log(product([5, 4, 1, 3, 9]), 540);
console.log(product([-2, 6, 7, 8]), -672);
console.log(product([10]), 10);
console.log(product([0, 2, 9, 7]), 0);
console.log(product(null), null);
console.log(product([]), null);
console.log(product([5, 4, 1, 3, 9]), 540);
