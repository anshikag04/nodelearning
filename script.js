const express = require('express')
const app = express()
 app.get('/', function(req,res){
    res.send("hello world!")
 })
app.set('view engine', 'ejs')
 app.get('/anshika', function(req,res) {
     res.send("this is my nodeday-2.")
 })
 app.get('/axxu', function(req,res) {
    res.render('anxx.ejs', {
        axxu: 'anxxica'
    })
 })
 app.listen(3000, () => {
     console.log("server is listening at 3000")
 })