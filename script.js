const express = require('express')
const app = express()
var list = []
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.get('/', (req,res) => {
    res.render('anxx.ejs')
})

app.post('/anshika', (req,res) => {
    var listelement = req.body.LIST 
    list.push(listelement)
    res.send(listelement + " added to the list.")
})

app.get('/checkList', (req,res) => {
    res.send("HERE IS YOUR LIST " + list)
})

app.listen(3000, () => {
    console.log("We're listening to you miss Gupta")
})