
exports.up = function (knex) {
    return knex.schema.createTable('car-dealer', tbl => {
        tbl.increments();

        tbl.string('VIN', 17).notNullable().unique();
        tbl.string('Make', 255).notNullable();
        tbl.string('Model', 255).notNullable();
        tbl.integer('Year', 4).notNullable();
        tbl.float('Mileage', 8).notNullable();

        tbl.string('Transmission', 255);
        tbl.string('Title Type', 255);

        tbl.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("car-dealer");

};
