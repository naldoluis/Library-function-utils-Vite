import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import authToken from '../utils/authToken'

import { useState } from 'react' //---->
import ModalCustom from './ModalCustom'//---->

export default function Home(props) {
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken)
  }

  const auth = useSelector(state => state.auth)
  const [modalShow, setModalShow] = useState(false) //---->

  return (
    <>
    <Alert style={{ background: "#343A40", color: "#fff", fontSize: "30px", fontWeight: "bold", fontFamily: "sans-serif" }}>
      Welcome to Book Shop <b style={{ color: "#f5d20c", fontSize: "24px", fontWeight: "600" }}>{auth.username}</b>
      <p className='title-home'>Good friends, good books, nutrition, and a sleepy conscience: this is the ideal life.</p>
      <p className='title-home'>-- Mark Twain</p>
    </Alert>

{/* //--------------------------------------------------------------------------> */}
    <button variant="primary" onClick={() => setModalShow(true)}>Open</button>
     <ModalCustom
        show={modalShow}
        onHide={() => setModalShow(false)}/>
      {/* //--------------------------------------------------------------------------> */}
  </>
  )}