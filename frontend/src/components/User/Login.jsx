import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Card, Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeLowVision, faLock, faSignInAlt, faUndo } from '@fortawesome/free-solid-svg-icons'
import { authenticateUser } from '../../services'

export default function Login() {
  const [error, setError] = useState()
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const initialState = { email: "", password: "" }

  const [user, setUser] = useState(initialState)

  const [values, setValues] = useState({
    password: "",
    showPassword: false
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const credentialChange = event => {
    const { name, value } = event.target
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
            <FontAwesomeIcon icon={faSignInAlt}/> Login
          </Card.Header>
          <Card.Body>
          <Form>
              <Form.Group as={Col}>
                <InputGroup>
                <div>
                   <InputGroup.Text className="envelope">
                     <FontAwesomeIcon icon={faEnvelope}/>
                   </InputGroup.Text>
                </div>
                  <FormControl
                    required
                    autoComplete="off"
                    name="email"
                    value={user.email}
                    onChange={credentialChange}
                    className="input-email"
                    placeholder="Enter Email Address"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col}>
                <InputGroup>
                <div>
                   <InputGroup.Text className="lock">
                     <FontAwesomeIcon icon={faLock}/>
                   </InputGroup.Text>
                </div>
                  <FormControl
                    required
                    autoComplete="off"
                    type={values.showPassword ? "text" : "password"}
                    name="password"
                    value={user.password}
                    onChange={credentialChange}
                    className="input-password"
                    style={{ borderStartEndRadius: ".22rem", borderEndEndRadius: ".22rem" }}
                    placeholder="Enter Password"
                  />
                  <b style={{ margin: "15px -18px 0 auto" }}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
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
              <FontAwesomeIcon icon={faSignInAlt}/> Login
            </Button>{" "}
            <Button
              size="sm"
              variant="info"
              onClick={resetLoginForm}
              disabled={user.email.length === 0 && user.password.length === 0}
            >
              <FontAwesomeIcon icon={faUndo}/> Reset
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  )}