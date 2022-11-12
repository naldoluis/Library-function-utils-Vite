import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col, Card, Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faEnvelope, faLock, faUndo } from '@fortawesome/free-solid-svg-icons'
import { authenticateUser } from '../../services'

const Login = props => {
  const [error, setError] = useState()
  const [show, setShow] = useState(false)

  const initialState = { email: "", password: "" }

  const [user, setUser] = useState(initialState)

  const credentialChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const dispatch = useDispatch()

  const validateUser = () => {
    dispatch(authenticateUser(user.email, user.password))
      .then(response => {
        console.log(response.data)
        return props.history.push("/home")
      })
      .catch(error => {
        console.log(error.message)
        setShow(false)
        resetLoginForm()
        setError(" • Email or password invalid 👎")
     })
  }

  const resetLoginForm = () => {
    setUser(initialState)
  }

  return (
    <Row className="justify-content-md-center">
      <Col xs={5}>
        {show && props.message && (
          <Alert variant="success" onClose={() => setShow(true)} dismissible>
            {props.message}
          </Alert>
        )}
        {show && error && (
          <Alert variant="danger" onClose={() => setShow(true)} dismissible>
            {error}
          </Alert>
        )}
        <Card className="border border-dark bg-dark text-white">
          <Card.Header>
            <FontAwesomeIcon icon={faSignInAlt}/> Login
          </Card.Header>
          <Card.Body>
          <div>
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
              </div>
              <div>
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
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={credentialChange}
                    className="input-password"
                    placeholder="Enter Password"
                  />
                </InputGroup>
              </Form.Group>
              </div>
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
    </Row>
  )
}
export default Login