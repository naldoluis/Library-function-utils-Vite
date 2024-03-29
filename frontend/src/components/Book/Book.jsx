import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faListCheck, faFileCirclePlus, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import { fetchBook, saveBook } from '../../services'
import { MyToast } from '../MyToast'
import { i18n } from '../../assets/translate/i18n'
import iconCam from '../../assets/icons/camera.png'
import iconLang from '../../assets/icons/language.png'

export default function Book() {

  const initialState = { id: "", title: "", author: "", photo: "", isbn: "", price: "", language: "", genre: "" }

  const [books, setBooks] = useState(initialState)
  const [show, setShow] = useState(false)
  const [refresh, setRefresh] = useState(0)
  const bookObject = useSelector(state => state.book)
  const dispatch = useDispatch()

  const { bookId } = useParams()

  useEffect(() => {
    if(bookId) {
      findBookById(bookId)
    }
  }, [])

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
    if (bookObject.book) {
      setShow({ show: true, method: "POST" })
      setTimeout(() => setShow({ show: false }), 2000)
    } else {
      setShow({ show: false })
    }
  }

  const updatedBook = e => {
    e.preventDefault()

    axios.put("http://localhost:8080/rest/books/" + bookId, books)
      .then(() => {
        setBooks(initialState)
        setRefresh(refresh + 1)
      })
      .catch(error => console.log('Authorization failed: ' + error.message))
    if(bookObject.book) {
      setShow({ show: true, method: "PUT" })
      setTimeout(() => setShow({ show: false }), 2000)
    } else {
      setShow({ show: false })
    }
  }

  const bookChange = e => {
    setBooks({ ...books, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div style={{ display: show ? "block" : "none" }}>
        <MyToast
          message={show.method === "PUT" ? i18n.t('toast.bookUpdate') : i18n.t('toast.bookSave')} type="success"/>
      </div>
      <Card className="border-secondary bg-dark text-white">
       <Card.Header>
        <FontAwesomeIcon icon={books.id ? faEdit : faFileCirclePlus}/>{" "}
          {books.id ? i18n.t('navigate.editBook') : i18n.t('navigate.newBook')}
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
                  pattern="[A-Za-záàâãäéèêëíïîóôõöúùûüýÿřšşćçñžÁÀÂÃÄÉÈÊËÍÏÎÓÔÕÖÚÙÛÜÝŸŘŠŞĆÇÑŽ. ']{1,25}"
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
                  pattern="[A-Za-záàâãäéèêëíïîóôõöúùûüýÿřšşćçñžÁÀÂÃÄÉÈÊËÍÏÎÓÔÕÖÚÙÛÜÝŸŘŠŞĆÇÑŽ. ']{2,25}"
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
            >
              <FontAwesomeIcon icon={faUndo}/> {i18n.t('buttons.reset')}
            </Button>{" "}
            <Link style={{ textDecoration: 'none' }} to="/list" type="button" className="link">
              <FontAwesomeIcon icon={faListCheck}/> {i18n.t('buttons.bookList')}
            </Link>
          </Card.Footer>
        </Form>
      </Card>
    </>
  )}