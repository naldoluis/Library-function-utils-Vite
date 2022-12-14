import { Button, Modal } from 'react-bootstrap'

export default function ModalCustom(props) {

  return (
    <Modal {...props} size="lg" centered
     >
      <Modal.Header style={{ background: "#3c3c3c", color: "#fff" }}>
        <Modal.Title>❐ Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#3c3c3c", color: "#fff" }}>
        <h4 align="center">Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
          <input
             maxLength={25}
             placeholder="Enter Serial Number">
          </input>
        <img src='https://www.thomasvitale.com/content/images/2020/09/cloud-native-spring-boot-kubernetes-meap.jpg'
         style={{ width: 400, height: 227, marginLeft: 150, borderRadius: 4 }}/>
      </Modal.Body>
      <Modal.Footer style={{ background: "#3c3c3c" }}>
        <Button size="sm" variant="success" onClick={props.onHide}>Purchase</Button>
        <Button size="sm" variant="warning" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )}