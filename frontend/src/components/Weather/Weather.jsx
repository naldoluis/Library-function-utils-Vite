export default function Weather() {

  let lat
  let lon
  let temperature = document.querySelector(".temp")
  let summary = document.querySelector(".summary")
  let loc = document.querySelector(".location")
  let icon = document.querySelector(".icon")

  const kelvin = 273

  window.addEventListener("load", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       console.log(position)
        lat = position.coords.latitude
        lon = position.coords.longitude

      const api = "6d055e39ee237af35ca066f35474e9df"

      const base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`

      fetch(base)
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log(data)
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C"
          summary.textContent = data.weather[0].description
          loc.textContent = data.name + "," + data.sys.country
          let icon1 = data.weather[0].icon
          icon.innerHTML = `<img src="icons/${icon1}.svg" style='height:10rem'/>`
        })
      })
    }
  })

  return (
    <>
      <div className="text-white">☂️ Weather
       <p></p>
        <div className="display">
          <div className="icon"></div>
          <p></p>
          <div className="temp">- 20 °C ☀️ / 🌙</div>
          <p></p>
          <div className="summary">summary</div>
          <div className="location" style={{ marginTop: 40 }}>🧭 location = Américo Brasiliense - SP</div>
        </div>
      </div>
    </>
  )}

/* ================================================ WEATHER 2 =================================================

<!-- <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'/>
<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/> -->

HTML

    <>
      <div className="wrapper">
        <section className="input-part">
          <p className="info-txt"></p>
          <div className="content">
            <input type="text" spellcheck="false" placeholder="Enter city name" required>
            <div className="separator"></div>
            <button>Get Device Location</button>
          </div>
        </section>
        <section className="weather-part">
          <img src=""/>
          <div className="temp">
            <span className="numb">_</span>
            <span className="deg">°</span>C
          </div>
          <div className="weather">_ _</div>
          <div className="location">
            <i className='bx bx-map'></i>
            <span>_, _</span>
          </div>
          <div className="bottom-details">
            <div className="column feels">
              <i className='bx bxs-thermometer'></i>
              <div className="details">
                <div className="temp">
                  <span className="numb-2">_</span>
                  <span className="deg">°</span>C
                </div>
                <p>Feels like</p>
              </div>
            </div>
            <div className="column humidity">
              <i className='bx bxs-droplet-half'></i>
              <div className="details">
                <span>_</span>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

CSS

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {margin: 0;padding: 0;box-sizing: border-box;font-family: 'Poppins', sans-serif}
body {display: flex;align-items: center;justify-content: center;min-height: 100vh;background: #43AFFC}
header i {font-size: 0em;cursor: pointer;margin-right: 8px}
::selection {color: #fff;background: #43AFFC}

.input-part button {color: #fff;cursor: pointer;background: #43AFFC;transition: .3s ease}
.input-part button:hover {background: #1d9ffc}
.input-part .info-txt {display: none;font-size: 17px;text-align: center;padding: 12px 10px;border-radius: 7px;margin-bottom: 15px}
.input-part .info-txt.error {color: #721c24;display: block;background: #f8d7da;border: 1px solid #f5c6cb}
.input-part .info-txt.pending {color: #0c5460;display: block;background: #d1ecf1;border: 1px solid #bee5eb}
.input-part input {text-align: center;padding: 0 15px;border: 1px solid #ccc}
.input-part input:is(:focus, :valid) {border: 2px solid #43AFFC}
.input-part input::placeholder {color: #bfbfbf}
.input-part :where(input, button) {width: 100%;height: 55px;border: none;outline: none;font-size: 18px;border-radius: 7px}
.input-part .separator {height: 1px;width: 100%;margin: 25px 0;background: #ccc;position: relative;display: flex;align-items: center;justify-content: center}

.wrapper .weather-part {display: none;margin: 30px 0 0;align-items: center;justify-content: center;flex-direction: column}
.wrapper {width: 400px;background: #fff;border-radius: 7px;box-shadow: 7px 7px 20px rgba(0, 0, 0, .05)}
.wrapper header{display: flex;font-size: 21px;font-weight: 500;color: #43AFFC;padding: 16px 15px;align-items: center;border-bottom: 1px solid #ccc}
.wrapper.active .weather-part {display: flex}
.wrapper.active header i {margin-left: 5px;font-size: 30px}
.wrapper.active .input-part {display: none}
.wrapper .input-part {margin: 20px 25px 30px}

.weather-part img {max-width: 125px}
.weather-part .temp {display: flex;font-weight: 500;font-size: 72px}
.weather-part .temp .numb {font-weight: 600}
.weather-part .temp .deg {font-size: 40px;display: block;margin: 10px 5px 0 0}
.weather-part .weather {font-size: 21px;text-align: center;margin: -5px 20px 15px}
.weather-part .location {display: flex;font-size: 19px;padding: 0 20px;text-align: center;margin-bottom: 30px;align-items: flex-start}
.weather-part .bottom-details {display: flex;width: 100%;justify-content: space-between;border-top: 1px solid #ccc}

.location i {font-size: 22px;margin: 4px 5px 0 0}
.bottom-details .column {display: flex;width: 100%;padding: 15px 0;align-items: center;justify-content: center}

.separator::before {content: "or";color: #b3b3b3;font-size: 19px;padding: 0 15px;background: #fff}
.humidity i {font-size: 37px}

.column i {color: #5DBBFF;font-size: 40px}
.column.humidity {border-left: 1px solid #ccc}
.column .details {margin-left: 3px}
.column .details p {font-size: 14px;margin-top: -6px}

.details .temp, .humidity span {font-size: 18px;font-weight: 500;margin-top: -3px}
.details .temp .deg {margin: 0;font-size: 17px;padding: 0 2px 0 1px}

JAVASCRIPT

  const wrapper = document.querySelector(".wrapper"),
  inputPart = document.querySelector(".input-part"),
  infoTxt = inputPart.querySelector(".info-txt"),
  inputField = inputPart.querySelector("input"),
  locationBtn = inputPart.querySelector("button"),
  weatherPart = wrapper.querySelector(".weather-part"),
  wIcon = weatherPart.querySelector("img"),
  arrowBack = wrapper.querySelector("header i")

  let api

  inputField.addEventListener("keyup", e => {
      if(e.key == "Enter" && inputField.value != "") {
          requestApi(inputField.value)
      }
  })

  locationBtn.addEventListener("click", () => {
      if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(onSuccess, onError)
      } else {
          alert("Your browser not support geolocation api")
      }
  })

  function requestApi(city) {
      api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=your_api_key`
      fetchData()
  }

  function onSuccess(position) {
      const {latitude, longitude} = position.coords
      api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=your_api_key`
      fetchData()
  }

  function onError(error) {
      infoTxt.innerText = error.message
      infoTxt.classList.add("error")
  }

  function fetchData() {
      infoTxt.innerText = "Getting weather details..."
      infoTxt.classList.add("pending")
    fetch(api).then(res => res.json())
      .then(result => weatherDetails(result))
      .catch(() => {
          infoTxt.innerText = "Something went wrong"
          infoTxt.classList.replace("pending", "error")
      })
  }

  function weatherDetails(info) {

    if(info.cod == "404") {
        infoTxt.classList.replace("pending", "error")
        infoTxt.innerText = `${inputField.value} isn't a valid city name`
    } else {
        const city = info.name
        const country = info.sys.country
        const {description, id} = info.weather[0]
        const {temp, feels_like, humidity} = info.main

        if(id == 800) {
            wIcon.src = "icons/clear.svg"
        } else if(id >= 200 && id <= 232) {
            wIcon.src = "icons/storm.svg"
        } else if(id >= 600 && id <= 622) {
            wIcon.src = "icons/snow.svg"
        } else if(id >= 701 && id <= 781) {
            wIcon.src = "icons/haze.svg"
        } else if(id >= 801 && id <= 804) {
            wIcon.src = "icons/cloud.svg"
        } else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
            wIcon.src = "icons/rain.svg"
        }

        weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp)
        weatherPart.querySelector(".weather").innerText = description
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`
        weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like)
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`

        infoTxt.classList.remove("pending", "error")
        infoTxt.innerText = ""

        inputField.value = ""
        wrapper.classList.add("active")
     }
  }

  arrowBack.addEventListener("click", () => {
      wrapper.classList.remove("active")
  })

