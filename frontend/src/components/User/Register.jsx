import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Card, Form, FormControl, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeLowVision, faLock, faPhone, faUserPlus, faUndo, faUser } from '@fortawesome/free-solid-svg-icons'
import { registerUser } from '../../services'
import MyToastUser from '../MyToastUser'

export default function Register(props) {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const initialState = { name: "", email: "", password: "", mobile: "" }

  const [user, setUser] = useState(initialState)

  const userChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

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

  const dispatch = useDispatch()

  const saveUser = () => {
    dispatch(registerUser(user))
      .then(response => {
        setShow(true)
        setMessage(response.message)
        resetRegisterForm()
        setTimeout(() => {
          setShow(false)
          navigate("/login")
        }, 2800)
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
        <MyToastUser message="User Saved Successfully."/>
      </div>
      <div className="justify-content-md-center form-row">
        <Col xs={5}>
          <Card className="border-dark bg-dark text-white">
            <Card.Header>
              <FontAwesomeIcon icon={faUserPlus}/> Register
            </Card.Header>
            <Card.Body>
            <Form>
                <Form.Group as={Col}>
                  <InputGroup>
                  <div>
                     <InputGroup.Text className="name">
                       <FontAwesomeIcon icon={faUser}/>
                     </InputGroup.Text>
                  </div>
                    <FormControl
                      autoComplete="off"
                      pattern="[A-Za-za ]{2,25}"
                      maxLength={25}
                      name="name"
                      value={user.name}
                      onChange={userChange}
                      className="input-name"
                      placeholder="Enter Name"
                    />
                  </InputGroup>
                </Form.Group>
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
                      maxLength={16}
                      value={user.password}
                      onChange={userChange}
                      className="input-password"
                      style={{ borderStartEndRadius: ".22rem", borderEndEndRadius: ".22rem" }}
                      placeholder="Enter Password"
                    />
                    <b style={{ margin: "15px -19.5px 0 auto" }}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                   >
                     {values.showPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeLowVision}/>}
                   </b>
                  </InputGroup>
                </Form.Group>
              </Form>
                <Form.Group as={Col}>
                  <InputGroup>
                  <div>
                     <InputGroup.Text className="phone">
                       <FontAwesomeIcon icon={faPhone}/>
                     </InputGroup.Text>
                  </div>
                    <FormControl
                      autoComplete="off"
                      name="mobile"
                      type="tel"
                      pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                      maxLength={11}
                      value={user.mobile}
                      onChange={userChange}
                      className="input-phone"
                      placeholder="Mobile Number (xx) 91234-5678"
                    />
                  </InputGroup>
               </Form.Group>
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
  )}