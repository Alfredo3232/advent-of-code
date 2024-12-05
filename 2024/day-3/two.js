let str = "<DATA_HERE>";

let mul = (num1, num2) => num1 * num2;

const reg = /don?'?t?\(\)|mul\([0-9]{1,3},[0-9]{1,3}\)/g;
const mulArr = str.match(reg);

let boo = true;
let sum = 0;
for (let i = 0; i < mulArr.length; i++) {
    const el = mulArr[i];

    if (boo) {
        if (el[0] === "m") sum += eval(el);
        else {
            if (el[2] === "n") boo = false;
            else boo = true;
        }
    } else {
        if (!(el[0] === "m")) {
            if (el[2] === "n") boo = false;
            else boo = true;
        }
    }
}

console.log(sum);
