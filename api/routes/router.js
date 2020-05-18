const express = require('express');

const router = express.Router();

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

// POST a todo
router.post('/todos', async (req, res, next) => {
    try {
        await DB('todos').insert({ todo: req.params.todo })
    } catch(err) {
        console.log(err)
    }
});

module.exports = router;