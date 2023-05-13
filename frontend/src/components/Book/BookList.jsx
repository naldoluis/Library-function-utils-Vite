import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, FormControl, Image, InputGroup, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faList, faSearch, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../utils/requests'
import { i18n } from '../../assets/translate/i18n'
import { deleteBook } from '../../services'
import { MyToast } from '../MyToast'

class BookList extends React.Component {
  constructor() {
    super()
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
    axios(`${BASE_URL}/books?pageNumber=` + currentPage + "&pageSize=" + this.state.booksPerPage + "&sortBy=price&sortDir=" + this.state.sortDir)
      .then(response => response.data)
      .then(data => {
        this.setState({
          books: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1
        })
     })
     .catch(error => console.log('Not Found Books: ' + error.message))
  }

  deleteBook = bookId => {
    this.props.deleteBook(bookId)
    setTimeout(() => {
      if (this.props.bookObject) {
        this.setState({ show: true })
        setTimeout(() => this.setState({ show: false }), 2300)
        this.findAllBooks(this.state.currentPage)
      } else {
        this.setState({ show: false })
      }
    }, 150)
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

  nextPage = () => {
    if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.booksPerPage)) {
      if (this.state.search) {
        this.searchData(this.state.currentPage + 1)
      } else {
        this.findAllBooks(this.state.currentPage + 1)
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

  searchChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  cancelSearch = () => {
    this.setState({ search: "" })
    this.findAllBooks(this.state.currentPage)
  }

  searchData = currentPage => {
    currentPage -= 1
    axios(`${BASE_URL}/books/search/` + this.state.search + "?page=" + currentPage + "&size=" + this.state.booksPerPage)
      .then(response => response.data)
      .then(data => {
        this.setState({
          books: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1
        })
     })
     .catch(error => console.log('Not Found Search: ' + error.message))
  }

  render() {
    const { books, currentPage, totalPages, search } = this.state

    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast message={i18n.t('toast.deleteBook')} type="danger"/>
        </div>
         <Card className="border-secondary bg-dark text-white">
          <Card.Header>
            <div style={{ float: "left" }}>
              <FontAwesomeIcon icon={faList}/> {i18n.t('messages.bookList')}
            </div>
            <div style={{ float: "right" }}>
              <InputGroup size="sm">
                <FormControl
                  placeholder="Search"
                  name="search"
                  value={search}
                  className="border-secondary bg-dark text-white"
                  onChange={this.searchChange}
                />
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
              </InputGroup>
            </div>
          </Card.Header>
           <Card.Body>
            <Table bordered hover striped variant="dark">
              <thead>
                <tr className="table-title">
                  <th className="border-secondary">{i18n.t('tableBook.title')}</th>
                  <th className="border-secondary">{i18n.t('tableBook.author')}</th>
                  <th className="border-secondary">{i18n.t('tableBook.isbn')}</th>
                  <th className="border-secondary" onClick={this.sortData}>
                    {i18n.t('tableBook.price')}{" "}
                    <div className={this.state.sortDir === "asc" ? "arrow arrow-up" : "arrow arrow-down"}
                    >
                      {" "}
                    </div>
                  </th>
                  <th className="border-secondary">{i18n.t('tableBook.language')}</th>
                  <th className="border-secondary">{i18n.t('tableBook.genre')}</th>
                  <th className="border-secondary">{i18n.t('tableBook.action')}</th>
                </tr>
              </thead>
              <tbody>
                {books.length === 0 ? (
                  <tr align="center">
                    <td colSpan="7">{i18n.t('warn.book')}</td>
                  </tr>
                 ) : (
                  books.map(book => (
                    <tr key={book.id}>
                      <td className="table-content border-secondary">
                         <Image src={book.photo} roundedCircle width="32" height="32"/>{" - "}
                        {book.title}
                      </td>
                      <td className="table-content border-secondary" align="center">{book.author}</td>
                      <td className="table-content border-secondary" align="center">{book.isbn}</td>
                      <td className="table-content border-secondary" align="center">💲{book.price.toFixed(2)}</td>
                      <td className="table-content border-secondary" align="center">{book.language}</td>
                      <td className="table-content border-secondary" align="center">{book.genre}</td>
                      <td className="border-secondary" align="center">
                          <Link to={"/edit/" + book.id} className="btn btn-sm edit">
                            <FontAwesomeIcon icon={faEdit}/>
                          </Link>{" "}
                         <Button
                           className="delete"
                           size="sm"
                           variant="outline-info"
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
              <div style={{ float: "left", fontSize: 15 }}>
                {i18n.t('page.show')} {currentPage} {i18n.t('page.of')} {totalPages}
              </div>
              <div style={{ float: "right" }}>
                <InputGroup size="sm">
                    <b className="prev-fast" onClick={this.firstPage}>➤➤</b>
                    <b className="prev-page" onClick={this.prevPage}>➤</b>
                  <FormControl
                    className="border-secondary text-white page-num bg-dark"
                    value={currentPage}
                    onChange={this.changePage}
                   />
                    <b className="next-page" onClick={this.nextPage}>➤</b>
                    <b className="next-fast" onClick={this.lastPage}>➤➤</b>
                </InputGroup>
              </div>
            </Card.Footer>
          ) : null}
        </Card>
      </div>
    )}}

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