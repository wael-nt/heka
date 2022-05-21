
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 }));


const allowedOrigins = ["*", "http://localhost:3000"];
const methods = ["GET", "PUT", "POST", "PATCH", "UPDATE", "HEAD", "OPTIONS", "DELETE"]
const headers = ["*"]
app.use(cors({
  origin: allowedOrigins,
  methods: methods,
  headers: headers
}));


app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true,  }));


const PORT = 4300

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', () => {
  console.log("Connected to DB")
})

const userRouter = require('./routes/userrouter')
app.use('/heka/api/users', userRouter)

const recipeRouter = require('./routes/reciperouter')
app.use('/heka/api/recipes', recipeRouter)

const ingredientRouter = require('./routes/ingredientrouter')
app.use('/heka/api/ingredients', ingredientRouter)

app.use("/test", (req, res) => {
  res.send('test')
})

app.listen(PORT, () => {
  console.log(`Running @ http://127.0.0.1:${PORT}`);
})