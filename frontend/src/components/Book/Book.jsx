import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faList, faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import { fetchBook, fetchGenres, fetchLanguages, saveBook, updateBook } from '../../services'
import MyToast from '../MyToast'
import iconCam from '../../assets/camera.png'
import iconLang from '../../assets/language.png'

export default function Book(props) {
  const [books, setBooks] = useState([])
  const [show, setShow] = useState(false)

  const initialState = { id: "", title: "", author: "", photo: "", isbn: "", price: "", language: "", genre: "" }

  const { bookId } = useParams()
  
  useEffect(() => {
    if(bookId) {
     findBookById(bookId)
   }
    findAllLanguages()
  }, [])

  const book = useSelector(state => state.book)
  const dispatch = useDispatch()

  const findAllLanguages = () => {
    dispatch(fetchLanguages())
    setTimeout(() => {
      let bookLanguages = books.languages
      if (bookLanguages) {
        setBooks({
          language: [{ value: "", display: "Select Language" }].concat(
            bookLanguages.map(language => {
              return { value: language, display: language }
           }))
        })
        findAllGenres()
      }
    }, 100)
  }

  const findAllGenres = () => {
    dispatch(fetchGenres())
    setTimeout(() => {
      let bookGenres = books.genres
      if (bookGenres) {
        setBooks({
          genre: [{ value: "", display: "Select Genre" }].concat(
            bookGenres.map(genre => {
              return { value: genre, display: genre }
           }))
        })
      }
    }, 100)
  }

  const findBookById = bookId => {
    dispatch(fetchBook(bookId))
    setTimeout(() => {
      let book = props.bookObject.book
      if (book != null) {
        setBooks({
          id: books.id,
          title: books.title,
          author: books.author,
          photo: books.photo,
          isbn: books.isbn,
          price: books.price,
          language: books.language,
          genre: books.genre
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
      language: books.language,
      genre: books.genre
    }

    dispatch(saveBook(bookSaved))
    setTimeout(() => {
      if (books != null) {
        setShow({ show: true, method: "post" })
        setTimeout(() => setBooks({ show: false }), 2300)
      } else {
        setShow({ show: false })
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
      language: books.language,
      genre: books.genre
    }

    dispatch(updateBook(bookEdit))
    setTimeout(() => {
      if (books != null) {
        setShow({ show: true, method: "put" })
        setTimeout(() => setBooks({ show: false }), 2300)
      } else {
        setShow({ show: false })
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
                    pattern="[A-Za-záàâãäéèêëíïîóôõöúùûüýÿřšşćçñžÁÀÂÃÄÉÈÊËÍÏÎÓÔÕÖÚÙÛÜÝŸŘŠŞĆÇÑŽ'/. ]{1,25}"
                    maxLength={25}
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
                    pattern="[A-Za-záàâãäéèêëíïîóôõöúùûüýÿřšşćçñžÁÀÂÃÄÉÈÊËÍÏÎÓÔÕÖÚÙÛÜÝŸŘŠŞĆÇÑŽ'. ]{2,25}"
                    maxLength={25}
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
                    pattern="[0-9]{9}"
                    maxLength={9}
                    name="isbn"
                    value={books.isbn ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white mb-3"
                    placeholder="Enter Book ISBN Number [123456789]"
                  />
                </Form.Group>
                </div>
                <div className="form-row">
                <Form.Group as={Col} controlId="formGridPrice">
                  <Form.Label className="price">Price 💲</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    required
                    name="price"
                    pattern="[0-9]{2,3}.[0-9]{2}"
                    maxLength={6}
                    value={books.price ||''}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                    placeholder="Enter Book Price Ex: 123.45"
                  />
                 </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Language <img className="lang" src={iconLang}/></Form.Label>
                  <Form.Control
                    required
                    as="select"
                    custom="true"
                    name="language"
                    value={books.language}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                  >
                    <option>English</option>
                    <option>Portuguese</option>
                    <option>French</option>
                    <option>Russian</option>
                    <option>Hindi</option>
                    <option>Arabic</option>
                    <option>Spanish</option>
                    <option>Chinese</option>
                    {/* {books.language.map(language => (
                      <option key={language.value} value={language.value}>
                        {language.display}
                      </option>
                    ))} */}
                  </Form.Control>
                 </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Genre 📚</Form.Label>
                  <Form.Control
                    required
                    as="select"
                    custom="true"
                    name="genre"
                    value={books.genre}
                    onChange={bookChange}
                    className="bg-dark border-secondary text-white"
                  >
                    <option>Technology</option>
                    <option>Science</option>
                    <option>History</option>
                    <option>Fantasy</option>
                    <option>Biography</option>
                    <option>Horror</option>
                    <option>Romance</option>
                    {/* {books.genre.map(genre => (
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
                {book.id ? "Update" : "Save"}
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