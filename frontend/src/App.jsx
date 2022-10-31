import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Welcome from './components/Welcome'
import Book from './components/Book/Book'
import BookList from './components/Book/BookList'
import UserList from './components/User/UserList'
import Register from './components/User/Register'
import Login from './components/User/Login'
import Footer from './components/Footer'
import Home from './components/Home'
import './App.css'

export default function App() {
  window.onbeforeunload = event => {
    const e = event || window.event
    e.preventDefault()
    if (e) {
      e.returnValue = ""
    }
    return ""
  }

  return (
    <BrowserRouter>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Routes>
              <Route path="/" element={<Welcome/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/add" element={<Book/>}/>
              <Route path="/edit/:id" element={<Book/>}/>
              <Route path="/list" element={<BookList/>}/>
              <Route path="/user" element={<UserList/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={() => <Login message="User Logged Out Successfully."/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </BrowserRouter>
  )}