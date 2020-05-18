const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const router = require('./routes/router');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res, next) => {
    res.json({message: 'The quarantine is going well so far.'})
});

server.use('/api', router);

module.exports = server;