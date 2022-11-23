import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import '../../components/Store/test.css'

class Store extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  initialState = { id: "", title: "Spring in Actions", author: "Craig Walls", photo: "https://images-na.ssl-images-amazon.com/images/I/51gHy16h5TL.jpg", isbn: "89127398679", price: "99.00" }

  findBookById = bookId => {
    this.props.fetchBook(bookId)
      let book = this.props.bookObject.book
      if (book != null) {
        this.setState({
          id: book.id,
          title: book.title,
          author: book.author,
          photo: book.photo,
          isbn: book.isbn,
          price: book.price
        })
      }}

  render() {
    const { title, author, photo, isbn, price } = this.state

    return (
      <Card style={{ background: "#393939" }} className="border-dark">
        <Card.Header>
         <b style={{ color: "#fff", fontWeight: "400" }}>
           <FontAwesomeIcon icon={faBook}/> Edition Limited</b>
           <Card.Body style={{ overflowY: "scroll", height: "580px" }}>
            <div className="row">

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                <img className="card-photo" src={photo}/>
                <div className="card-title">
                  <h6>{title}</h6>
                  <div className="card-desc">{author}</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
                <img className="card-photo" src='https://images.manning.com/720/960/resize/book/d/2ea186d-c683-4d54-95f9-cca25b6fe49e/bauer2.png'/>
                <div className="card-title">
                  <h6>Java Persistence</h6>
                  <div className="card-desc">Christian Bauer</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
                <img className="card-photo" src='https://images.manning.com/720/960/resize/book/6/3e9d5ed-4155-466d-ab46-538bb355948d/gsmith2.png'/>
                <div className="card-title">
                  <h6>Grails in Action</h6>
                  <div className="card-desc">Glen Smith</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
                <img className="card-photo" src='https://images.manning.com/720/960/resize/book/6/bb80688-f898-4df7-838a-253b1de123c4/Walls-SpringBoot-HI.png'/>
                <div className="card-title">
                  <h6>Spring Boot in Actions</h6>
                  <div className="card-desc">Craig Walls</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
                <img className="card-photo" src='https://m.media-amazon.com/images/I/71eY7tYDS4L.jpg'/>
                <div className="card-title">
                  <h6>Microservices Patterns</h6>
                  <div className="card-desc">Chris Richardson</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
                <img className="card-photo" src='https://images.manning.com/book/8/809fab1-8912-4fb7-b39e-f49844525807/Bruce-Microservices-HI.png'/>
                <div className="card-title">
                  <h6>Java Persistence</h6>
                  <div className="card-desc">Christian Bauer</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
                <img className="card-photo" src='https://images-na.ssl-images-amazon.com/images/I/417zLTa1uqL._SX397_BO1,204,203,200_.jpg'/>
                <div className="card-title">
                  <h6>Spring Microservices</h6>
                  <div className="card-desc">John Carnell</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
                <img className="card-photo" src='https://images.manning.com/book/e/65fff7e-bc06-44d4-b4bd-9dd311a8d135/Horsdal-Microservices-2ed-HI.png'/>
                <div className="card-title">
                  <h6>Microservices in.Net</h6>
                  <div className="card-desc">Christian Horsdal</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
                <img className="card-photo" src='https://images.manning.com/book/8/b060324-0567-4c7b-b918-de2cf83d52ff/Davis-BM-HI.png'/>
                <div className="card-title">
                  <h6>Bootstrapping</h6>
                  <div className="card-desc">Ashley Davis</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
                <img className="card-photo" src='https://images.thuvienpdf.com/RdadOzRvJb.webp'/>
                <div className="card-title">
                  <h6>Unity in Action</h6>
                  <div className="card-desc">Joseph Hocking</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
              <img className="card-photo" src='https://m.media-amazon.com/images/I/71bUthRlRhL.jpg'/>
                <div className="card-title">
                  <h6>Cloud Native</h6>
                  <div className="card-desc">Cornelia Davis</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-0">
                <img className="card-photo" src='https://images.manning.com/264/352/resize/book/7/00b638e-84a6-44b2-b051-6f15469be9ab/cummins.png'/>
                <div className="card-title">
                  <h6>Enterprise OSGI</h6>
                  <div className="card-desc">Holly Cummins</div>
                    <h1></h1>
                  <h6>{isbn}</h6>
                  <div className="card-desc">{price}</div>
                  <button className="purchase-button">Buy</button>
                </div>
              </div>

           </div>
          </Card.Body>
        </Card.Header>
      </Card>
    )
  }
}
export default Store
//                                        🛠          TEST          🔧