import { Card } from 'react-bootstrap'
import { useEffect } from 'react'
import { i18n } from '../../assets/translate/i18n'

export default function Bonus() {

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.card'), {
      max: 29,
      speed: 1000,
      glare: false,
      "max-glare": 1
    })
  })

  function generate_string(size, charset) {

    var serial = ""

    for (var i = 0; i < size; i++)
      serial += charset.charAt(Math.floor(Math.random() * charset.length))
    return serial
  }

  function generate_serial() {
    return 'vt '
      + generate_string(6, "0123456789") + '-'
      + generate_string(4, "0123456789") + '-'
      + generate_string(3, "0123456789") + '-'
      + generate_string(2, "0123456789") + '.'
      + generate_string(2, "0123456789")
  }

  return (
    <>
      <Card style={{ border: "4px solid #6b5795", borderRadius: 20, width: 800, margin: "auto", background: "#183940" }}>
        <Card.Header>
          <Card.Body className="row" style={{ height: 205 }}>
            <div>
              <h5 style={{ fontFamily: 'Varela Round', fontWeight: "bold", color: "#fff", marginLeft: 34, padding: 4 }}>⭐ ⭐ {i18n.t('messages.card')} ⭐ ⭐</h5>
              <div style={{ border: '.1px solid #6b5795', height: 200, width: 420, background: "#383940", borderRadius: 10, textAlign: 'center' }}>
                <div style={{ fontFamily: "sans-serif", color: "#fff", fontSize: 12.7 }}>
                  <h4 style={{ margin: 25, color: "#f5d20c" }}>20% {i18n.t('messages.discount')}</h4>
                  <h6>{i18n.t('messages.description')} : Google Cloud</h6>
                  <h6>JJ Geewax</h6>
                  <img src='https://www.danyprint.com.br/wp-content/uploads/2020/08/codigo-de-barras.png' style={{ width: 150, height: 50 }}/>
                </div>
              </div>
            </div>
           <img src='https://m.media-amazon.com/images/I/61J6t27YllL.jpg' style={{ width: 200, height: 227, marginLeft: 70, borderRadius: 5 }}/>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right", color: "#fff" }}>
            <div style={{ fontFamily: "sans-serif", fontSize: 19, paddingTop: 40 }}>
              {generate_serial()}
              <img src='https://www.helpconsult.com.br/wp-content/uploads/2019/04/selo_siteNOVO.png' style={{ width: 48, height: 40, marginRight: -24, paddingLeft: 10 }}/>
            </div>
          </Card.Footer>
        </Card.Header>
      </Card>
    </>
  )}