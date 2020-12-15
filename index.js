const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended:false}))


mongoose.connect('mongodb://127.0.0.1:27017/').then(() => {
    console.log("We\'re connected by heart.")
})

var schema = mongoose.Schema

var peoples = schema({
    peoplesid : Number,
    peoplesname : String,
    peoplesgoal : String

 })
 var peoplesModel = mongoose.model('people', peoples)
 
 app.post('/addPeople', (req,res) => {
    var id = req.body.id
    var name = req.body.name
    var goal = req.body.goal
    new peoplesModel({peoplesid : id, peoplesname: name, peoplesgoal : goal}).save().then(document => {
        console.log(document)
        res.send("We have your data.")
    })
 })
app.get('/checkPeople' , (req,res) => {
    peoplesModel.find()
    .then(document =>{
        res.send(document)
    })
}) 
app.get('/', (req,res) => {
    res.render('anxxica.ejs')
})

app.listen(3000, () => {
    console.log("I am listening to your heart.")
})