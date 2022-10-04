import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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

const App = () => {
  window.onbeforeunload = event => {
    const e = event || window.event
    e.preventDefault()
    if (e) {
      e.returnValue = ""
    }
    return ""
  }

  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
              <Route path="/" exact component={Welcome}/>
              <Route path="/home" exact component={Home}/>
              <Route path="/add" exact component={Book}/>
              <Route path="/edit/:id" exact component={Book}/>
              <Route path="/list" exact component={BookList}/>
              <Route path="/users" exact component={UserList}/>
              <Route path="/register" exact component={Register}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/logout" exact component={() => (<Login message="User Logged Out Successfully."/>)}/>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  )}
export default App