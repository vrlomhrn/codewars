function positiveSum(arr){
    return arr.filter(e => e > 0).reduce((prev1, curr1) => prev1 + curr1, 0);
}

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);