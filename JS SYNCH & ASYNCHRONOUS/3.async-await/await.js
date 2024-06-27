function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = 0;
      result = a + b;

      resolve(result);
    }, 1000);
  });
}

function asyncMultiply(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = 0;
      result = a * b;

      resolve(result);
    }, 1000);
  });
}

async function main() {
  const sumResult = await asyncSum(5, 3);
  const multiplyResult = await asyncMultiply(sumResult, 2);

  console.log(multiplyResult);
}

main();

//** Async Arrow Function */
// const main = async () => {

// };
