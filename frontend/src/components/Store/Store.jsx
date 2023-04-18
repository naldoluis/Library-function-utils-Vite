import axios from 'axios'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookQuran, faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Col, Form, Spinner, Table } from 'react-bootstrap'
import { i18n } from '../../assets/translate/i18n'
import { BASE_URL } from '../../utils/requests'

class Store extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      currentPage: 1,
      booksPerPage: 8,
      show: false
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
     .catch(error => console.log('Not Found Books: ' + error.message))
  }

  firstPage = () => {
    let firstPage = 1
    if (this.state.currentPage > firstPage) {
        this.findAllBooksStore(firstPage)
    }
  }

  prevPage = () => {
    let prevPage = 1
    if (this.state.currentPage > prevPage) {
        this.findAllBooksStore(this.state.currentPage - prevPage)
    }
  }

  nextPage = () => {
    if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.booksPerPage)) {
        this.findAllBooksStore(this.state.currentPage + 1)
    }
  }

  lastPage = () => {
    let condition = Math.ceil(this.state.totalElements / this.state.booksPerPage)
    if (this.state.currentPage < condition) {
        this.findAllBooksStore(condition)
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

  openModal() {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  closeModal() {
    this.setState({ show: false })
  }

  render() {
    const { books, currentPage, totalPages } = this.state

    return (
      <Card className="card-store">
        <Card.Header>
          <b style={{ color: "#fff", fontWeight: 400 }}>
            <FontAwesomeIcon icon={faBookQuran}/> {i18n.t('messages.edition')}
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
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 text-white"
                  key={book.id}>
                  <img className="card-photo" src={book.photo}/>
                  <p style={{ margin: "6px 62px 0 0", fontSize: 15, textAlign: "center", fontWeight: 600 }}>{book.title}</p>
                  <p style={{ margin: "1px 59px 0 0", fontSize: 12.5, textAlign: "center" }}>{book.genre}</p>
                  <p style={{ margin: "1px 59px 0 0", fontSize: 12.5, textAlign: "center" }}>{book.language}</p>
                  {/* <button className="purchase-button" onClick={() => this.openModalVanilla()}>
                    <FontAwesomeIcon icon={faMoneyBills}/> Buy
                  </button> */}
                  <button className="purchase-button" onClick={() => this.openModal()}>
                    <FontAwesomeIcon icon={faMoneyBills}/> {i18n.t('buttons.buy')}
                  </button>
                </div>
               ))
            )}
           {this.state.show && <div className="border-secondary" id="modal-container">
            <p className="close-btn" onClick={() => this.closeModal()}>❌</p>
              <div className="modal-body text-white">
               <h4>❐ Centered Modal</h4>
                <p>
                   Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                   dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                   consectetur ac, vestibulum at eros.
                </p>
                <div className="form-row">
                  <Form.Group as={Col}>
                   <Form.Label>{i18n.t('tableBook.title')} 📙</Form.Label>
                    <Form.Control
                      autoComplete="off"
                      required
                      name="title"
                      pattern="[A-Za-záàâãäéèêëíïîóôõöúùûüýÿřšşćçñžÁÀÂÃÄÉÈÊËÍÏÎÓÔÕÖÚÙÛÜÝŸŘŠŞĆÇÑŽ'/. ]{1,25}"
                      maxLength={25}
                      className="bg-white border-secondary text-dark"
                      placeholder={i18n.t('input.book')}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                   <Form.Label>{i18n.t('tableBook.author')} ✏️</Form.Label>
                    <Form.Control
                      autoComplete="off"
                      required
                      name="author"
                      pattern="[A-Za-záàâãäéèêëíïîóôõöúùûüýÿřšşćçñžÁÀÂÃÄÉÈÊËÍÏÎÓÔÕÖÚÙÛÜÝŸŘŠŞĆÇÑŽ'. ]{2,25}"
                      maxLength={25}
                      className="bg-white border-secondary text-dark mb-3"
                      placeholder={i18n.t('input.author')}
                    />
                  </Form.Group>
                  </div>
                  <div className="form-row">
                  <Form.Group as={Col}>
                   <Form.Label>{i18n.t('tableBook.isbn')} ▥</Form.Label>
                    <Form.Control
                      autoComplete="off"
                      required
                      name="isbn"
                      pattern="[0-9]{9}"
                      maxLength={9}
                      className="bg-white border-secondary text-dark mb-3"
                      placeholder={i18n.t('input.isbn')}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                   <Form.Label>{i18n.t('tableBook.price')} 💲</Form.Label>
                    <Form.Control
                      autoComplete="off"
                      required
                      name="price"
                      pattern="[0-9]{2,3}.[0-9]{2}"
                      maxLength={6}
                      className="bg-white border-secondary text-dark"
                      placeholder={i18n.t('input.price')}
                    />
                  </Form.Group>
                </div>
                <div className="btn-container">
                  <button onClick={() => this.closeModal()} style={{ background: "#c3c600", width: 200, fontWeight: 500, borderRadius: 6 }}>{i18n.t('buttons.buy')}</button>
                  <button onClick={() => this.closeModal()} style={{ background: "#c23f17", color: "#fff", fontWeight: 500, width: 200, borderRadius: 6 }}>{i18n.t('buttons.cancel')}</button>
                </div>
              </div>
             </div>}
            <div className="modal" id="id">
              <div className="content-modal">
                <h4 align="center">❐ Centered Modal</h4>
                  <h6 style={{ margin: 20 }}>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                  </h6>
                <Button style={{ width: 60, margin: "45px 0 0 230px" }} size="sm" variant="warning" onClick={() => this.closeModalVanilla()}>OK</Button>
              </div>
            </div>
          </Card.Body>
          {books.length > 0 ? (
            <Card.Footer style={{ textAlign: "right", color: "#fff" }}>
              <div style={{ float: "left", fontSize: 15 }}>
                {i18n.t('page.show')} {currentPage} {i18n.t('page.of')} {totalPages}
              </div>
              <Button size="sm" variant="info"
                onClick={this.firstPage}
              >
              </Button>{" "}
              <Button size="sm" variant="success"
                onClick={this.prevPage}
              >
              </Button>{" "}
              <Button size="sm" variant="warning"
                onClick={this.nextPage}
              >
              </Button>{" "}
              <Button size="sm" variant="danger"
                onClick={this.lastPage}
              >
              </Button>
            </Card.Footer>
          ) : null}
        </Card.Header>
      </Card>
    )}}
export default Store