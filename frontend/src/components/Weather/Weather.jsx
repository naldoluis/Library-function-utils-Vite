import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { i18n } from '../../assets/translate/i18n'

export default function Weather() {

  const api = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "en",
    units: "metric"
  }

  const city = document.querySelector('.city')
  const date = document.querySelector('.date')
  const container_img = document.querySelector('.container-img')
  const container_temp = document.querySelector('.container-temp')
  const temp_number = document.querySelector('.container-temp div')
  const temp_unit = document.querySelector('.container-temp span')
  const weather_t = document.querySelector('.weather')
  const search_input = document.querySelector('.form-control')
  const search_button = document.querySelector('.btn')
  const low_high = document.querySelector('.low-high')

  window.addEventListener('load', () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(setPosition, showError)
      } else {
          alert('Browser does not support geolocation.')
      }
      function setPosition(position) {
          console.log(position)
          let lat = position.coords.latitude
          let long = position.coords.longitude
          coordResults(lat, long)
      }
      function showError(error) {
        console.log(`Geolocation not found: ${error.message}`)
      }
  })

  function coordResults(lat, long) {
    fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Http error: status ${response.status}`)
            }
            return response.json()
        })
        .catch(error => {
            console.log("Fetch not found: " + error.message)
        })
        .then(response => {
            displayResults(response)
      })
  }

  search_button?.addEventListener('click', function() {
    searchResults(search_input.value)
  })

  search_input?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchResults(search_input.value)
      }
  })

  function searchResults(city) {
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Http error: status ${response.status}`)
            }
            return response.json()
        })
        .catch(error => {
            console.log("Fetch not found: " + error.message)
        })
        .then(response => {
            displayResults(response)
      })
  }

  function displayResults(weather) {
    console.log(weather)

    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let now = new Date()
    date.innerHTML = dateBuilder(now)

    let iconName = weather.weather[0].icon
    container_img.innerHTML = `<img src="./src/assets/icons/weather/${iconName}.svg">`

    var temperature = `${Math.round(weather.main.temp)}`
    temp_number.innerHTML = temperature
    temp_unit.innerHTML = `°c`

    const weather_time = weather.weather[0].description
    weather_t.innerText = capitalizeFirstLetter(weather_time)

    low_high.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
  }

  function dateBuilder(d) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day}, ${date} ${month} ${year}`
  }

    container_temp?.addEventListener('click', changeTemp)

  function changeTemp() {

      var temp_number = temp_number.innerHTML

      if (temp_unit.innerHTML === "°c") {
          let f = (temp_number * 1.8) + 32
          temp_unit.innerHTML = "°f"
          temp_number.innerHTML = Math.round(f)
      }
      else {
          let c = (temp_number - 32) / 1.8
          temp_unit.innerHTML = "°c"
          temp_number.innerHTML = Math.round(c)
      }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      <div style={{ fontSize: 20 }} className="text-white">☂️ {i18n.t('weather.title')}</div>
       <p></p>
        <div className="card-body text-white">
         <div align="center" className="city">🧭 Américo Brasiliense, BR</div>
          <div align="center" className="date">Monday, 25 March 2019</div>
           <div className="container-img my-2">
            <img src="./src/assets/icons/weather/unknown.svg"/></div>
            <div className="container-temp mx-4">
            <div>25</div>
            <span>°c</span>
           </div>
          <div align="center" className="weather py-2">{i18n.t('weather.situation')}</div>
         <div align="center" className="low-high">20°c ☀️ / 19°c 🌙</div>
        </div>
        <div className="input-group">
         <input className="form-control bg-dark text-white" placeholder={i18n.t('weather.input')} aria-label="Recipient's username" aria-describedby="button-addon2"/>
         <div className="card-footer">
          <button style={{ marginTop: -18 }} className="btn btn-outline-success text-white bg-success" type="button" id="button-addon2">
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </div>
      </div>
    </>
  )}