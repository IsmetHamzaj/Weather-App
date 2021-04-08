const expres = require('express')
const path = require('path')
const hbs = require('hbs')
// const request = require('request')
const weatherData = require('../utils/weatherData')

const app = expres() // serveri

// Thirrja e path-it (Define Path)
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partial')


// Setup per perdorimin e file-ve
app.set('view engine', 'hbs');
app.set('views', viewsPath) // file-at dinamik
hbs.registerPartials(partialsPath)

// Setup-i per file statik
app.use(expres.static(publicDirectoryPath))




// get Home Page: url/ localhost:3000 = www.vardona.com
app.get('', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Ismet Hamzaj"
    })
})

// URL : localhost:3000/ndihme = www.vardona.com/ndihme
app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "Ismet Hamzaj",
        helpText: "Ask of our agent for help"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        name: "Ismet Hamzaj",
        img: "/images/foto.png"
    })
})

// app.get('/weather', (req, res) => {

//     if (!req.query.address) {
//         return res.send({
//             error: 'You must provide an address'
//         })
//     }

//     console.log(req.query.address)
//     res.send({
//         forecast: "It raining",
//         location: "Kosovo",
//         address: req.query.address
//     })
// })

// localhost:3000/weather?address=Prizen
app.get('/weather', (req, res) => {
    const address = req.query.address
    if (!address) {
        return res.send({
            error: "You must enter address"
        })
    }

    weatherData(address, (error, { temperature, description, cityName } = {}) => {
        if (error) {
            return res.send({
                error
            })
        }
        console.log(temperature, description, cityName);
        res.send({
            temperature,
            description,
            cityName
        })
    })
});

// app.get('/products', (req, res) => {
//     if (!req.query.search) {
//         return res.send({
//             error: "You must choose a product"
//         })
//     }

//     console.log(req.query.search)
//     res.send({
//         // key:    value
//         products: ['pc', 'maus']
//     })
// })


app.get('*', (req, res) => {
    res.render('404', {})
})




//localhost:3000/help
app.listen(3000, () => {
    console.log('Server po ngon')
})