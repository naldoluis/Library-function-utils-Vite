import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Card, Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeLowVision, faKey, faLock, faSignInAlt, faUndo } from '@fortawesome/free-solid-svg-icons'
import { authenticateUser } from '../../services'
import { i18n } from '../../assets/translate/i18n'

export default function Login() {

  const initialState = { email: "", password: "" }

  const [error, setError] = useState()
  const [show, setShow] = useState(false)
  const [user, setUser] = useState(initialState)
  const navigate = useNavigate()

  const [values, setValues] = useState({
    password: "",
    showPassword: false
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const credentialChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const dispatch = useDispatch()

  const validateUser = () => {
    dispatch(authenticateUser(user.email, user.password))
      .then(response => {
        console.log(response.data)
        navigate("/home")
      })
      .catch(error => {
        console.log(error.message)
        setShow(true)
        resetLoginForm()
        setError(" ⛔️ • Email or password invalid !")
     })
  }

  const resetLoginForm = () => {
    setUser(initialState)
  }

  useEffect(() => {
    let captchaText = document.querySelector('#captcha')
    var ctx = captchaText.getContext("2d")
    ctx.font = "30px Roboto"
    ctx.fillStyle = "#08e5ff"

    let userText = document.querySelector('#textBox')

    let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9']

    let emptyArray = []

    for (let i = 1; i <= 7; i++) {
        emptyArray.push(alphaNums[Math.floor(Math.random() * alphaNums.length)])
  }

    var c = emptyArray.join('')
    ctx.fillText(emptyArray.join(''),captchaText.width/4, captchaText.height/2)

    userText.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          if (userText.value === c) {
            output.classList.add("correctCaptcha")
            output.innerHTML = "successfully! ✔️"
          } else {
            output.classList.add("incorrectCaptcha")
            output.innerHTML = "captcha invalid! ⛔️"
          }
        }
     })
  }, [])

  return (
    <div className="justify-content-md-center form-row">
      <Col xs={5}>
        {show && error && (
          <Alert variant="secondary" onClose={() => setShow(false)} dismissible>
            {error}
          </Alert>
        )}
        <Card className="border-dark bg-dark text-white">
          <Card.Header>
            <FontAwesomeIcon icon={faSignInAlt}/> {i18n.t('access.login')}
          </Card.Header>
          <Card.Body>
          <Form>
              <Form.Group as={Col}>
               <InputGroup>
                   <InputGroup.Text className="envelope">
                     <FontAwesomeIcon icon={faEnvelope}/>
                   </InputGroup.Text>
                  <FormControl
                    required
                    autoComplete="off"
                    name="email"
                    maxLength={34}
                    value={user.email}
                    onChange={credentialChange}
                    className="input-email"
                    placeholder={i18n.t('input.email')}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col}>
               <InputGroup>
                   <InputGroup.Text className="lock">
                     <FontAwesomeIcon icon={faLock}/>
                   </InputGroup.Text>
                  <FormControl
                    required
                    autoComplete="off"
                    type={values.showPassword ? "text" : "password"}
                    name="password"
                    maxLength={16}
                    value={user.password}
                    onChange={credentialChange}
                    className="input-password"
                    style={{ borderStartEndRadius: ".22rem", borderEndEndRadius: ".22rem" }}
                    placeholder={i18n.t('input.password')}
                  />
                  <b style={{ margin: "15px -19.5px 0 auto" }}
                    onClick={handleClickShowPassword}>
                    {values.showPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeLowVision}/>}
                  </b>
                </InputGroup>
               <h6 style={{ margin: "17px 0 0 172px" }}>Captcha 🗝</h6>
                <InputGroup.Text className="key">
                 <FontAwesomeIcon icon={faKey}/>
                  <div className="center">
                    <div id="captchaBackground">
                      <canvas id="captcha"></canvas>
                      <FormControl maxLength={7} placeholder={i18n.t('input.captcha')} required id="textBox"/>
                    </div>
                  </div>
                </InputGroup.Text>
                {/* <Form.Group>
                   <InputGroup.Text className="key">
                     <FontAwesomeIcon icon={faKey}/>
                   </InputGroup.Text>
								  <div className="col-md-6">
									  <img src="http://localhost:8080/rest/captcha-servlet"/>
								  </div>
								  <div className="col-md-7">
									  <FormControl path="captcha" placeholder={i18n.t('input.captcha')} maxLength={7} required/>
								  </div>
							  </Form.Group> */}
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button
              size="sm"
              variant="success"
              onClick={validateUser}
              disabled={user.email.length === 0 || user.password.length === 0}
            >
              <FontAwesomeIcon icon={faSignInAlt}/> {i18n.t('access.login')}
            </Button>{" "}
            <Button
              size="sm"
              variant="info"
              onClick={resetLoginForm}
              disabled={user.email.length === 0 && user.password.length === 0}
            >
              <FontAwesomeIcon icon={faUndo}/> {i18n.t('buttons.reset')}
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  )}