const main= (str) => str.replace(/([A-Z])/g, ' $1');

console.log(main('camelCasing'), 'camel Casing', 'Unexpected result');
console.log(main('camelCasingTest'), 'camel Casing Test', 'Unexpected result');