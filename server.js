const express = require('express');

const server = express();

server.use(express.json());

const projectRoutes = require('./routes/projectRoutes.js');
const actionRoutes = require('./routes/actionRoutes.js');


server.get('/', (req, res) => {
  res.send(`<h2>Let's started!</h2>`)
});



function logger(req, res, next) {
    console.log(`A ${req.method} to ${req.path} at ${Date.now()}`)
    next();
};

server.use(logger);

server.use("/api/projects", projectRoutes);
server.use("/api/actions", actionRoutes);



module.exports = server;







