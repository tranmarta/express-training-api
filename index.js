const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hello from Nerdbord!')
})

app.listen(PORT, () => {
    console.log('Server listening on port 3000')
})

fetch(trains.json)
.then(data =>
    {
        [
            {
              "id": "1",
              "trainExpressName": "Shinkansen",
              "countryOfOrigin": "Japan",
              "yearOfConstruction": "1964",
              "maxKilometerPerHour": "320",
              "destinationFrom": "Tokyo",
              "destinationTo": "Osaka"
            },
            {
              "id": "2",
              "trainExpressName": "Eurostar",
              "countryOfOrigin": "United Kingdom",
              "yearOfConstruction": "1994",
              "maxKilometerPerHour": "320",
              "destinationFrom": "London",
              "destinationTo": "Paris"
            },
            {
              "id": "3",
              "trainExpressName": "TGV",
              "countryOfOrigin": "France",
              "yearOfConstruction": "1978",
              "maxKilometerPerHour": "574.8",
              "destinationFrom": "Paris",
              "destinationTo": "Marseille"
            },
            {
              "id": "4",
              "trainExpressName": "ICE",
              "countryOfOrigin": "Germany",
              "yearOfConstruction": "1985",
              "maxKilometerPerHour": "300",
              "destinationFrom": "Frankfurt",
              "destinationTo": "Munich"
            },
            {
              "id": "5",
              "trainExpressName": "Alfa Pendular",
              "countryOfOrigin": "Portugal",
              "yearOfConstruction": "1998",
              "maxKilometerPerHour": "220",
              "destinationFrom": "Lisbon",
              "destinationTo": "Porto"
            },
            {
              "id": "6",
              "trainExpressName": "AVE",
              "countryOfOrigin": "Spain",
              "yearOfConstruction": "1992",
              "maxKilometerPerHour": "310",
              "destinationFrom": "Madrid",
              "destinationTo": "Barcelona"
            },
            {
              "id": "7",
              "trainExpressName": "Gatimaan Express",
              "countryOfOrigin": "India",
              "yearOfConstruction": "2016",
              "maxKilometerPerHour": "160",
              "destinationFrom": "Delhi",
              "destinationTo": "Agra"
            },
            {
              "id": "8",
              "trainExpressName": "Harmony Express",
              "countryOfOrigin": "China",
              "yearOfConstruction": "2010",
              "maxKilometerPerHour": "350",
              "destinationFrom": "Beijing",
              "destinationTo": "Shanghai"
            },
            {
              "id": "9",
              "trainExpressName": "Hikari",
              "countryOfOrigin": "Japan",
              "yearOfConstruction": "1968",
              "maxKilometerPerHour": "300",
              "destinationFrom": "Tokyo",
              "destinationTo": "Shin-Osaka"
            },
            {
              "id": "10",
              "trainExpressName": "Trans-Siberian Railway",
              "countryOfOrigin": "Russia",
              "yearOfConstruction": "1891",
              "maxKilometerPerHour": "60",
              "destinationFrom": "Moscow",
              "destinationTo": "Vladivostok"
            }
          ]
          
    })