// INI CONTOH UNTUK OBJECT

// const naruto = {
//     username: "naruto",
//     age: 20,
// };

// // const hokage = {
// //     title: "hokage",
// //     ...naruto, // ini adalah contoh dari spread dimana kita mengambil isi dari object naruto 
// //     // spread dimana kita pakai supaya tidak terjadi pass by reference
// // };

// const sasuke = {
//     ...naruto,
// };

// sasuke.username = "doraemon";


// console.log(sasuke)

// INI ADALAH CONTOH UNTUK ARRAY

const fruits = ["Mangga", "Jeruk", "Apel"];

const buah = [...fruits];

buah[0] = "Durian";

console.log(fruits);
