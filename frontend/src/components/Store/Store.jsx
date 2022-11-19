import React from 'react'
import { Card } from 'react-bootstrap'
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
      <Card className="border border-dark bg-dark">
        <Card.Header>
          <h5 className="text-light">Edition Limited</h5>
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

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
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

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
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

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
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

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
              <img className="card-photo" src='https://images-na.ssl-images-amazon.com/images/I/51gHy16h5TL.jpg'/>
              <div className="card-title">
                <h6>Spring in Actions</h6>
                <div className="card-desc">Craig Walls</div>
                  <h1></h1>
                 <h6>{isbn}</h6>
                <div className="card-desc">{price}</div>
                <button className="purchase-button">Buy</button>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
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

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
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

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
              <img className="card-photo" src='https://images.manning.com/720/960/resize/book/6/bb80688-f898-4df7-838a-253b1de123c4/Walls-SpringBoot-HI.png'/>
              <div className="card-title">
                <h6>Spring in Actions</h6>
                <div className="card-desc">Craig Walls</div>
                  <h1></h1>
                 <h6>{isbn}</h6>
                <div className="card-desc">{price}</div>
                <button className="purchase-button">Buy</button>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
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

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
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

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
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

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
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

          </div>
        </Card.Header>
      </Card>
    )
  }
}
export default Store

//                                        🛠          TEST          🔧