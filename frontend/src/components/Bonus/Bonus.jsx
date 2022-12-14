import { Card } from 'react-bootstrap'
import { useEffect } from 'react'

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
      <Card style={{ border: "4px solid #6b5795", borderRadius: 20, width: 800, margin: "auto", background: "#183940" }}>
        <Card.Header>
          <Card.Body className="row" style={{ height: 205 }}>
            <div>
              <h5 style={{ fontFamily: 'Varela Round', fontWeight: "bold", color: "#fff", marginLeft: 34, padding: 4 }}>⭐ ⭐ PROMOTIONAL CARD ⭐ ⭐</h5>
              <div style={{ border: '.1px solid #6b5795', height: 200, width: 420, background: "#383940", borderRadius: 10, textAlign: 'center' }}>
                <div style={{ fontFamily: "sans-serif", color: "#fff", fontSize: 12.7 }}>
                  <h4 style={{ margin: 25, color: "#f5d20c" }}>20% DISCOUNT</h4>
                  <h6>Description : Google Cloud</h6>
                  <h6>JJ Geewax</h6>
                  <img src='https://www.danyprint.com.br/wp-content/uploads/2020/08/codigo-de-barras.png' style={{ width: 150, height: 50 }}/>
                </div>
              </div>
            </div>
           <img src='https://m.media-amazon.com/images/I/61J6t27YllL.jpg' style={{ width: 200, height: 227, marginLeft: 70, borderRadius: 5 }}/>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right", color: "#fff" }}>
            <h6 style={{ fontFamily: "Varela Round", fontSize: 12.4, paddingTop: 40 }}>
              Serial Number: 0989-0798-7498-798-697-80.01
              <img src='https://www.helpconsult.com.br/wp-content/uploads/2019/04/selo_siteNOVO.png' style={{ width: 48, height: 40, marginRight: -35, paddingLeft: 10 }}/>
            </h6>
          </Card.Footer>
        </Card.Header>
      </Card>
    </>
  )}