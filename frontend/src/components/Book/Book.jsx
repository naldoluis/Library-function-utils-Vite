//=========================================================✅====================================================================
/* import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faList, faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import { fetchBook, fetchGenres, fetchLanguages, saveBook, updateBook } from '../../services'
import MyToast from '../MyToast'
import iconCam from '../../assets/camera.png'
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

  initialState = { id: "", title: "", author: "", photo: "", isbn: "", price: "", language: "", genre: "" }

  componentDidMount() {
    const bookId = this.props.id
    if(bookId) {
     this.findBookById(bookId)
   }
    this.findAllLanguages()
 }

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
          language: book.languages,
          genre: book.genres
        })
      }
    }, 1000)
  }

  resetBook = () => {
    this.setState(() => this.initialState)
  }

  submitBook = event => {
    event.preventDefault()

    const bookSaved = {
      title: this.state.title,
      author: this.state.author,
      photo: this.state.photo,
      isbn: this.state.isbn,
      price: this.state.price,
      language: this.state.languages,
      genre: this.state.genres
    }

    this.props.saveBook(bookSaved)
    setTimeout(() => {
      if (this.props.bookObject.book != null) {
        this.setState({ show: true, method: "post" })
        setTimeout(() => this.setState({ show: false }), 2300)
      } else {
        this.setState({ show: false })
      }
    }, 2000)
    this.setState(this.initialState)
  }

  updatedBook = event => {
    event.preventDefault()

    const bookEdit = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      photo: this.state.photo,
      isbn: this.state.isbn,
      price: this.state.price,
      language: this.state.languages,
      genre: this.state.genres
    }

    this.props.updateBook(bookEdit)
    setTimeout(() => {
      if (this.props.bookObject.book != null) {
        this.setState({ show: true, method: "put" })
        setTimeout(() => this.setState({ show: false }), 2300)
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
            message={this.state.method === "put" ? "Book Updated Successfully." : "Book Saved Successfully."}
            type="success"
          />
        </div>
        <Card className="border-secondary bg-dark text-white">
          <Card.Header>
            <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare}/>{" "}
            {this.state.id ? "Update Book" : "Add New Book"}
          </Card.Header>
          <Form
            onReset={this.resetBook}
            onSubmit={this.state.id ? this.updatedBook : this.submitBook}
            id="bookFormId"
          >
            <Card.Body>
            <div className="form-row">
                <Form.Group as={Col}>
                  <Form.Label>Title 📙</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    name="title"
                    value={title ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                    placeholder="Enter Book Title"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Author ✏️</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    name="author"
                    value={author ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white mb-3"
                    placeholder="Enter Book Author"
                  />
                </Form.Group>
                </div>
                <div className="form-row">
                <Form.Group as={Col}>
                  <Form.Label>Cover Photo URL <img className="cam" src={iconCam}/></Form.Label>
                  <div className="input-group">
                    <Form.Control
                      autoComplete="off"
                      required
                      name="photo"
                      value={photo ||''}
                      onChange={bookChange}
                      className="bg-dark border-secondary text-white"
                      placeholder="Enter Book Cover Photo URL"
                    />
                    <div>
                      {this.state.photo !== "" && (
                        <img src={this.state.photo} width="38" height="38"/>
                      )}
                    </div>
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>ISBN Number ▥</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    type="number"
                    name="isbn"
                    value={isbn ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white mb-3"
                    placeholder="Enter Book ISBN Number"
                  />
                </Form.Group>
                </div>
                <div className="form-row">
                <Form.Group as={Col} controlId="formGridPrice">
                  <Form.Label className="price">Price 💲</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    type="number"
                    name="price"
                    value={price ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                    placeholder="Enter Book Price"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Language <img className="lang" src={iconLang}/></Form.Label>
                  <Form.Control
                    required
                    as="select"
                    custom="true"
                    name="language"
                    value={language}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                  >
                    {this.state.languages.map(language => (
                      <option key={language.value} value={language.value}>
                        {language.display}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Genre 📚</Form.Label>
                  <Form.Control
                    required
                    as="select"
                    custom="true"
                    name="genre"
                    value={genre}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
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
              <Link style={{ textDecoration: 'none' }}
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
export default connect(mapStateToProps, mapDispatchToProps)(Book) */

//=========================================================⛔️====================================================================

//                                             useDispatch and useSelector

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faList, faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import { fetchBook, fetchGenres, fetchLanguages, saveBook, updateBook } from '../../services'
import MyToast from '../MyToast'
import iconCam from '../../assets/camera.png'
import iconLang from '../../assets/language.png'

export default function Book(props) {
  
  const [books, setBooks] = useState([])
  const [genres, setGenres] = useState([])
  const [languages, setLanguages] = useState([])
  const [show, setShow] = useState(false)

  const initialState = { id: "", title: "", author: "", photo: "", isbn: "", price: "", language: "", genre: "" }

  const book = useSelector(state => state.book)
  const dispatch = useDispatch()

  const saveBook = () => {
    dispatch(saveBook(book))
  }

  const fetchBook = () => {
    dispatch(fetchBook(bookId))
  }

  const updateBook = () => {
    dispatch(updateBook(book))
  }

/*   const fetchLanguages = () => {
    dispatch(fetchLanguages())
  }

  const fetchLanguages = () => {
    dispatch(fetchGenres())
  }
 */

/*   useEffect(() => {
    if (bookId) {
      const findBookById(bookId)
      })
    }
    const findAllLanguages()
  }, [] */

  const findAllLanguages = () => {
    books.fetchLanguages()
    setTimeout(() => {
      let bookLanguages = books.languages
      if (bookLanguages) {
        setBooks({
          languages: [{ value: "", display: "Select Language" }].concat(
            bookLanguages.map(language => {
              return { value: language, display: language }
           }))
        })
        findAllGenres()
      }
    }, 100)
  }

  const findAllGenres = () => {
    books.fetchGenres()
    setTimeout(() => {
      let bookGenres = books.genres
      if (bookGenres) {
        setBooks({
          genres: [{ value: "", display: "Select Genre" }].concat(
            bookGenres.map(genre => {
              return { value: genre, display: genre }
           }))
        })
      }
    }, 100)
  }

  const findBookById = bookId => {
    books.fetchBook(bookId)
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
          language: book.languages,
          genre: book.genres
        })
      }
    }, 1000)
  }

  const resetBook = () => {
    setBooks(initialState)
  }

  const submitBook = event => {
    event.preventDefault()

    const bookSaved = {
      title: books.title,
      author: books.author,
      photo: books.photo,
      isbn: books.isbn,
      price: books.price,
      language: books.languages,
      genre: books.genres
    }

    saveBook(bookSaved)
    setTimeout(() => {
      if (books != null) {
        setBooks({ show: true, method: "post" })
        setTimeout(() => setBooks({ show: false }), 2300)
      } else {
        setBooks({ show: false })
      }
    }, 2000)
    setBooks(initialState)
  }

  const updatedBook = event => {
    event.preventDefault()

    const bookEdit = {
      id: books.id,
      title: books.title,
      author: books.author,
      photo: books.photo,
      isbn: books.isbn,
      price: books.price,
      language: books.languages,
      genre: books.genres
    }

    books.updateBook(bookEdit)
    setTimeout(() => {
      if (books != null) {
        setBooks({ show: true, method: "put" })
        setTimeout(() => setBooks({ show: false }), 2300)
      } else {
        setBooks({ show: false })
      }
    }, 2000)
    setBooks(initialState)
  }

  const bookChange = event => {
    const { name, value } = event.target
    setBooks({ ...books, [name]: value })
  }

    return (
      <div>
        <div style={{ display: show ? "block" : "none" }}>
          <MyToast
            message={books.method === "put" ? "Book Updated Successfully." : "Book Saved Successfully."}
            type="success"
          />
        </div>
        <Card className="border-secondary bg-dark text-white">
          <Card.Header>
            <FontAwesomeIcon icon={books.id ? faEdit : faPlusSquare}/>{" "}
            {books.id ? "Update Book" : "Add New Book"}
          </Card.Header>
          <Form
            onSubmit={books.id ? updatedBook : submitBook}
            id="bookFormId"
          >
            <Card.Body>
            <div className="form-row">
                <Form.Group as={Col}>
                  <Form.Label>Title 📙</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    name="title"
                    value={books.title ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                    placeholder="Enter Book Title"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Author ✏️</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    name="author"
                    value={books.author ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white mb-3"
                    placeholder="Enter Book Author"
                  />
                </Form.Group>
                </div>
                <div className="form-row">
                <Form.Group as={Col}>
                  <Form.Label>Cover Photo URL <img className="cam" src={iconCam}/></Form.Label>
                  <div className="input-group">
                    <Form.Control
                      autoComplete="off"
                      required
                      name="photo"
                      value={books.photo ||''}
                      onChange={bookChange}
                      className="bg-dark border-secondary text-white"
                      placeholder="Enter Book Cover Photo URL"
                    />
                    <div>
                      {books.photo !== "" && (
                        <img src={books.photo} width="38" height="38"/>
                      )}
                    </div>
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>ISBN Number ▥</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    type="number"
                    name="isbn"
                    value={books.isbn ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white mb-3"
                    placeholder="Enter Book ISBN Number"
                  />
                </Form.Group>
                </div>
                <div className="form-row">
                <Form.Group as={Col} controlId="formGridPrice">
                  <Form.Label className="price">Price 💲</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    type="number"
                    name="price"
                    value={books.price ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                    placeholder="Enter Book Price"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Language <img className="lang" src={iconLang}/></Form.Label>
                  <Form.Control
                    //required
                    as="select"
                    custom="true"
                    name="language"
                    value={books.language}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                  >
                    {/* {books.languages.map(language => (
                      <option key={language.value} value={language.value}>
                        {language.display}
                      </option>
                    ))} */}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Genre 📚</Form.Label>
                  <Form.Control
                    //required
                    as="select"
                    custom="true"
                    name="genre"
                    value={books.genre}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                  >
                    {/* {books.genres.map(genre => (
                      <option key={genre.value} value={genre.value}>
                        {genre.display}
                      </option>
                    ))} */}
                  </Form.Control>
                </Form.Group>
                </div>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button size="sm" variant="success" type="submit">
                 <FontAwesomeIcon icon={faSave}/>{" "}
                {books.id ? "Update" : "Save"}
              </Button>{" "}
              <Button
                size="sm"
                variant="info"
                onClick={resetBook}
                type="reset"
              >
                <FontAwesomeIcon icon={faUndo}/> Reset
              </Button>{" "}
              <Link style={{ textDecoration: 'none' }}
                type="button" className="link" to="/list">
                 <FontAwesomeIcon icon={faList}/> Book List
              </Link>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    )}