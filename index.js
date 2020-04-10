const server = require('./api/server');

// define host and port
const HOST = process.env.PORT || '127.0.0.1';
const PORT = process.env.PORT || 9090;

server.listen(PORT, () => console.log(`Server running at ${HOST}:${PORT}`));