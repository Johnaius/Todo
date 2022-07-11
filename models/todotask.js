const mongoose = require('mongoose')
const todoTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
        
    },
    date: {
        type: Date,
        deafult: Date.now
    }
})