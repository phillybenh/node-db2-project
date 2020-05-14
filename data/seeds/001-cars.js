
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {
          "VIN": "0987654321dfgfgdfg6gfcdeftg",
          "Make": "Mazda",
          "Model": "3",
          "Year": 2002,
          "Mileage": 125100.7,
          "Transmission": "6 spd",
          "TitleType": "clean"
        },
        {
          "VIN": "0987654321dfgfgdfgsdfsdeftg",
          "Make": "Mazda",
          "Model": "6",
          "Year": 2002,
          "Mileage": 1251.7,
          "Transmission": "6 spd",
          "TitleType": "salvage"
        },
        {
          "VIN": "09876543tjyhgfgfgdfg6gfcdeftg",
          "Make": "Mazda",
          "Model": "666",
          "Year": 2006,
          "Mileage": 125341.7,
          "Transmission": "666 spd",
          "TitleType": "rebuilt"
        },
        {
          "VIN": "09872342654321dfgfgdfgdeftg",
          "Make": "VW",
          "Model": "Fox",
          "Year": 1993,
          "Mileage": 32567.3,
          "Transmission": "4 spd",
          "TitleType": "clean"
        },
        {
          "VIN": "098745476fgfgdfg6gfcdeftg",
          "Make": "Nissan",
          "Model": "Maxima",
          "Year": 1997,
          "Mileage": 122351.7,
          "Transmission": "5 spd",
          "TitleType": "clean"
        },
        {
          "VIN": "098745456ggbnmgfgdfg6gfcdeftg",
          "Make": "Toyota",
          "Model": "Tacoma",
          "Year": 2005,
          "Mileage": 28433.1,
          "Transmission": "6 spd",
          "TitleType": "clean"
        }
      ]);
    });
};
