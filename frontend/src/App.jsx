import { i18n } from './assets/translate/i18n'
import { Col, Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Book from './components/Book/Book'
import BookList from './components/Book/BookList'
import Bonus from './components/Bonus/Bonus'
import Clima from './components/Clima/Clima'
import Footer from './components/Footer'
import Help from './components/Help'
import Home from './components/Home'
import Login from './components/User/Login'
import NavigationBar from './components/NavigationBar'
import Register from './components/User/Register'
import News from './components/News/News'
import Store from './components/Store/Store'
import UserList from './components/User/UserList'
import VideoList from './components/Video/VideoList'
import Welcome from './components/Welcome'
import './App.css'

export default function App() {

  return (
    <BrowserRouter>
      <NavigationBar/>
       <Container>
        <div className="form-row">
          <Col lg={12} className="margin-top">
            <Routes>
              <Route path="/" element={<Welcome/>}/>
              <Route path="/help" element={<Help/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/add" element={<Book/>}/>
              <Route path="/edit/:bookId" element={<Book/>}/>
              <Route path="/list" element={<BookList/>}/>
              <Route path="/clima" element={<Clima/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/store" element={<Store/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/bonus" element={<Bonus/>}/>
              <Route path="/user" element={<UserList/>}/>
              <Route path="/video" element={<VideoList/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Login/>}/>
              <Route path="*" element={<h5 style={{ color: "#f0f8ff" }}>{i18n.t('page.notFound')}</h5>}/>
            </Routes>
          </Col>
        </div>
       </Container>
      <Footer/>
    </BrowserRouter>
  )}