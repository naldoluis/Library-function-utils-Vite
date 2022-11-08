import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Form, Button, Col, InputGroup, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faPlusSquare, faUndo, faList, faEdit } from '@fortawesome/free-solid-svg-icons'
import { saveBook, fetchBook, updateBook, fetchLanguages, fetchGenres } from '../../services'
import MyToast from '../MyToast'
import iconLang from '../../assets/language.png'

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
    this.state = {
      genres: [],
      languages: [],
      show: false
    }
  }

  initialState = { id: "", title: "", author: "", photo: "https://images-na.ssl-images-amazon.com/images/I/51gHy16h5TL.jpg", isbn: "", price: "", language: "", genre: "" }

  findAllLanguages = () => {
    this.props.fetchLanguages()
    setTimeout(() => {
      let bookLanguages = this.props.bookObject.languages
      if (bookLanguages) {
        this.setState({
          languages: [{ value: "", display: "Select Language" }].concat(
            bookLanguages.map(language => {
              return { value: language, display: language }
            }))
        })
        this.findAllGenres()
      }
    }, 100)
  }

  findAllGenres = () => {
    this.props.fetchGenres()
    setTimeout(() => {
      let bookGenres = this.props.bookObject.genres
      if (bookGenres) {
        this.setState({
          genres: [{ value: "", display: "Select Genre" }].concat(
            bookGenres.map(genre => {
              return { value: genre, display: genre }
            }))
        })
      }
    }, 100)
  }

  findBookById = bookId => {
    this.props.fetchBook(bookId)
    setTimeout(() => {
      let book = this.props.bookObject.book
      if (book != null) {
        this.setState({
          id: book.id,
          title: book.title,
          author: book.author,
          photo: book.photo,
          isbn: book.isbn,
          price: book.price,
          language: book.language,
          genre: book.genre
        })
      }
    }, 1000)
  }

  resetBook = () => {
    this.setState(() => this.initialState)
  }

  submitBook = event => {
    event.preventDefault()
    this.props.saveBook()
    setTimeout(() => {
      if (this.props.bookObject.book != null) {
        this.setState({ show: true, method: "post" })
        setTimeout(() => this.setState({ show: false }), 3000)
      } else {
        this.setState({ show: false })
      }
    }, 2000)
    this.setState(this.initialState)
  }

  updateBook = event => {
    event.preventDefault()
    this.props.updateBook()
    setTimeout(() => {
      if (this.props.bookObject.book != null) {
        this.setState({ show: true, method: "put" })
        setTimeout(() => this.setState({ show: false }), 3000)
      } else {
        this.setState({ show: false })
      }
    }, 2000)
    this.setState(this.initialState)
  }

  bookChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { title, author, photo, isbn, price, language, genre } = this.state

    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            show={this.state.show}
            message={this.state.method === "put" ? "Book Updated Successfully." : "Book Saved Successfully."}
            type={"success"}
          />
        </div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare}/>{" "}
            {this.state.id ? "Update Book" : "Add New Book"}
          </Card.Header>
          <Form
            onReset={this.resetBook}
            onSubmit={this.state.id ? this.updateBook : this.submitBook}
            id="bookFormId"
          >
            <Card.Body>
            <div className="form-row">
                <Form.Group as={Col} controlId="formGridTitle">
                  <Form.Label>Title 📙</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Book Title"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAuthor">
                  <Form.Label>Author ✏️</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    name="author"
                    value={author}
                    onChange={this.bookChange}
                    className={"bg-dark text-white mb-2"}
                    placeholder="Enter Book Author"
                  />
                </Form.Group>
                </div>
                <div className="form-row">
                <Form.Group as={Col} controlId="formGridphoto">
                  <Form.Label>Cover Photo URL 📷</Form.Label>
                  <InputGroup>
                    <Form.Control
                      required
                      autoComplete="off"
                      name="photo"
                      value={photo}
                      onChange={this.bookChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter Book Cover Photo URL"
                    />
                    <div>
                      {this.state.photo !== "" && (
                        <Image src={this.state.photo} roundedRight width="38" height="38"/>
                      )}
                    </div>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridISBN">
                  <Form.Label>ISBN Number ☏</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="number"
                    name="isbn"
                    value={isbn}
                    onChange={this.bookChange}
                    className={"bg-dark text-white mb-2"}
                    placeholder="Enter Book ISBN Number"
                  />
                </Form.Group>
                </div>
                <div className="form-row">
                <Form.Group as={Col} controlId="formGridPrice">
                  <Form.Label>Price 💲</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="number"
                    name="price"
                    value={price}
                    onChange={this.bookChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Book Price"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLanguage">
                  <Form.Label>Language <img className="lang" src={iconLang}/></Form.Label>
                  <Form.Control
                    required
                    as="select"
                    custom
                    onChange={this.bookChange}
                    name="language"
                    value={language}
                    className={"bg-dark text-white"}
                  >
                    {this.state.languages.map(language => (
                      <option key={language.value} value={language.value}>
                        {language.display}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridGenre">
                  <Form.Label>Genre 📚</Form.Label>
                  <Form.Control
                    required
                    as="select"
                    custom
                    onChange={this.bookChange}
                    name="genre"
                    value={genre}
                    className={"bg-dark text-white"}
                  >
                    {this.state.genres.map(genre => (
                      <option key={genre.value} value={genre.value}>
                        {genre.display}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                </div>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave}/>{" "}
                {this.state.id ? "Update" : "Save"}
              </Button>{" "}
              <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo}/> Reset
              </Button>{" "}
              <Link
                style={{ textDecoration: 'none' }}
                type="button" className="link" to="/list">
                <FontAwesomeIcon icon={faList}/> Book List
              </Link>
            </Card.Footer>
          </Form>
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
    saveBook: book => dispatch(saveBook(book)),
    fetchBook: bookId => dispatch(fetchBook(bookId)),
    updateBook: book => dispatch(updateBook(book)),
    fetchLanguages: () => dispatch(fetchLanguages()),
    fetchGenres: () => dispatch(fetchGenres())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Book)