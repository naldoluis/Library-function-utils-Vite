import { Card, Col, Form, Spinner, Table } from 'react-bootstrap'
import { i18n } from '../../assets/translate/i18n'

export default function VideoList() {
  return (
    <>
      <Card className="card-video">
        <Card.Header>
          <b style={{ color: "#fff", fontWeight: 400 }}>
            {i18n.t('navigate.video')} 🎬
          </b>
           <Card.Body className="row" style={{ margin: " -36px 3px 0 0", overflowY: "scroll", height: 550 }}>

                                 {/* LOADING */}
            {/* <Table bordered hover striped variant="dark">
                <tbody>
                  <tr align="center">
                    <td>
                      <Spinner style={{ margin: 200 }} animation="border"></Spinner>
                    </td>
                  </tr>
                </tbody>
              </Table> */}

{/* ============================================================================================== */}

                                   {/* LIST */}

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
                <video poster="https://portalapas.org.br/wp-content/uploads/2020/04/og-image-globorural_99935fdb6f.png" width="280" height="240" controls>
                  <source src="https://youtu.be/RNOmD8qGwNc" type="video/mp4"/>
                </video>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
                <video poster="https://portalapas.org.br/wp-content/uploads/2020/04/og-image-globorural_99935fdb6f.png" width="280" height="240" controls>
                  <source src="https://youtu.be/RNOmD8qGwNc" type="video/mp4"/>
                </video>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
                <video poster="https://portalapas.org.br/wp-content/uploads/2020/04/og-image-globorural_99935fdb6f.png" width="280" height="240" controls>
                  <source src="https://youtu.be/RNOmD8qGwNc" type="video/mp4"/>
                </video>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
                <video poster="https://portalapas.org.br/wp-content/uploads/2020/04/og-image-globorural_99935fdb6f.png" width="280" height="240" controls>
                  <source src="https://youtu.be/RNOmD8qGwNc" type="video/mp4"/>
                </video>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
                <video poster="https://portalapas.org.br/wp-content/uploads/2020/04/og-image-globorural_99935fdb6f.png" width="280" height="240" controls>
                  <source src="https://youtu.be/RNOmD8qGwNc" type="video/mp4"/>
                </video>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
                <video poster="https://portalapas.org.br/wp-content/uploads/2020/04/og-image-globorural_99935fdb6f.png" width="280" height="240" controls>
                  <source src="https://youtu.be/RNOmD8qGwNc" type="video/mp4"/>
                </video>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
                <video poster="https://portalapas.org.br/wp-content/uploads/2020/04/og-image-globorural_99935fdb6f.png" width="280" height="240" controls>
                  <source src="https://youtu.be/RNOmD8qGwNc" type="video/mp4"/>
                </video>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4">
                <video poster="https://portalapas.org.br/wp-content/uploads/2020/04/og-image-globorural_99935fdb6f.png" width="280" height="240" controls>
                  <source src="https://youtu.be/RNOmD8qGwNc" type="video/mp4"/>
                </video>
              </div>

          </Card.Body>
        </Card.Header>
      </Card>
    </>
  )}