console.clear();
// import express
const express = require('express');
const connectDB = require('./config/conectDB');
// instance app
const app = express();

require('dotenv').config();

connectDB()

//router
//user
app.use(express.json());
app.use("/api/user", require("./router/user"));

// port
const PORT = process.env.PORT || 5000;
//  create server

app.listen(PORT,(err) => err ? console.error(err) : console.log(`server is running on PORT ${PORT}`));

