const main = (num) => {
    let rom = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    let roman = '',i;
    for ( i in rom ) {
      while ( num >= rom[i] ) {
        roman += i;
        num -= rom[i];
      }
    }
    return roman;
}

console.log(main(1), 'I', '1 should, "I"');
console.log(main(2), 'II', '2 should, "II"');
console.log(main(3), 'III', '3 should, "III"');
console.log(main(4), 'IV', '4 should, "IV"');
console.log(main(5), 'V', '5 should, "V"');
console.log(main(9), 'IX', '9 should, "IX"');
console.log(main(10), 'X', '10 should, "X"');
console.log(main(11), 'XI');
console.log(main(19), 'XIX');
console.log(main(22), 'XXII');
console.log(main(15), 'XV');
console.log(main(1000), 'M', '1000 should, "M"');
console.log(main(1001), 'MI', '1001 should, "MI"');
console.log(main(1990), 'MCMXC', '1990 should, "MCMXC"');
console.log(main(2007), 'MMVII', '2007 should, "MMVII"');
console.log(main(2008), 'MMVIII', '2008 should, "MMVIII"');
