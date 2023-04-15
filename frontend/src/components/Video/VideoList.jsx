import axios from 'axios'
import React from 'react'
import { Button, Card, Spinner, Table } from 'react-bootstrap'
import { i18n } from '../../assets/translate/i18n'

class VideoList extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      currentPage: 1,
      videoPerPage: 8
    }
  }

  componentDidMount() {
    this.findAllVideos(this.state.currentPage)
  }

  findAllVideos(currentPage) {
    currentPage -= 1
    axios("http://localhost:8080/rest/store?page=" + currentPage + "&size=" + this.state.videoPerPage)
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

  firstPage = () => {
    let firstPage = 1
    if (this.state.currentPage > firstPage) {
      if (this.state.search) {
        this.searchData(firstPage)
      } else {
        this.findAllVideos(firstPage)
      }
    }
  }

  prevPage = () => {
    let prevPage = 1
    if (this.state.currentPage > prevPage) {
      if (this.state.search) {
        this.searchData(this.state.currentPage - prevPage)
      } else {
        this.findAllVideos(this.state.currentPage - prevPage)
      }
    }
  }

  nextPage = () => {
    if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.videoPerPage)) {
      if (this.state.search) {
        this.searchData(this.state.currentPage + 1)
      } else {
        this.findAllVideos(this.state.currentPage + 1)
      }
    }
  }

  lastPage = () => {
    let condition = Math.ceil(this.state.totalElements / this.state.videoPerPage)
    if (this.state.currentPage < condition) {
      if (this.state.search) {
        this.searchData(condition)
      } else {
        this.findAllVideos(condition)
      }
    }
  }

  render() {
    const { books, currentPage, totalPages } = this.state

  return (
    <Card className="card-video">
      <Card.Header>
        <b style={{ color: "#fff", fontWeight: 400 }}>
            {i18n.t('navigate.video')} 🎬
          </b>
           <Card.Body className="row" style={{ overflowY: "scroll", height: 500 }}>
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
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" key={book.id}>
                <video poster={book.poster} width="280" height="240" controls>
                  <source src={book.video} type="video/mp4"/>
                </video>
              </div>
             ))
          )}
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
  export default VideoList