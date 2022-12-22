import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookQuran, faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Table } from 'react-bootstrap'
import { BASE_URL } from '../../utils/requests'
import '../../assets/css/Style.css'

class Store extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      currentPage: 1,
      booksPerPage: 8
    }
  }

  componentDidMount() {
    this.findAllBooksStore(this.state.currentPage)
  }

  findAllBooksStore(currentPage) {
    currentPage -= 1
    axios(`${BASE_URL}/store?page=` + currentPage + "&size=" + this.state.booksPerPage)
      .then(response => response.data)
      .then(data => {
        this.setState({
          books: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1
        })
      })
      .catch(error => {
        console.log(error)
        localStorage.removeItem("jwtToken")
     })
  }

  changePage = event => {
    let targetPage = parseInt(event.target.value)
    if (this.state.search) {
      this.searchData(targetPage)
    } else {
      this.findAllBooks(targetPage)
    }
    this.setState({
      [event.target.name]: targetPage
    })
  }

  firstPage = () => {
    let firstPage = 1
    if (this.state.currentPage > firstPage) {
      if (this.state.search) {
        this.searchData(firstPage)
      } else {
        this.findAllBooksStore(firstPage)
      }
    }
  }

  prevPage = () => {
    let prevPage = 1
    if (this.state.currentPage > prevPage) {
      if (this.state.search) {
        this.searchData(this.state.currentPage - prevPage)
      } else {
        this.findAllBooksStore(this.state.currentPage - prevPage)
      }
    }
  }

  nextPage = () => {
    if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.booksPerPage)) {
      if (this.state.search) {
        this.searchData(this.state.currentPage + 1)
      } else {
        this.findAllBooksStore(this.state.currentPage + 1)
      }
    }
  }

  lastPage = () => {
    let condition = Math.ceil(this.state.totalElements / this.state.booksPerPage)
    if (this.state.currentPage < condition) {
      if (this.state.search) {
        this.searchData(condition)
      } else {
        this.findAllBooksStore(condition)
      }
    }
  }

  render() {
    const { books, currentPage, totalPages } = this.state

    return (
      <Card className="card-store">
        <Card.Header>
          <b style={{ color: "#fff", fontWeight: "400" }}>
            <FontAwesomeIcon icon={faBookQuran}/> Edition Limited
          </b>
          <Card.Body className="row" style={{ overflowY: "scroll", height: "485px" }}>
            {books.length === 0 ? (
            <Table bordered hover striped variant="dark">
              <tbody>
                <tr align="center">
                  <td>No Books Available.</td>
                </tr>
              </tbody>
            </Table>
            ) : (
              books.map(book => (
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4"
                 key={book.id}>
                  <img className="card-photo" src={book.photo}/>
                    <h6 className="card-title">{book.title}</h6>
                   <div className="card-desc">{book.genre}</div>
                  <button className="purchase-button"><FontAwesomeIcon icon={faMoneyBills}/> Buy</button>
                </div>
              ))
            )}
          </Card.Body>
          {books.length > 0 ? (
            <Card.Footer style={{ textAlign: "right", color: "#fff" }}>
              <div style={{ float: "left", fontSize: "15px" }}>
                Showing Page {currentPage} of {totalPages}
              </div>
              <Button
                size="sm"
                variant="info"
                onClick={this.firstPage}
              >
              </Button>{" "}
              <Button
                size="sm"
                variant="success"
                onClick={this.prevPage}
              >
              </Button>{" "}
              <Button
                size="sm"
                variant="warning"
                onClick={this.nextPage}
              >
              </Button>{" "}
              <Button
                size="sm"
                variant="danger"
                onClick={this.lastPage}
              >
              </Button>
            </Card.Footer>
          ) : null}
        </Card.Header>
      </Card>
    )}}
export default Store

//=========================================================⛔️====================================================================

//                                             useDispatch and useSelector

/* import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookQuran, faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Table } from 'react-bootstrap'
import { BASE_URL } from '../../utils/requests'
import '../../assets/css/Style.css'

export default function Store() {

  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [booksPerPage, setBooksPerPage] = useState(8)

  useEffect(() => {
    findAllBooksStore(currentPage)
  })

  const findAllBooksStore = currentPage => {
    currentPage -= 1
    axios(`${BASE_URL}/store?page=` + currentPage + "&size=" + booksPerPage)
      .then(response => response.data)
      .then(data => {
        setBooks({
          books: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          setCurrentPage: data.number + 1
        })
      })
      .catch(error => {
        console.log(error)
        localStorage.removeItem("jwtToken")
     })
  }

  const changePage = event => {
    let targetPage = parseInt(event.target.value)
    if (search) {
      searchData(targetPage)
    } else {
      findAllBooks(targetPage)
    }
    setBooks({
      [event.target.name]: targetPage
    })
  }

  const firstPage = () => {
    let firstPage = 1
    if (currentPage > firstPage) {
      if (search) {
        searchData(firstPage)
      } else {
        findAllBooksStore(firstPage)
      }
    }
  }

  const prevPage = () => {
    let prevPage = 1
    if (currentPage > prevPage) {
      if (search) {
        searchData(currentPage - prevPage)
      } else {
        findAllBooksStore(currentPage - prevPage)
      }
    }
  }

  const nextPage = () => {
    if (currentPage < Math.ceil(totalElements / setBooksPerPage)) {
      if (search) {
        searchData(currentPage + 1)
      } else {
        findAllBooksStore(currentPage + 1)
      }
    }
  }

  const lastPage = () => {
    let condition = Math.ceil(this.state.totalElements / setBooksPerPage)
    if (currentPage < condition) {
      if (search) {
        searchData(condition)
      } else {
        findAllBooksStore(condition)
      }
    }
  }

    return (
      <Card className="card-store">
        <Card.Header>
          <b style={{ color: "#fff", fontWeight: "400" }}>
            <FontAwesomeIcon icon={faBookQuran}/> Edition Limited
          </b>
          <Card.Body className="row" style={{ overflowY: "scroll", height: "485px" }}>
            {books.length === 0 ? (
            <Table bordered hover striped variant="dark">
              <tbody>
                <tr align="center">
                  <td>No Books Available.</td>
                </tr>
              </tbody>
            </Table>
            ) : (
              books.map(book => (
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4"
                 key={book.id}>
                  <img className="card-photo" src={book.photo}/>
                    <h6 className="card-title">{book.title}</h6>
                   <div className="card-desc">{book.genre}</div>
                  <button className="purchase-button"><FontAwesomeIcon icon={faMoneyBills}/> Buy</button>
                </div>
              ))
            )}
          </Card.Body>
          {books.length > 0 ? (
            <Card.Footer style={{ textAlign: "right", color: "#fff" }}>
              <div style={{ float: "left", fontSize: "15px" }}>
                Showing Page {currentPage} of {totalPages}
              </div>
              <Button
                size="sm"
                variant="info"
                onClick={firstPage}
              >
              </Button>{" "}
              <Button
                size="sm"
                variant="success"
                onClick={prevPage}
              >
              </Button>{" "}
              <Button
                size="sm"
                variant="warning"
                onClick={nextPage}
              >
              </Button>{" "}
              <Button
                size="sm"
                variant="danger"
                onClick={lastPage}
              >
              </Button>
            </Card.Footer>
          ) : null}
        </Card.Header>
      </Card>
    )} */