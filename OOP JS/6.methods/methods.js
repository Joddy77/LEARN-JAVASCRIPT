class User {
    constructor(inputUsername, inputAge, inputFirtsName, inputLastName) {
        this.username = inputUsername;
        this.age = inputAge;
        this.inputFirtsName = inputFirtsName;
        this.inputLastName = inputLastName;
    };

    #getFullName() {
        return `${this.inputFirtsName} ${this.inputLastName}`
    };

    greeting() {
        return `Hello, im ${this. #getFullName()}`;
    };

    introduction() {
        return `My name is ${this.#getFullName()}, i am ${this.age} years old`
    }
};

const user1 = new User("doraemon", 20, "Joddy", "Setiawan");

console.log(user1.greeting());
console.log(user1.introduction());
