const outputResult = (result) => {
    return "Your result is: " + result;
};

// module.exports = outputResult; // bisa juga dengan cara seperti ini tetapi hanya bisa mengexports 1 tidak bisa banyak. (TIDAK DI SARANKAN)

module.exports = {
    outputResult,
};