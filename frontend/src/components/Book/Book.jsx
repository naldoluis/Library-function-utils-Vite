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

export default function Book() {

  const initialState = { id: "", title: "", author: "", photo: "", isbn: "", price: "", language: "", genre: "" }

  const [books, setBooks] = useState(initialState)
  const [show, setShow] = useState(false)
  const book = useSelector(state => state.book)
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    if(id) {
     findBookById(id)
   }
    findAllLanguages()
  }, [id])

  const findAllLanguages = () => {
    dispatch(fetchLanguages())
    setTimeout(() => {
      let bookLanguages = book.languages
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
    dispatch(fetchGenres())
    setTimeout(() => {
      let bookGenres = book.genres
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
    dispatch(fetchBook(bookId))
    setTimeout(() => {
      let books = book.id
      if (books != null) {
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
    }, 500)
  }

  const resetBook = () => {
    setBooks(initialState)
  }
  
  const onSubmit = e => {
    e.preventDefault()

    const bookSaved = {
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      photo: e.target.elements.photo.value,
      isbn: e.target.elements.isbn.value,
      price: e.target.elements.price.value,
      language: e.target.elements.language.value,
      genre: e.target.elements.genre.value
    }

    dispatch(saveBook(bookSaved))
    setTimeout(() => {
      if (books != null) {
        setShow({ show: true, method: "post" })
        setTimeout(() => setBooks({ show: false }), 2300)
      } else {
        setShow({ show: false })
      }
    }, 500)
    setBooks(initialState)
  }

  const updatedBook = e => {
    e.preventDefault()

    const bookEdit = {
      id: e.target.elements.id,
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      photo: e.target.elements.photo.value,
      isbn: e.target.elements.isbn.value,
      price: e.target.elements.price.value,
      language: e.target.elements.language.value,
      genre: e.target.elements.genre.value
    }

    dispatch(updateBook(bookEdit))
    setTimeout(() => {
      if (books != null) {
        setShow({ show: true, method: "put" })
        setTimeout(() => setBooks({ show: false }), 2300)
      } else {
        setShow({ show: false })
      }
    }, 500)
    setBooks(initialState)
  }

  const bookChange = e => {
    const { name, value } = e.target
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
            <FontAwesomeIcon icon={id ? faEdit : faPlusSquare}/>{" "}
             {id ? "Update Book" : "Add New Book"}
          </Card.Header>
          <Form onSubmit={id ? updatedBook : onSubmit}
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
                {id ? "Update" : "Save"}
              </Button>{" "}
              <Button
                size="sm"
                type="reset"
                variant="info"
                onClick={resetBook}
               >
                <FontAwesomeIcon icon={faUndo}/> Reset
              </Button>{" "}
              <Link style={{ textDecoration: 'none' }}
                to="/list" type="button" className="link">
                 <FontAwesomeIcon icon={faList}/> Book List
              </Link>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    )}