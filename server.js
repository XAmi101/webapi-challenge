const express = require('express');

const server = express();
server.use(express.json());

const projectRoutes = require('./routes/projectRoutes.js');


server.get('/', (req, res) => {
  res.send(`<h2>Let's started!</h2>`)
});


// server.use('/', (req, res) => {
//     res.send('Let's started!');
// }); 


// //custom middleware
// function logger(req, res, next) {
//   console.log(`${new Date().toISOString()} ${req.method} to ${req.url}`);
//   next();
// }
// server.use(logger);
server.use("/api/projects", projectRoutes);







module.exports = server;







