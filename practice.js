const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

// for (let key in circle) console.log(key, circle[key]);

// for (let key of Object.keys(circle)) console.log(key);

// for (let entries of Object.entries(circle))
//   console.log(entries);

if ('radius' in circle) console.log('yes');
