//npm init
//npm install express mongoose ejs dotenv cors

//Declare variables
const express = require("express")
const app = express()
const PORT = 8500;
const mongoose = require("mongoose")
require("dotenv").config()
// add model variable

//set middleware
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true}, 
    () => {console.log('connected to db!')})

//Setting up port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))