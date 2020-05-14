const express = require('express');
const router = express.Router();
const knex = require('knex');

const db = require('../data/dbConnection.js');

module.exports = {
    isValidPOST,
    uniqueVIN
}

function isValidPOST(car) {
    if (!car.VIN || car.VIN.length < 17) {
        return false
    } else if (!car.Make || typeof car.Make !== "string") {
        return false
    } else if (!car.Model || typeof car.Model !== "string") {
        return false
    } else if (!car.Year || typeof car.Year !== "number") {
        return false
    } else if (!car.Mileage || typeof car.Mileage !== "number") {
        return false
    } else if (car.Transmission && typeof car.Transmission !== "string") {
        return false
    } else if (car.TitleType && typeof car.TitleType !== "string") {
        return false
    } else {
        return true
    }
}

function uniqueVIN(req, res, next) {
    const query = req.body;
    if (!query.VIN) {
        next();
    } else {
        db('car-dealer')
            .where('VIN', query.VIN)
            .then(cars => {
                console.log(cars, "sdgsdfg")
                if (cars.length === 0) {
                    next();
                } else {
                    res.status(404).json({ message: "That VIN already exists in the database." })
                }
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ message: error.message })
            });
    }
}

// function isValidPUT(account) {
//     return Boolean(account.name || account.budget);
// }

// function isValidQuery(query) {
//     return Boolean(query.limit && query.sortby)
// }