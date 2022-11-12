import React from 'react'
import { connect } from 'react-redux'
import { Card, Table, Image, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import axios from 'axios'
import MyToast from '../MyToast'
import { deleteBook } from '../../services'
import { BASE_URL } from '../../utils/requests'
import '../../assets/css/Style.css'

class BookList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      search: "",
      currentPage: 1,
      booksPerPage: 6,
      sortDir: "asc"
    }
  }

  sortData = () => {
    setTimeout(() => {
      this.state.sortDir === "asc"
        ? this.setState({ sortDir: "desc" })
        : this.setState({ sortDir: "asc" })
      this.findAllBooks(this.state.currentPage)
    }, 500)
  }

  componentDidMount() {
    this.findAllBooks(this.state.currentPage)
  }

  findAllBooks(currentPage) {
    currentPage -= 1
    axios(`${BASE_URL}/books?pageNumber=` +
          currentPage +
          "&pageSize=" +
          this.state.booksPerPage +
          "&sortBy=price&sortDir=" +
          this.state.sortDir
      )
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

  deleteBook = bookId => {
    this.props.deleteBook(bookId)
    setTimeout(() => {
      if (this.props.bookObject != null) {
        this.setState({ show: true })
        setTimeout(() => this.setState({ show: false }), 2300)
        this.findAllBooks(this.state.currentPage)
      } else {
        this.setState({ show: false })
      }
    }, 500)
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
        this.findAllBooks(firstPage)
      }
    }
  }

  prevPage = () => {
    let prevPage = 1
    if (this.state.currentPage > prevPage) {
      if (this.state.search) {
        this.searchData(this.state.currentPage - prevPage)
      } else {
        this.findAllBooks(this.state.currentPage - prevPage)
      }
    }
  }

  lastPage = () => {
    let condition = Math.ceil(this.state.totalElements / this.state.booksPerPage)
    if (this.state.currentPage < condition) {
      if (this.state.search) {
        this.searchData(condition)
      } else {
        this.findAllBooks(condition)
      }
    }
  }

  nextPage = () => {
    if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.booksPerPage)) {
      if (this.state.search) {
        this.searchData(this.state.currentPage + 1)
      } else {
        this.findAllBooks(this.state.currentPage + 1)
      }
    }
  }

  searchChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  cancelSearch = () => {
    this.setState({ search: "" })
    this.findAllBooks(this.state.currentPage)
  }

  searchData = currentPage => {
    currentPage -= 1
    axios(`${BASE_URL}/books/search/` +
          this.state.search +
          "?page=" +
          currentPage +
          "&size=" +
          this.state.booksPerPage
      )
      .then(response => response.data)
      .then(data => {
        this.setState({
          books: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1
        })
     })
  }

  render() {
    const { books, currentPage, totalPages, search } = this.state

    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message="Book Deleted Successfully."
            type="danger"
          />
        </div>
        <Card className="border border-dark bg-dark text-white">
          <Card.Header>
            <div style={{ float: "left" }}>
              <FontAwesomeIcon icon={faList}/> Book List
            </div>
            <div style={{ float: "right" }}>
              <InputGroup size="sm">
                <FormControl
                  placeholder="Search"
                  name="search"
                  value={search}
                  className="border-light bg-dark text-white"
                  onChange={this.searchChange}
                />
                <div>
                  <Button
                    className="find"
                    size="sm"
                    variant="outline-warning"
                    onClick={this.searchData}
                  >
                    <FontAwesomeIcon icon={faSearch}/>
                  </Button>
                  <Button
                    className="clean-find"
                    size="sm"
                    variant="outline-danger"
                    onClick={this.cancelSearch}
                  >
                    <FontAwesomeIcon icon={faTimes}/>
                  </Button>
                </div>
              </InputGroup>
            </div>
          </Card.Header>
          <Card.Body>
            <Table bordered hover striped variant="dark">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN Number</th>
                  <th onClick={this.sortData}>
                    Price{" "}
                    <div
                      className={
                        this.state.sortDir === "asc"
                          ? "arrow arrow-up"
                          : "arrow arrow-down"
                      }
                    >
                      {" "}
                    </div>
                  </th>
                  <th>Language</th>
                  <th>Genre</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.length === 0 ? (
                  <tr align="center">
                    <td colSpan="7">No Books Available.</td>
                  </tr>
                ) : (
                  books.map(book => (
                    <tr key={book.id}>
                      <td>
                        <Image src={book.photo} roundedCircle width="29" height="29"/>{" "}
                        {book.title}
                      </td>
                      <td align="center">{book.author}</td>
                      <td align="center">{book.isbn}</td>
                      <td align="center">{book.price.toFixed(2)}</td>
                      <td align="center">{book.language}</td>
                      <td align="center">{book.genre}</td>
                      <td align="center">
                          <Link to={"/edit/" + book.id} className="btn btn-sm btn-outline-secondary">
                            <FontAwesomeIcon icon={faEdit}/>
                          </Link>{" "}
                          <Button
                            className="delete"
                            size="sm"
                            variant="outline-secondary"
                            onClick={() => this.deleteBook(book.id)}
                          >
                            <FontAwesomeIcon icon={faTrash}/>
                          </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card.Body>
          {books.length > 0 ? (
            <Card.Footer>
              <div style={{ float: "left" }}>
                Showing Page {currentPage} of {totalPages}
              </div>
              <div style={{ float: "right" }}>
                <InputGroup size="sm">
                  <div>
                    <Button
                      className="first"
                      size="sm"
                      variant="outline-warning"
                      disabled={currentPage === 1 ? true : false}
                      onClick={this.firstPage}
                    >
                      <FontAwesomeIcon icon={faFastBackward}/> First
                    </Button>
                    <Button
                      className="prev"
                      size="sm"
                      variant="outline-success"
                      disabled={currentPage === 1 ? true : false}
                      onClick={this.prevPage}
                    >
                      <FontAwesomeIcon icon={faStepBackward}/> Prev
                    </Button>
                    </div>
                  <FormControl
                    size="sm"
                    className="border-light text-white page-num bg-dark"
                    name="currentPage"
                    value={currentPage}
                    onChange={this.changePage}
                  />
                  <div>
                    <Button
                      className="next"
                      size="sm"
                      variant="outline-success"
                      disabled={currentPage === totalPages ? true : false}
                      onClick={this.nextPage}
                    >
                      <FontAwesomeIcon icon={faStepForward}/> Next
                    </Button>
                    <Button
                      className="last"
                      size="sm"
                      variant="outline-warning"
                      disabled={currentPage === totalPages ? true : false}
                      onClick={this.lastPage}
                    >
                      <FontAwesomeIcon icon={faFastForward}/> Last
                    </Button>
                    </div>
                </InputGroup>
              </div>
            </Card.Footer>
          ) : null}
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bookObject: state.book
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBook: bookId => dispatch(deleteBook(bookId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList)