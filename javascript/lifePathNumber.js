function lifePathNumber(dateOfBirth){
    return dateOfBirth < 10 ? dateOfBirth : lifePathNumber([...dateOfBirth + ``].reduce((acc, curr)=> acc + (+curr || 0), 0))
}


console.log(lifePathNumber("1815-12-10"), 1);
console.log(lifePathNumber("1961-07-04"), 1);
console.log(lifePathNumber("1879-03-14"), 6);