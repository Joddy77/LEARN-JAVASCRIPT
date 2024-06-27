const user = {
    username: "doraemon",
    age: 20,
    job: "programmer",
    addres : {
        city: "Jakarta",
        street: "Jl. Kenangan",
    },
};

const {username, age, job} = user; // ini adalah cara destructuring pada object

// console.log(`username: ${username} | age: ${age} | job: ${job}`)
// console.log(`username: ${user.username} | age: ${user.age} | job: ${user.job}`);

const fruits = ["Leci", "Jeruk", "Mangga"]; // ini adalah cara destructuring pada array

const [secondFavoriteFruit, favoriteFruit, leastFavoriteFruit] = fruits;

// const [firstFruit, ...restOfFruits] = fruits // dimana firstFruit mewaikili index 1 dan restOfFruits adalah sisa dari index yang masih ada. (TIDAK WAJIB).

console.log(leastFavoriteFruit);
