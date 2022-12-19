function sum(numbers) {
    let arr = Array.from(numbers);
    if(arr == 0){
        return 0;
    }else{
        return arr.reduce((a, b) => a + b);
    }
};



console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);