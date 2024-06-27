function asyncSum(a, b, callback) {
    setTimeout(() => {
        let result = 0;
        result = a + b;

        console.log("Done Sum");
        callback(result);
    }, 1000);
};

function asyncMultiply(a, b, callback) {
    setTimeout(() => {
        let result = 0;
        result = a * b;

        console.log("Done Multiply");
        callback(result);
    }, 1000);
};

function displayResult(result) {
    console.log("Your result is " + result);
};

function asyncSubtract(a, b, callback) {
    setTimeout(() => {
        let result = 0;
        result = a - b;

        console.log("Done Subtract");
        callback(result);
    }, 1000);
};

function asyncDivide(a, b, callback) {
    setTimeout(() => {
        let result = 0;
        result = a / b;

        console.log("Done Divide");
        callback(result);
    }, 1000);
};

asyncSum(5, 3, (sumResult) => {
    asyncMultiply(sumResult, 2, (multiplyResult) => {
        asyncSubtract(multiplyResult, 1, (subtractResult) => {
            asyncDivide(subtractResult, 2, (divideResult) => {
                displayResult(divideResult);
            });
        });
    });
});