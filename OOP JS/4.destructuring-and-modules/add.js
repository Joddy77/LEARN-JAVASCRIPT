const add = (a = 0, b = 0) => {
    return a + b;
};

// const MyVariable = "JODDY"; // BISA JUGA DI GUNAKAN UNTUK STRING.

// ini adalah cara bagaimana mengekspor suatu file yang berisi codingan untuk di pakai di dalam file lain.
module.exports = { 
    add,
    // MyVariable,
}; 