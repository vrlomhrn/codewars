function lovefunc(flower1, flower2) {
  if (flower1 % 2 == 0 && flower2 % 2 == 1 || flower1 % 2 == 1 && flower2 % 2 == 0) {
    return 'We never get married';
  } else {
    return 'Shall We married?';
  }
}

console.log(lovefunc(2,3));