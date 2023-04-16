import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Card, Form, FormControl, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeLowVision, faLock, faPhone, faUserPlus, faUndo, faUser } from '@fortawesome/free-solid-svg-icons'
import { registerUser } from '../../services'
import { MyToastUser } from '../MyToast'
import { i18n } from '../../assets/translate/i18n'
import Captcha from '../Captcha'

export default function Register() {

  const initialState = { name: "", email: "", password: "", mobile: "" }

  const [show, setShow] = useState(false)
  const [user, setUser] = useState(initialState)
  const navigate = useNavigate()

  const userChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const [values, setValues] = useState({
    password: "",
    showPassword: false
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const dispatch = useDispatch()

  const saveUser = () => {
    dispatch(registerUser(user))
      .then(() => {
        setShow(true)
        resetRegisterForm()
        setTimeout(() => {
          setShow(false)
          navigate("/login")
        }, 2800)
     })
     .catch(error => console.log('Register failed: ' + error.message))
  }

  function resetRegisterForm() {
    setUser(initialState)
  }

  return (
    <div>
      <div style={{ display: show ? "block" : "none" }}>
        <MyToastUser message={i18n.t('toast.createUserWarn')}/>
      </div>
      <div className="justify-content-md-center form-row">
        <Col xs={5}>
          <Card className="border-dark bg-dark text-white">
            <Card.Header>
              <FontAwesomeIcon icon={faUserPlus}/> {i18n.t('access.register')}
            </Card.Header>
            <Card.Body>
            <Form>
                <Form.Group as={Col}>
                  <InputGroup>
                     <InputGroup.Text className="name">
                       <FontAwesomeIcon icon={faUser}/>
                     </InputGroup.Text>
                    <FormControl
                      autoComplete="off"
                      pattern="[A-Za-za ]{2,25}"
                      maxLength={25}
                      name="name"
                      value={user.name}
                      onChange={userChange}
                      className="input-name"
                      placeholder={i18n.t('input.name')}
                    />
                  </InputGroup>
                </Form.Group>
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
                      onChange={userChange}
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
                      onChange={userChange}
                      className="input-password"
                      style={{ borderStartEndRadius: ".22rem", borderEndEndRadius: ".22rem" }}
                      placeholder={i18n.t('input.password')}
                    />
                    <b style={{ margin: "15px -19.5px 0 auto" }}
                      onClick={handleClickShowPassword}
                   >
                     {values.showPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeLowVision}/>}
                   </b>
                  </InputGroup>
                </Form.Group>
              </Form>
                <Form.Group as={Col}>
                  <InputGroup>
                     <InputGroup.Text className="phone">
                       <FontAwesomeIcon icon={faPhone}/>
                     </InputGroup.Text>
                    <FormControl
                      autoComplete="off"
                      name="mobile"
                      pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                      maxLength={11}
                      value={user.mobile}
                      onChange={userChange}
                      className="input-phone"
                      placeholder={i18n.t('input.phone')}
                    />
                  </InputGroup>
                 <Captcha/>
               </Form.Group>
             </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button
                size="sm"
                variant="success"
                onClick={saveUser}
                disabled={user.email.length === 0 || user.password.length === 0}
              >
                <FontAwesomeIcon icon={faUserPlus}/> {i18n.t('access.register')}
              </Button>{" "}
              <Button
                size="sm"
                variant="info"
                onClick={resetRegisterForm}
              >
                <FontAwesomeIcon icon={faUndo}/> {i18n.t('buttons.reset')}
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </div>
    </div>
  )}