const request = require('request')
const constants = require('../config')

const weatherData = (address, callback) => {
    const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeatherMap.SECRET_KEY
    console.log(url)


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Cant fetch data from Open Weather API", undefined)
        }
        else {
            callback(
                undefined, {
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    })

}

module.exports = weatherData