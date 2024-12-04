let arr = [];

let safeCounter = 0;

for (let i = 0; i < arr.length; i++) {
    let diffArr = [];
    let boo = true;

    for (let j = 1; j < arr[i].length; j++) {
        let diff = arr[i][j] - arr[i][j - 1];

        if (diff > 3 || diff < -3 || diff === 0) {
            boo = false;
            break;
        } else diffArr.push(diff);
    }

    if (boo) {
        for (let j = 0; j < diffArr.length; j++) {
            let isInc = diffArr[0] > 0;

            if (isInc) {
                if (!(diffArr[j] > 0)) {
                    boo = false;
                    break;
                }
            } else {
                if (!(diffArr[j] < 0)) {
                    boo = false;
                    break;
                }
            }
        }

        if (boo) safeCounter++;
    } else continue;
}

console.log("Safe --------->", safeCounter);
