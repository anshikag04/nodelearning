const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : false}))

mongoose.connect('mongodb://127.0.0.1:27017/', {useNewUrlParser: true, useUnifiedTopology:true})
.then(() => {
    console.log("MongoDB connected.")
})

app.get('/', (req,res) => {
    res.render("anxxica.ejs")
})

var schema = mongoose.Schema

var shoppingLists = schema({
    item1 : String,
    item2 : String,
    item3 : String
})

var shoppingListModel = mongoose.model('shoppingList', shoppingLists)
app.post('/storeList', (req,res) => {
    var it1 = req.body.item1 
    var it2 = req.body.item2 
    var it3 = req.body.item3
    new shoppingListModel({item1 : it1, item2 : it2, item3 : it3}).save().then(createDoc => {
        res.send("WE HAVE YOUR LIST.")
        console.log("Saved list.")
    })
})

app.get('/seelist', (req,res) => {
    shoppingListModel.find().then(docs => {
        res.send(docs)
    })
})

app.listen(3000, () => {
    console.log("We are listening to you.")
})