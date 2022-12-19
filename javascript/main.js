const flip = (d, a) => {
  if (d === 'R') {
    return a.sort((a, b) => a - b);
  } else {
    //TODO
    return a.sort((a, b) => b - a);
  }
};

function product(values) {
  if (values === null || values == 0) return null;
  return values.reduce((acc, curr) => acc * curr, 0);
}

function sum(numbers) {
  let arr = Array.from(numbers);
  if (arr == 0) {
    return 0;
  } else {
    return arr.reduce((a, b) => a + b);
  }
}


function positiveSum(arr) {
  return arr.filter((e) => e > 0).reduce((prev1, curr1) => prev1 + curr1, 0);
}
function lifePathNumber(dateOfBirth){
    return dateOfBirth < 10 ? dateOfBirth : lifePathNumber([...dateOfBirth + ``].reduce((acc, curr)=> acc + (+curr || 0), 0))
}
