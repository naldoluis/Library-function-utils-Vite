import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Card, Col, Form, InputGroup } from 'react-bootstrap'
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
      .then(() => {
        navigate("/home")
      })
      .catch(error => {
        console.log('Email or password incorrect: ' + error.message)
        setShow(true)
        resetLoginForm()
        setError(" ⛔️ • Email or password invalid !")
     })
  }

  const resetLoginForm = () => {
    setUser(initialState)
  }

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
                  <Form.Control
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
                  <Form.Control
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