const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const PORT=3001;
const models = require('./models');
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

let parksData=[ ...models.parksData]
console.log(parksData)
/* -----------Root------------ */
app.get('/', (req, res) => {
    res.render('index.ejs', {cities: parksData})
})

/* ------------Park Routes------------ */
app.get('/parks', (req, res) => {
    res.json(models.parksData)
})

app.get('/parks/:cityName/', (req, res) => {
    let cityName = req.params.cityName
    let parks = models.parksData.filter(park => park.city == cityName)
    if (parks.length==0) {
        res.status(404)
        res.json({ message: "No parks found"})
    } else {
        res.json(parks)
    }
})
app.post('/city', (req,res)=>{
    console.log(req.body.cities)
    let parks=models.parksData;
    let dt=parks.filter(d=>d.city==req.body.cities)
    res.render('list.ejs',{cities:dt})

})



app.post('/parks/create', (req, res) => {
    const newPark = new models.Park(req.body.city, req.body.name)
    parksData.push(newPark)
    console.log(parksData)
    res.status(201).send(newPark);

})

/* ------------Cities Routes------------- */
app.get('/cities', (req,res)=>{
    res.json(models.citiesData)
})


app.get('/cities/:cityName/', (req, res) => {
    let cityName = req.params.cityName
    let cities= models.citiesData.find(city => city.city == cityName)
    if (cities===undefined) {
        res.status(404)
        res.json({ message: "No city found"})
    } else {
        res.json(cities)
    }
})

app.post('/cities/create', (req, res) => {
    const newCity = new models.City(req.body.city, req.body.population)
    models.citiesData.append(newCity)
    res.status(201).send(newCity);
})


/* --------------Cinema Routes----------------- */
app.get('/cinemas', (req,res)=> {
    res.json(models.cinemasData)
})

app.get('/cinemas/:cityName/', (req, res) => {
    let cityName = req.params.cityName
    let cinemas = models.cinemasData.filter(cinema => cinema.city == cityName)
    if (cinemas===[]) {
        res.status(404)
        res.json({ message: "No cinemas found"})
    } else {
        res.json(cinemas)
    }
})




/* app.listen(PORT,()=>{
    console.log("Node listening on port "+ PORT)
}) */

module.exports=app
