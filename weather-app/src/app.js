const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { query } = require('express')
const requests = require('request')
const weatherData = require ('../utilities/weatherData')







//Krijimi i serverit
const app = express()










//Thirrja e drejtimit,rruges,path
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname , '../template/views')
const partialsPath = path.join(__dirname , '../template/partial')







// Setup per shfaqjen e fajllave
app.set('view engine', 'hbs');
app.set('views' , viewsPath) //file dinamik
hbs.registerPartials(partialsPath)







// setup per file statik
app.use(express.static(publicDirectoryPath))









// get homepage url/ localhost:3000
app.get(""   , (req , res) => {
    res.render('index' , {
        title: 'Weather',
        name: 'Ismet Hamzaj'
    })
})
// url : localhost:3000/ndihm
app.get("/help" , (req , res) => {
    res.render('help' , {
        title: 'Help',
        name: 'Ismet Hamzaj',
        helpText: 'Feedback our supporters'
    })
})






app.get("/about" , (req , res) => {
    res.render('about' , {
        title: 'About',
        name: 'Ismet Hamzaj',
        img: "/images/foto.png"
    })
})







app.get('/products', (req,res) => {
    if(!req.query.search){
        return res.send({
            error: 'Its not working please use the search'
        })
    }
    console.log(req.query.search)
    res.send({
        products: ['pc' , 'mouse']
    })
})







// app.get('/weather', (req,res) => {
//     if(!req.query.address) {
//         return res.send ({
//             error: "Server cant response"
//         })
//     }
//     console.log(req.query.address)
//     res.send({
//         forecast: "Its raining",
//         location: "Prizren",
//         address:req.query.address,
//     })
// })






app.get('/weather', (req, res) =>{
    const address = req.query.address
    weatherData(address, (result)=>{
        console.log(result)
    })
})







app.get("*" , (req , res) => {
    res.render('404' , {})
})





//caktimi i portit 
app.listen(3000, () =>{
    console.log("Serveri po ndegjon")
})