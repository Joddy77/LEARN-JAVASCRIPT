function createKTP(age = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age < 17) {
                reject("ERROR: age not old enough");
            } else {
                resolve("valid! creating KTP...");
            }
        }, 3000);
    });
}

// .then di gunakan untuk memastikan sebuah proses di eksekusi setelah promisenya selesai.

// .catch di gunakan untuk memastikan sebuah proses itu tereksekusi setelah promisenya gagal

// .finally di gunakan untuk memastikan sebuah proses itu di eksekusi setelah .then atau .catch selesai.

createKTP(20)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("checking process is done..");
    });
