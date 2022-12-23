import { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Seal from '../../assets/seal.png'

export default function Bonus() {

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.card'), {
      max: 29,
      speed: 1000,
      glare: false,
      "max-glare": 1
    })
  })

  return (
    <>
      <Card style={{ border: "2.6px solid #6b5795", borderRadius: "9px", width: "800px", margin: "auto", background: "#183940" }}>
        <Card.Header>
          <Card.Body className="row" style={{ height: "205px" }}>
            <div>
              <h5 style={{ fontFamily: "Varela Round", fontWeight: "bold", color: "#fff", marginLeft: "34px", padding: "4px" }}>⭐ ⭐ PROMOTIONAL CARD ⭐ ⭐</h5>
              <div style={{ border: ".1px solid #6b5795", height: "200px", width: "420px", background: "#383940", borderRadius: "10px", textAlign: "center" }}>
                <div style={{ fontFamily: "sans-serif", color: "#fff", fontSize: "12.7px" }}>
                  <h4 style={{ margin: "25px", color: "#f5d20c" }}>20% DISCOUNT</h4>
                  <h6>Description : Google Cloud</h6>
                  <h6>JJ Geewax</h6>
                  <img src='https://www.danyprint.com.br/wp-content/uploads/2020/08/codigo-de-barras.png' style={{ width: "150px", height: "50px" }}/>
                </div>
              </div>
            </div>
           <img src='https://m.media-amazon.com/images/I/61J6t27YllL.jpg' style={{ width: "200px", height: "227px", marginLeft: "70px", borderRadius: "2px" }}/>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right", color: "#fff" }}>
            <h6 style={{ fontFamily: "Varela Round", fontSize: "12.4px", paddingTop: "40px" }}>
              Serial Number: 0989-0798-7498-798-697-80.01
              <img src={Seal} style={{ width: "34px", height: "30px", marginRight: "-35px", paddingLeft: "10px" }}/>
            </h6>
          </Card.Footer>
        </Card.Header>
      </Card>
    </>
  )}