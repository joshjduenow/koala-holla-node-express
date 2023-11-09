const router = require('express').Router();
const express = require('express');
// const koalaRouter = express.Router();
// DB CONNECTION
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "allKoalas" ORDER BY "name";';
    pool.query(queryText).then(result => {
        console.log('in router.get',);
        // Sends back the results in an object
        res.send(result.rows);
    })
        .catch(error => {
            console.log('error with koalas', error);
            res.sendStatus(500);
        });
});

// POST
router.post('/', (req, res) => {
    let newKoala = req.body;
    console.log('Adding koala', newKoala);

    let queryText = `INSERT INTO "allKoalas" ("name", "gender", "age", "transfer", "notes")
                     VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newKoala.name, newKoala.gender, newKoala.age, newKoala.transfer, newKoala.notes])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error adding new koala', error);
            res.sendStatus(500);
        });
});

// PUT
router.put('/:id', (req, res) => {
    let idToUpdate = req.params.id;
    let queryText = 'UPDATE "allKoalas" SET "transfer" = true WHERE "id" = $1;';

    const sqValues = [idToUpdate]
    pool.query(queryText, sqValues)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((dbError) => {
            console.log("mark koala transfer failed", dbError);
            res.sendStatus(500);
        })
});


// DELETE
router.delete('/:id', (req, res) => {
    let idToDelete = req.params.id;
    let queryText = 'DELETE FROM "allKoalas" WHERE "id" = $1;';

    const sqValues = [idToDelete]
    pool.query(queryText, sqValues)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((dbError) => {
            console.log("delete koala failed", dbError);
            res.sendStatus(500);
        })
});

module.exports = router;