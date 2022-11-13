import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLock, faUndo, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { registerUser } from '../../services'
import MyToast from '../MyToast'

const Register = props => {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState("")

  const initialState = { name: "", email: "", password: "", mobile: "" }

  const [user, setUser] = useState(initialState)

  const userChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const dispatch = useDispatch()

  const saveUser = () => {
    dispatch(registerUser(user))
      .then(response => {
        setShow(true)
        setMessage(response.message)
        resetRegisterForm()
        setTimeout(() => {
          setShow(false)
          //props.history.push("/login")
        }, 2000)
      })
      .catch(error => {
        console.log(error)
     })
  }

  const resetRegisterForm = () => {
    setUser(initialState)
  }

  return (
    <div>
      <div style={{ display: show ? "block" : "none" }}>
        <MyToast show={show} message={message} type="success"/>
      </div>
      <div className="justify-content-md-center form-row">
        <Col xs={5}>
          <Card className="border border-dark bg-dark text-white">
            <Card.Header>
              <FontAwesomeIcon icon={faUserPlus}/> Register
            </Card.Header>
            <Card.Body>
            <div>
                <Form.Group as={Col}>
                  <InputGroup>
                  <div>
                      <InputGroup.Text className="name">
                        <FontAwesomeIcon icon={faUser}/>
                      </InputGroup.Text>
                  </div>
                    <FormControl
                      autoComplete="off"
                      name="name"
                      value={user.name}
                      onChange={userChange}
                      className="input-name"
                      placeholder="Enter Name"
                    />
                  </InputGroup>
                </Form.Group>
                </div>
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
                      onChange={userChange}
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
                      onChange={userChange}
                      className="input-password"
                      placeholder="Enter Password"
                    />
                  </InputGroup>
                </Form.Group>
              </div>
              <div>
                <Form.Group as={Col}>
                  <InputGroup>
                  <div>
                      <InputGroup.Text className="phone">
                        <FontAwesomeIcon icon={faPhone}/>
                      </InputGroup.Text>
                  </div>
                    <FormControl
                      autoComplete="off"
                      type="number"
                      name="mobile"
                      value={user.mobile}
                      onChange={userChange}
                      className="input-phone"
                      placeholder="Enter Mobile Number"
                    />
                  </InputGroup>
                </Form.Group>
                </div>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button
                size="sm"
                variant="success"
                onClick={saveUser}
                disabled={user.email.length === 0 || user.password.length === 0}
              >
                <FontAwesomeIcon icon={faUserPlus}/> Register
              </Button>{" "}
              <Button
                size="sm"
                variant="info"
                onClick={resetRegisterForm}
              >
                <FontAwesomeIcon icon={faUndo}/> Reset
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </div>
    </div>
  )
}
export default Register