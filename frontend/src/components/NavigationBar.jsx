import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { logoutUser } from '../services'
import MyToastTimer from './MyToastTimer'
import MyToastOut from './MyToastOut'

export default function NavigationBar() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [exit, setExit] = useState(false)

  const logout = () => {
    dispatch(logoutUser())
    setExit(true)
    setTimeout(() => {
      setExit(false)
    }, 2300)
  }

  const clock = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2300)
  }

  const guestLinks = (
    <>
      <div style={{ display: exit ? "block" : "none" }}>
        <MyToastOut message="User Logged Out Successfully."/>
      </div>
      <div className="mr-auto"></div>
      <Nav className="navbar-right">
        <Link to={"register"} className="nav-link"><FontAwesomeIcon icon={faUserPlus}/> Register</Link>
        <Link to={"login"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt}/> Login</Link>
      </Nav>
    </>
  )

  const userLinks = (
    <>
      <Nav className="mr-auto">
        <Link to={"add"} className="nav-link">Add Book</Link>
        <Link to={"list"} className="nav-link">Book List</Link>
        <Link to={"user"} className="nav-link">User List</Link>
        <Link to={"store"} className="nav-link">Store</Link>
        <Link to={"slide"} className="nav-link">News</Link>
        <Link to={"bonus"} className="nav-link">Bonus</Link>
        <Link to={"help"} className="nav-link">【?】</Link>
         <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi" className="speedometer" style={{ margin: 6.5 }}>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e8e8e8">
             <path fill="#ffd900" d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
             <path d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
           </svg>
         </a>
       </Nav>
      <Nav>
        <Link to={"logout"} className="nav-link" onClick={logout}><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Link>
      </Nav>
    </>
  )

  return (
    <>
      <div style={{ display: show ? "block" : "none" }}>
        <MyToastTimer message="Permanence 20 minuts."/>
      </div>
    <Navbar bg="dark" variant="dark">
      <Link style={{ fontSize: 19, fontWeight: 500 }} to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">📓 Book Store</Link>
      {auth.isLoggedIn ? userLinks : guestLinks}
        <b className="clock" onClick={clock}>⏱</b>
    </Navbar>
   </>
  )
}