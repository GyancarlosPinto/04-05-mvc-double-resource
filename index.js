// Home hub 
// Think of it like a train hub with each line going off in it's own direction but meeting here
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const todoRoutes = require("./Routes/todoRoutes");
const userRoutes = require("./Routes/userRoutes");

app.use(express.json());
// Anything that is related to todos
app.use("/todos", todoRoutes);
// Anthing that is related to users
app.use("/users", userRoutes);

module.exports = app;