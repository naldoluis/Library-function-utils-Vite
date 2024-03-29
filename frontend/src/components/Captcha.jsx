import { useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { i18n } from '../assets/translate/i18n'
import captchaImg from '../assets/icons/captcha.jpg'

export default function Captcha() {

  const [validate, setValidate] = useState({ codename: "" })

  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  const generateString = length => {
    let result = ''
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const captcha = generateString(6)

  const handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    validate[name] = value
    setValidate(validate)
  }

  const onSubmit = () => {
    let element = document.getElementById("successBTN")
    let inputData = document.getElementById("inputType")
    element.innerHTML = "Checking..."
    inputData.disabled = true
    element.disabled = true

    const myFunctions = () => {
      if (captcha == validate.codename) {
        element.style.background = "green"
        element.innerHTML = "Captcha Verified"
        element.disabled = true
        element.style.cursor = "not-allowed"
        inputData.style.display = "none"
      } else {
        element.style.background = "red"
        element.style.cursor = "not-allowed"
        element.innerHTML = "Incorrect Captcha"
        element.disabled = true

    const captchaVerify = () => {
        element.style.background = "#007bff"
        element.style.cursor = "pointer"
        element.innerHTML = "Verify Captcha"
        element.disabled = false
        inputData.disabled = false
        inputData.value = ""
        }
        setTimeout(captchaVerify, 800)
      }
    }
    setTimeout(myFunctions, 800)
  }

  return (
    <div className="row mt-4">
     <h4 style={{ marginTop: 10, marginLeft: 165, position: "absolute", color: "#444" }}>{captcha}</h4>
      <div className="form-group">
        <img src={captchaImg} height="50" style={{ marginLeft: 130 }}/>
      </div>
       <div className="form-group row">
        <InputGroup.Text style={{ marginTop: 16, marginLeft: 30, width: 40, height: 32 }}>
          <FontAwesomeIcon icon={faKey}/>
        </InputGroup.Text>
          <input className="form-control"
            id="inputType"
            name="codename"
            maxLength={6}
            onChange={handleChange}
            style={{ width: 200, margin: "13px 0 0 10px" }}
            placeholder={i18n.t('input.captcha')}/>
        <Button id="successBTN" onClick={onSubmit} style={{ margin: "12px 0 0 8px", border: "none" }}>
          {i18n.t('buttons.captcha')}
        </Button>
      </div>
    </div>
  )}