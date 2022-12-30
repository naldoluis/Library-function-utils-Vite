import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookQuran, faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Table } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { BASE_URL } from '../../utils/requests'

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

  changePage = e => {
    let targetPage = parseInt(e.target.value)
    if (this.state.search) {
      this.searchData(targetPage)
    } else {
      this.findAllBooks(targetPage)
    }
    this.setState({
      [e.target.name]: targetPage
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

  openModalVanilla = () => {
    var div = document.getElementById("id")
    div.classList.add("modal-show")
  }

  closeModalVanilla = () => {
    var div = document.getElementById("id")
    div.classList.remove("modal-show")
  }

  render() {
    const { books, currentPage, totalPages } = this.state

    return (
      <Card className="card-store">
        <Card.Header>
          <b style={{ color: "#fff", fontWeight: 400 }}>
            <FontAwesomeIcon icon={faBookQuran}/> Edition Limited
          </b>
          <Card.Body className="row" style={{ overflowY: "scroll", height: 480 }}>
            {books.length === 0 ? (
              <Table bordered hover striped variant="dark">
                <tbody>
                  <tr align="center">
                    <td>
                      <Spinner style={{ margin: 200 }} animation="border"></Spinner>
                    </td>
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
                  <button className="purchase-button" onClick={() => this.openModalVanilla()}>
                    <FontAwesomeIcon icon={faMoneyBills}/> Buy
                  </button>
                </div>
               ))
            )}
            <div className="modal" id="id">
              <div className="modal-content border-secondary">
                <h4 align="center">Centered Modal</h4>
                  <h6 style={{ margin: 18 }}>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                  </h6>
                <Button style={{ width: 60, margin: "45px 0 0 230px" }} size="sm" variant="info" onClick={() => this.closeModalVanilla()}>OK</Button>
              </div>
            </div>
          </Card.Body>
          {books.length > 0 ? (
            <Card.Footer style={{ textAlign: "right", color: "#fff" }}>
              <div style={{ float: "left", fontSize: 15 }}>
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