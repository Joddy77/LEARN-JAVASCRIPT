// FYI this pada function hanya bisa di gunakan pada function biasa dan tidak bisa di gunakan di dalam arrow function, karna this mengacu pada object saat ini.
// contoh ada di line 20.

const user = {
  username: "Naruto",
  age: 20,
  address: { // kita bisa membuat object di dalam object
    province: "Banten",
    city: "Tangerang",
    postalCode: 15000,
    street: {
        number: 123,
        name: "jl. kenangan",
    },
  }, 
  nickname: ["to", "kakak", "pak hokage"], // kita juga bisa menyimpan array di dalam object.
  greeting: () => { // kita juga bisa membuat arrow function di dalam object.
    return "Hello!";
  },
  introduction: function () { //function tanpa nama seperti ini adalah function anonymus dimana functionnya sama saja seperti ( function <name> () {})
    return `Hello, my name is ${this.username}`;
  }
};

// Object.freeze(user); // ini adalah contoh dimana object user yang kita buat tidak akan bisa di tambah atau di ganti property dan valuenya;

// user.birthYear = 2000; // ini adalah contoh cara menambhakan suatu property ke dalam object beserta dengan valuenya tetapi jika sudah ada propertynya maka nilai sebelum dari property di dalam object yang akan berubah.

// console.log(user.address.street.name); // ini adalah contoh cara memanggil suatu value object di dalam object yang ingin kita panggil.

// console.log(user.nickname[2]); // ini adalah contoh cara memanggil suatu array di dalam object.

// console.log(user.introduction()); // ini adalah contoh cara memanggil suatu function di dalam object.

// console.log(Object.keys(user)); // ini adalah cara untuk memanggil suatu property di dalam object yang kita buat. Dengan Object.keys(<nama object>);

// console.log(Object.values(user)) // ini adalah cara untuk memanggil suatu nilai / isi di dalam property object yang kita buat. 

console.log(user);