*/

/* ================================================================================================================ */

{/*

HTML


    <section class="top-banner">
      <div class="container">
        <form>
          <input type="text" placeholder="Search for a city" autofocus>
          <button type="submit">SUBMIT</button>
          <span class="msg"></span>
        </form>
      </div>
    </section>
    <section class="ajax-section">
      <div class="container">
        <ul class="cities"></ul>
      </div>
    </section>
    <footer class="page-footer">
    </footer>

CSS

:root {
  --bg_main: #0a1f44;
  --text_light: #fff;
  --text_med: #53627c;
  --text_dark: #1e2432;
  --red: #ff1e42;
  --darkred: #c3112d;
  --orange: #ff8c00
}

a {color: inherit;text-decoration: none}
* {margin: 0;padding: 0;box-sizing: border-box;font-weight: normal}

button {cursor: pointer}
button,input {border: none;background: none;outline: none;color: inherit}

input {-webkit-appearance: none}
img {display: block;max-width: 100%;height: auto}

ul {list-style: none}
body {font: 1rem/1.3 "Roboto", sans-serif;background: var(--bg_main);color: var(--text_dark);padding: 70px}

.container {width: 100%;max-width: 1200px;margin: 0 auto;padding: 0 15px}
.heading {font-weight: bold;font-size: 4rem;letter-spacing: 0.02em;padding: 0 0 30px 0}

.top-banner {color: var(--text_light)}
.top-banner form {position: relative;display: flex;align-items: center}
.top-banner form input {font-size: 2rem;height: 40px;padding: 5px 5px 10px;border-bottom: 1px solid}
.top-banner form input::placeholder {color: currentColor}
.top-banner form button {font-size: 1rem;font-weight: bold;letter-spacing: 0.1em;padding: 15px 20px;margin-left: 15px;border-radius: 5px;background: var(--red);transition: background 0.3s ease-in-out}
.top-banner form button:hover {background: var(--darkred)}
.top-banner form .msg {position: absolute;bottom: -40px;left: 0;max-width: 450px;min-height: 40px}

.ajax-section {margin: 70px 0 20px}
.ajax-section .cities {display: grid;grid-gap: 32px 20px;grid-template-columns: repeat(4, 1fr)}
.ajax-section .city {position: relative;padding: 40px 10%;border-radius: 20px;background: var(--text_light);color: var(--text_med)}
.ajax-section .city::after {content: '';width: 90%;height: 50px;position: absolute;bottom: -12px;left: 5%;z-index: -1;opacity: 0.3;border-radius: 20px;background: var(--text_light)}
.ajax-section figcaption {margin-top: 10px;text-transform: uppercase;letter-spacing: 0.05em}
.ajax-section .city-temp {font-size: 5rem;font-weight: bold;margin-top: 10px;color: var(--text_dark)}
.ajax-section .city sup {font-size: 0.5em}
.ajax-section .city-name sup {padding: 0.2em 0.6em;border-radius: 30px;color: var(--text_light);background: var(--orange)}
.ajax-section .city-icon {margin-top: 10px;width: 100px;height: 100px}

@media screen and (max-width: 1000px) {
body {padding: 30px}

.ajax-section .cities {grid-template-columns: repeat(3, 1fr)}}

@media screen and (max-width: 700px) {
.heading,
.ajax-section .city-temp {font-size: 3rem}
.ajax-section {margin-top: 20p}

.top-banner form {flex-direction: column;align-items: flex-start}
.top-banner form input,.top-banner form button {width: 100%}
.top-banner form button {margin: 20px 0 0 0}
.top-banner form .msg {position: static;max-width: none;min-height: 0;margin-top: 10px}

.ajax-section .cities {grid-template-columns: repeat(2, 1fr)}}

@media screen and (max-width: 500px) {
body {padding: 15px}
  
.ajax-section .cities {grid-template-columns: repeat(1, 1fr)}}

.page-footer {text-align: right;font-size: 1rem;color: var(--text_light);margin-top: 40px}
.page-footer span {color: var(--red)}

.api {background: #fffbbc;position: fixed;top: 0;left: 0;width: 100%;padding: 10px}
.api a {text-decoration: underline}
.api a:hover {text-decoration: none}


JAVASCRIPT

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { main, name, sys, weather } = data
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`

        const li = document.createElement("li")
        li.classList.add("city")
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `
        li.innerHTML = markup
        list.appendChild(li)
      })
      .catch(() => {
        msg.textContent = "Please search for a valid city"
      })

    msg.textContent = ""
    form.reset()
    input.focus()
  })

    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`

    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`

*/}