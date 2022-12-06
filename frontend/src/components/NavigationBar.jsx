import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { logoutUser } from '../services'
import Book from '../assets/Book_icon_1.png'
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
      <Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
        <img src={Book} width="25" height="25"/>
        <b style={{ fontSize: "19px", fontWeight: "500" }}> Book Store</b>
      </Link>
      {auth.isLoggedIn ? userLinks : guestLinks}
        <b className="clock" onClick={clock}>⏱</b>
    </Navbar>
   </>
  )
}