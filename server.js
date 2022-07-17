//npm init
//npm install express mongoose ejs dotenv cors

//Declare variables
const express = require("express")
const app = express()
const PORT = 8500;
const mongoose = require("mongoose");
require("dotenv").config()
const TodoTask = require('./models/todotask')

//set middleware
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true}, 
    () => {console.log('connected to db!')}
)
//GET METHOD
app.get('/', async (request, response) => {
    try{
        TodoTask.find({}, (err, tasks) =>{
            response.render ('index.ejs', {todoTasks : tasks})
        })
    }catch (err) {
        if (err) return respone.status(500).send({message: error.message})
    }
})

//POST
app.post('/', async (req,res) => {
    const todoTask = new todoTask(
        {
            title: req.body.title, 
            content: req.body.content
        }
    )
    try{
        await todoTask.save()
        console.log(todoTask)
        res.redirect("/")
    }
})

//Setting up port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))