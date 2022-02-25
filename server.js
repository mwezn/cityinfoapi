const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const PORT=3001;
const models = require('./models');
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* -----------Root------------ */
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/Client/index.html');
})

/* ------------Park Routes------------ */
app.get('/parks', (req, res) => {
    res.json(models.parks)
})

app.get('/parks/:cityName/', (req, res) => {
    let cityName = req.params.cityName
    let parks = models.parks.filter(park => park.city == cityName)
    if (parks===[]) {
        res.status(404)
        res.json({ message: "No parks found"})
    } else {
        res.json(parks)
    }
})



/* ------------Cities Routes------------- */
app.get('/cities', (req,res)=>{
    res.json(models.cities)
})


app.get('/cities/:cityName/', (req, res) => {
    let cityName = req.params.cityName
    let cities= models.cities.find(city => city.city == cityName)
    if (cities===undefined) {
        res.status(404)
        res.json({ message: "No city found"})
    } else {
        res.json(cities)
    }
})




/* --------------Cinema Routes----------------- */
app.get('/cinemas', (req,res)=> {
    res.json(models.cinemas)
})
app.post('/cinemas', (req,res)=>{
    console.log(req.body['form'])

})


app.get('/cinemas/:cityName/', (req, res) => {
    let cityName = req.params.cityName
    let cinemas = models.cinemas.filter(cinema => cinema.city == cityName)
    if (cinemas===[]) {
        res.status(404)
        res.json({ message: "No cinemas found"})
    } else {
        res.json(cinemas)
    }
})





app.listen(PORT,()=>{
    console.log("Node listening on port "+ PORT)
})

