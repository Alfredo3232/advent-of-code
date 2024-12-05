let lefty = [];

let righty = [];

let sl = lefty.sort((a, b) => a - b);
let sr = righty.sort((a, b) => a - b);

const total = sl.reduce((acc, el, i) => Math.abs(el - sr[i]) + acc, 0);

console.log(total);
