import { useEffect } from 'react'

export default function DigitalWatch() {

  useEffect(() => {
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')

    let clock = setInterval(function time() {
      let dateToday = new Date()
      let hr = dateToday.getHours()
      let min = dateToday.getMinutes()
      let s = dateToday.getSeconds()

      if (hr < 10) hr = '0' + hr

      if (min < 10) min = '0' + min

      if (s < 10) s = '0' + s

      hours.textContent = hr
      minutes.textContent = min
      seconds.textContent = s
    })
  })

  return (
    <div className="watch">
      <div>
        <span id="hours"></span>:
      </div>
      <div>
        <span id="minutes"></span>:
      </div>
      <div>
        <span id="seconds"></span>
      </div>
    </div>
  )}