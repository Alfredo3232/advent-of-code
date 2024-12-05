let str = "<DATA_HERE>";
let mul = (num1, num2) => num1 * num2;

const regex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
let mulArr = str.match(regex);

let sum = 0;
for (let i = 0; i < mulArr.length; i++) {
    const el = mulArr[i];

    sum += eval(el);
}

console.log(sum);
