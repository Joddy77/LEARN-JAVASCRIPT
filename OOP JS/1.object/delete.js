const user = {
    username: "Naruto",
    age: 20,
    address: { 
      province: "Banten",
      city: "Tangerang",
      postalCode: 15000,
      street: {
          number: 123,
          name: "jl. kenangan",
      },
    }, 
  };

  delete user.age; // ini adalah cara untuk delete suatu property di dalam object dengan menggunakan object delete.

  console.log(user);
  