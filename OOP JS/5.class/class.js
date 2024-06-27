// Ketika membuat class pada js kita harus menggunakan pascalcase atau aturan dimana membuat variabel dengan huruf depan kapital dan selanjutnya.
class User {
    #nik = "1234567890"; //ini adalah cara supaya nik hanya bisa di akses di dalam class tetapi  tidak bisa di luar class atau publik.

    constructor(inputUsername, inputAge) {
        this.username = inputUsername + " " + this.#nik;
        this.age = inputAge;
    }
}

const user1 = new User("doraemon", 20); // ini adalah cara memanggil isi dari class.

console.log(user1);