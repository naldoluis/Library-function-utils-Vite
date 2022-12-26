import { Alert, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import authToken from '../utils/authToken'
import ModalCustom from './ModalCustom'

export default function Home() {
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken)
  }

  const auth = useSelector(state => state.auth)
  const [modalShow, setModalShow] = useState(false)

  const popover = (
    <Popover>
      <Popover.Header as="h3">💬 Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  )

  const Popovers = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button size="sm" variant="info">Click me to see</Button>
    </OverlayTrigger>
  )

  return (
  <>
    <Alert style={{ background: "#343A40", color: "#fff", fontSize: 30, fontWeight: "bold", fontFamily: "sans-serif" }}>
      Welcome to Book Shop <b style={{ color: "#f5d20c", fontSize: 24, fontWeight: 600 }}>{auth.username}</b>
      <p className="title-home">Good friends, good books, nutrition, and a sleepy conscience: this is the ideal life.</p>
      <p className="title-home">-- Mark Twain</p>
    </Alert>
   <Popovers/>{" "}
    <Button size="sm" variant="primary"
      onClick={() => setModalShow(true)}>Open Modal
    </Button>
     <ModalCustom
       show={modalShow}
       onHide={() => setModalShow(false)}/>
   </>
 )}