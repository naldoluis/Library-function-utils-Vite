import { Col, Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Book from './components/Book/Book'
import BookList from './components/Book/BookList'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/User/Login'
import NavigationBar from './components/NavigationBar'
import Register from './components/User/Register'
import Store from './components/Store/Store'
import UserList from './components/User/UserList'
import Welcome from './components/Welcome'
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
        <div className="form-row">
          <Col lg={12} className="margin-top">
            <Routes>
              <Route path="/" element={<Welcome/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/add" element={<Book/>}/>
              <Route path="/edit/:id" element={<Book/>}/>
              <Route path="/list" element={<BookList/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/store" element={<Store/>}/>
              <Route path="/user" element={<UserList/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Login/>}/>
              <Route path="*" element={<h5 className='not-found'>Page not found</h5>}/>
            </Routes>
          </Col>
        </div>
       </Container>
      <Footer/>
    </BrowserRouter>
  )}