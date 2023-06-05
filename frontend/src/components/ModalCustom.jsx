import { Button, Modal } from 'react-bootstrap'
import { i18n } from '../assets/translate/i18n'

export default function ModalCustom(props) {

  return (
    <Modal className="text-white" {...props} size="lg" centered>
      <Modal.Header style={{ background: "#454545" }}>
        <Modal.Title>❐ Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#454545" }}>
       <h4 align="center">Centered Modal</h4>
        <p style={{ margin: 20 }}>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <input id="modal" maxLength={24} placeholder={i18n.t('input.modal')}/>
       <img src='https://www.thomasvitale.com/content/images/2020/09/cloud-native-spring-boot-kubernetes-meap.jpg' style={{ width: 400, height: 210, marginLeft: 150, borderRadius: 4 }}/>
      </Modal.Body>
      <Modal.Footer style={{ background: "#454545" }}>
        <Button size="sm" variant="success" onClick={props.onHide}>{i18n.t('buttons.buy')}</Button>
        <Button size="sm" variant="warning" onClick={props.onHide}>{i18n.t('buttons.cancel')}</Button>
      </Modal.Footer>
    </Modal>
  )}