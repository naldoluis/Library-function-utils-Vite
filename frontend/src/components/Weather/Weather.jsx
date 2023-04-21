import { i18n } from '../../assets/translate/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
    }
    else {
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
          throw new Error(`http error: status ${response.status}`)
        }
        return response.json()
      })
      .catch(error => {
        alert(error.message)
      })
      .then(response => {
        displayResults(response)
      })
  }

  /* search_button.addEventListener('click', () => {
      searchResults(search_input.value)
    })

  search_input.addEventListener('keypress', enter)
    function enter(event) {
      key = event.keyCode
      if (key === 13) {
        searchResults(search_input.value)
      }
    } */

  function searchResults(city) {
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Http error: status ${response.status}`)
        }
        return response.json()
      })
      .catch(error => {
        alert(error.message)
      })
      .then(response => {
        displayResults(response)
      })
  }

  function displayResults(weather) {
    console.log(weather)

    city.innerText = `${weather.name}, ${weather.sys.country}`

    let now = new Date()
    date.innerText = dateBuilder(now)

    let iconName = weather.weather[0].icon;
    container_img.innerHTML = `<img src="./icons/${iconName}.png">`

    let temperature = `${Math.round(weather.main.temp)}`
    temp_number.innerHTML = temperature
    temp_unit.innerHTML = `°c`

    weather_t = weather.weather[0].description
    weather_t.innerText = capitalizeFirstLetter(weather_t)

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

  //container_temp.addEventListener('click', changeTemp)

  function changeTemp() {
    temp_number = temp_number.innerHTML

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
      <div className="text-white">☂️ Weather
        <p></p>
        <div className="card-body">
          <div className="city">🧭 Américo Brasiliense, BR</div>
          <div className="date">Monday, 25 March 2019</div>
          {/* <div className="container-img">
            <img src="./icons/unknown.png"/>
          </div> */}
          <div className="containex-temp mx-4 my-3">
            <div>🌡 25</div>
            <span>°c</span>
          </div>
          <div className="weather py-2">Overcast</div>
          <div className="low-high">20°c ☀️ / 19°c 🌙</div>
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input type="text" className="form-control bg-light" placeholder="Enter city name" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-warning text-light" type="button" id="button-addon2">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )}