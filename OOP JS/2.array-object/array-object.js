const user1 = {
    username: "Doraemon",
    age: 5
};

const user2 = {
    username: "Cella",
    age: 23
};

const user3 = {
    username: "Zoey",
    age: 15
};

const user4 = {
    username: "Jonesta",
    age: 40
};

const users = [user1, user2, user3, user4, {username : "Joddy", age: 23}];

const filteredUsers = users.filter((user) => user.age >= 17);

filteredUsers.forEach((user, idx) => {
    console.log(`${idx +1}. username: ${user.username} | age: ${user.age}`);
});