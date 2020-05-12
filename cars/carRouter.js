const express = require('express');
const knex = require('knex');

const db = require('../data/dbConnection.js');


const router = express.Router();

router.post('/', (req, res) => {
    const account = req.body;
    db('car-dealer')
        .insert(account, 'id')
        .then(ids => {
            res.status(201).json({ data: ids })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: error.message })
        });
})

router.get('/', (req, res) => {
    db('car-dealer')
        .then(cars => {
            res.status(200).json({ data: cars })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: error.message })
        });
})

router.get('/:id', (req, res) => {
    db('car-dealer')
        .where({ id: req.params.id })
        .first()
        .then(car => {
            if (car) {
                res.status(200).json({ data: car })

            } else {
                res.status(404).json({ message: "No car by that ID." })
            }        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: error.message })
        });
})

module.exports = router;