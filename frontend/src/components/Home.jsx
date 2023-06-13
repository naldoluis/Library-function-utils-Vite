import { Alert, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faBalanceScale, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { i18n } from '../assets/translate/i18n'
import authToken from '../utils/authToken'
import ModalCustom from './ModalCustom'

export default function Home() {
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken)
  }

  const [modalShow, setModalShow] = useState(false)
  const auth = useSelector(state => state.auth)

  const popover = (
    <Popover style={{ margin: 0 }}>
     <Popover.Header as="h3">💬 Popover top</Popover.Header>
      <Popover.Body>
        {i18n.t('messages.popover')}
      </Popover.Body>
    </Popover>
  )

  const Popovers = () => (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button size="sm" variant="warning">
        {i18n.t('buttons.popover')}
      </Button>
    </OverlayTrigger>
  )

  return (
    <>
      <Alert style={{ background: "#343A40", color: "#fff", fontSize: 30, fontWeight: "bold", fontFamily: "sans-serif", border: ".5px solid #222" }}>
      {i18n.t('home.welcome')} <b style={{ color: "#f5d20c", fontSize: 24, fontWeight: 600 }}>{auth.username} ✔️</b>
        <p className="title-home">{i18n.t('home.phrase')} 🌱</p>
        <p className="title-home">-- Mark Twain</p>
      </Alert>
      <Popovers/>{" "}
      <Button size="sm" variant="success" onClick={() => setModalShow(true)}>
        {i18n.t('buttons.modal')}
      </Button>{" "}
      <Link to={"pdf"} className="pdf" type="button">
        <FontAwesomeIcon icon={faFilePdf}/>
      </Link>{" "}
      <Link to={"calculator"} className="calc-button" type="button">
        <FontAwesomeIcon icon={faCalculator}/>
      </Link>{" "}
      <Link to={"graphic"} className="graphic" type="button">
        <FontAwesomeIcon icon={faBalanceScale}/>
      </Link>
      <div style={{ margin: "-40px 0 0 410px" }}>
        <img style={{ borderRadius: 4, border: "4px solid #fff" }} width="320" src="https://miro.medium.com/v2/resize:fit:1358/1*L_QoAG863l8QvqxpNyBiqw.gif"/>
      </div>
     <ModalCustom show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )}