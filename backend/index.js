"use strict"
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 4300

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', () => {
  console.log("Connected to DB")
})


app.use(express.json());

const userRouter = require('./routes/userrouter')
app.use('/heka/api/users', userRouter)

const recipeRouter = require('./routes/reciperouter')
app.use('/heka/api/recipes', recipeRouter)

app.use("/test", (req, res) => {
  res.send('test')
})

app.listen(PORT, () => {
  console.log(`Running @ http://127.0.0.1:${PORT}`);
})