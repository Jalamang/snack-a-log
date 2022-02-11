// DEPENDENCIES
const express = require("express");
const cors =require('cors')

const snackController = require('./controllers/snackController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors())
app.use(express.json())

app.use('/snacks', snackController);

// ROUTES
app.get('/', (_, res)=>{
    res.send("Get Snack'n at Snack-a-log!")
})

app.get('*', (_, res)=>{
    res.status(404).json({error:"Page not found"})
})



// EXPORT
module.exports = app;
