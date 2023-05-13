import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faList, faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import { fetchBook, fetchGenres, fetchLanguages, patchBook, saveBook, updateBook } from '../../services'
import { MyToast } from '../MyToast'
import { i18n } from '../../assets/translate/i18n'
import iconCam from '../../assets/icons/camera.png'
import iconLang from '../../assets/icons/language.png'

export default function Book() {

  const initialState = { id: "", title: "", author: "", photo: "", isbn: "", price: "", language: "", genre: "" }

  const [books, setBooks] = useState([])
  const [show, setShow] = useState(false)
  const bookObject = useSelector(state => state.book)
  const dispatch = useDispatch()

  const { bookId } = useParams()

  useEffect(() => {
    if(bookId) {
      findBookById(bookId)
    }
    //findAllLanguages()
  }, [])

  const findAllLanguages = () => {
    dispatch(fetchLanguages())
      let bookLanguages = bookObject.book
      if(bookLanguages) {
        setBooks({
          books: [{ value: "", display: "Select Language" }].concat(
            bookLanguages.map(language => {
              return { value: language, display: language }
           }))
        })
       findAllGenres()
     }
  }

  const findAllGenres = () => {
    dispatch(fetchGenres())
      let bookGenres = bookObject.book
      if(bookGenres) {
        setBooks({
          books: [{ value: "", display: "Select Genre" }].concat(
            bookGenres.map(genre => {
              return { value: genre, display: genre }
           }))
        })
     }
  }

  const findBookById = bookId => {
    dispatch(fetchBook(bookId))
      let book = bookObject.book
      if(book) {
        setBooks({
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
  }

  const resetBook = () => {
    setBooks(initialState)
  }

  const onSubmit = e => {
    e.preventDefault()

    const bookSaved = {
      title: e.target.title.value,
      author: e.target.author.value,
      photo: e.target.photo.value,
      isbn: e.target.isbn.value,
      price: e.target.price.value,
      language: e.target.language.value,
      genre: e.target.genre.value
    }

    dispatch(saveBook(bookSaved))
      if(bookObject.book) {
        setShow({ show: true, method: "POST" })
        setTimeout(() => setShow({ show: false }), 2000)
      } else {
        setShow({ show: false })
      }
  }

  const updatedBook = e => {
    e.preventDefault()

    const bookEdit = {
      id: e.target.id.value,
      title: e.target.title.value,
      author: e.target.author.value,
      photo: e.target.photo.value,
      isbn: e.target.isbn.value,
      price: e.target.price.value,
      language: e.target.language.value,
      genre: e.target.genre.value
    }

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    fetch("http://localhost:8080/rest/books/" + bookId, {
      method: 'PUT',
      body: JSON.stringify(bookEdit),
      headers
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log('Authorization failed: ' + error.message))
    if(bookObject.book) {
      setShow({ show: true, method: "PUT" })
      setTimeout(() => setShow({ show: false }), 2000)
    } else {
      setShow({ show: false })
    }
  }

  const bookChange = e => {
    const { name, value } = e.target
    setBooks({ ...books, [name]: value })
  }

  return (
    <>
      <div style={{ display: show ? "block" : "none" }}>
        <MyToast
          message={show.method === "PUT" ? "Book Updated Successfully." : "Book Saved Successfully."} type="success"/>
      </div>
      <Card className="border-secondary bg-dark text-white">
       <Card.Header>
        <FontAwesomeIcon icon={books.id ? faEdit : faPlusSquare}/>{" "}
          {books.id ? "Update Book" : "Add New Book"}
        </Card.Header>
         <Form onSubmit={books.id ? updatedBook : onSubmit}>
          <Card.Body>
            <div className="form-row">
              <Form.Group as={Col}>
                <div className="py-2">
                  {i18n.t('tableBook.title')} 📙
                </div>
                <Form.Control
                  required
                  name="title"
                  pattern="[A-Za-záàâãäéèêëíïîóôõöúùûüýÿřšşćçñžÁÀÂÃÄÉÈÊËÍÏÎÓÔÕÖÚÙÛÜÝŸŘŠŞĆÇÑŽ ']{1,25}"
                  maxLength={25}
                  value={books.title || ''}
                  onChange={bookChange}
                  className="bg-dark border-secondary text-white"
                  placeholder={i18n.t('input.book')}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <div className="py-2">
                  {i18n.t('tableBook.author')} ✏️
                </div>
                <Form.Control
                  required
                  name="author"
                  pattern="[A-Za-záàâãäéèêëíïîóôõöúùûüýÿřšşćçñžÁÀÂÃÄÉÈÊËÍÏÎÓÔÕÖÚÙÛÜÝŸŘŠŞĆÇÑŽ ']{2,25}"
                  maxLength={25}
                  value={books.author || ''}
                  onChange={bookChange}
                  className="bg-dark border-secondary text-white mb-2"
                  placeholder={i18n.t('input.author')}
                />
              </Form.Group>
            </div>
            <div className="form-row">
            <Form.Group as={Col}>
              <div className="py-2">
                {i18n.t('tableBook.photoUrl')} <img className="cam" src={iconCam}/>
              </div>
              <div className="input-group">
                <Form.Control
                  required
                  name="photo"
                  value={books.photo || ''}
                  onChange={bookChange}
                  className="bg-dark border-secondary text-white"
                  placeholder={i18n.t('input.photoUrl')}
                />
                 {books.photo !== "" && (
                   <img src={books.photo} width="38" height="38"/>
                 )}
               </div>
              </Form.Group>
              <Form.Group as={Col}>
                <div className="py-2">
                  {i18n.t('tableBook.isbn')} ▥
                </div>
                <Form.Control
                  required
                  pattern="[0-9]{9}"
                  name="isbn"
                  maxLength={9}
                  value={books.isbn || ''}
                  onChange={bookChange}
                  className="bg-dark border-secondary text-white mb-2"
                  placeholder={i18n.t('input.isbn')}
                />
              </Form.Group>
            </div>
            <div className="form-row">
              <Form.Group as={Col}>
                <div className="price py-2">
                  {i18n.t('tableBook.price')} 💲
                </div>
                <Form.Control
                  required
                  name="price"
                  pattern="[0-9]{2,3}.[0-9]{2}"
                  maxLength={6}
                  value={books.price || ''}
                  onChange={bookChange}
                  className="bg-dark border-secondary text-white"
                  placeholder={i18n.t('input.price')}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <div className="py-2">
                  {i18n.t('tableBook.language')} <img className="lang" src={iconLang}/>
                </div>
                <Form.Control
                  required
                  as="select"
                  custom="true"
                  name="language"
                  value={books.language || ''}
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
                  {/* {books.languages.map(language => (
                      <option key={language.value} value={language.value}>
                        {language.display}
                      </option>
                  ))} */}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <div className="py-2">
                  {i18n.t('tableBook.genre')} 📚
                </div>
                <Form.Control
                  required
                  as="select"
                  custom="true"
                  name="genre"
                  value={books.genre || ''}
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
              type="reset"
              variant="info"
              onClick={resetBook}
            >
              <FontAwesomeIcon icon={faUndo}/> {i18n.t('buttons.reset')}
            </Button>{" "}
            <Link style={{ textDecoration: 'none' }} to="/list" type="button" className="link"
            >
              <FontAwesomeIcon icon={faList}/> {i18n.t('buttons.bookList')}
            </Link>
          </Card.Footer>
        </Form>
      </Card>
    </>
  )}