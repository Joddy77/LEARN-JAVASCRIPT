function asyncOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("function ONE is done");
        }, 3000);
    });
}

function asyncTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("function TWO is done");
        }, 1000);
    });
}

function asyncThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("function THREE is done");
        }, 2000);
    });
}

// .then adalah method dari promise dimana akan tereksekusi ketika resolve di atas terpanggil.  
asyncOne()
    .then((result) => {
        console.log(result);

        return asyncTwo();
    })
    .then((result2) => { 
        console.log(result2);

        return asyncThree();
    })
    .then((result3) => {
        console.log(result3);
    })

// asyncTwo().then((result) => {
//     console.log(result);
// })
