import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap'
import { BASE_URL } from '../../utils/requests'
import '../../assets/css/Style.css'

class Store extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      currentPage: 1,
      booksPerPage: 5
    }
  }

  componentDidMount() {
    this.findAllBooksStore(this.state.currentPage)
  }

  findAllBooksStore(currentPage) {
    currentPage -= 1
    axios(`${BASE_URL}/store?pageNumber=` + currentPage + "&pageSize=" + this.state.booksPerPage + "&sortBy=price&sortDir=" + this.state.sortDir)
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
        this.props.history.push("/")
     })
  }

  changePage = event => {
    let targetPage = parseInt(event.target.value)
    if (this.state.search) {
      this.searchData(targetPage)
    } else {
      this.findAllBooksStore(targetPage)
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
    const { books } = this.state

  return (
      <Card style={{ background: "#393939", width: "1200px", marginLeft: "-35px", border: ".5px solid #373737" }}>
        <Card.Header>
          <b style={{ color: "#fff", fontWeight: "400" }}>
            <FontAwesomeIcon icon={faBook}/> Edition Limited</b>
         <Card.Body className="row" style={{ overflowY: "scroll", height: "485px" }}>
          {books.length === 0 ? (
            <div>
              <b  style={{ color: "#fff", fontWeight: "400" }} colSpan="7">No Books Available.</b>
            </div>
          ) : (
           books.map(book => (
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0" key={book.id}>

             <img className="card-photo" src={book.photo}/>
                <h6 className="card-title">{book.title}</h6>
                  <div className="card-desc">{book.genre}</div>
                       <button className="purchase-button">Buy</button>
                  </div>
               ))
             )}

          </Card.Body>
          {books.length > 0 ? (
            <Card.Footer style={{ textAlign: "right" }}>
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

const mapStateToProps = state => {
  return {
    bookObject: state.book
  }
}
export default connect(mapStateToProps)(Store)