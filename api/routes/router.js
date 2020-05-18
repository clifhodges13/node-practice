const express = require('express');

const router = express.Router();

const DB = require('../../db/knex-config');

// GET sanity check
router.get('/', (req, res, next) => {
    try {
        res.status(200).json({
            message: 'Hell ye ya did it boi'
        })
    } catch(err) {
        console.log(err)
    }
});

// GET all todos
router.get('/todos', async (req, res, next) => {
    try {
        const todos = await DB('todos');

        if(!todos) {
            return res.status(404).json({ message: 'Todos not found.' })
        }
        
        res.status(200).json({todos})

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Oops, something went wrong.' })
    }
});

// POST a todo
router.post('/todos', async (req, res, next) => {
    try {
        await DB('todos').insert({ todo: req.params.todo })
    } catch(err) {
        console.log(err)
    }
});

module.exports = router;