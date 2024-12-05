let lefty = [];

let righty = [];

let sl = lefty.sort((a, b) => a - b);
let sr = righty.sort((a, b) => a - b);

let mainCount = 0;

for (let i = 0; i < sl.length; i++) {
    const left = sl[i];
    let tempCount = 0;

    for (let j = 0; j < sr.length; j++) {
        const right = sr[j];

        if (right === left) tempCount++;
    }

    mainCount += left * tempCount;
}

console.log(mainCount);
