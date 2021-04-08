var fetchWeather = '/weather'

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')


const weatherCondition = document.querySelector('.temperature')
const description = document.querySelector('.description')
const place = document.querySelector('.place')

weatherForm.addEventListener('submit' , (event) => {
    event.preventDefault()
    place.textContent = "Loading..."
    weatherCondition.textContent=""
    description.textContent=""

    
    const localApi = fetchWeather + "?address=" + search.value
    
    fetch(localApi).then( response => {
        response.json().then(data => {
            if(data.error){
                place.textContent = data.error
                weatherCondition.textContent=""
                description.textContent=""
            }
            else{
                place.textContent = data.cityName
                weatherCondition.textContent = data.temperature
                description.textContent = data.description
            }
        })
    })

})