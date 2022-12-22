import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function ModalCustom(props) {

  return (
    <Modal {...props} size="lg" centered
     >
      <Modal.Header style={{ background: "#3c3c3c", color: "#fff" }}>
        <Modal.Title> Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#3c3c3c", color: "#fff" }}>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
          <input
             maxLength={25}
             placeholder="Enter Serial Number">
          </input>
        </Modal.Body>
      <Modal.Footer style={{ background: "#3c3c3c", color: "#fff" }}>
        <Button variant="success" onClick={props.onHide}>Purchase</Button>
        <Button variant="warning" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )}