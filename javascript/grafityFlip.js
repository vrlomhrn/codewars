const flip = (d, a) => {
  if (d === 'R') {
    return a.sort((a, b) => a - b);
  }else{
    //TODO
    return a.sort((a, b) => b - a);
  }
};

console.log(flip(['Hello World'], ['Hello']));