import { Toast } from 'react-bootstrap'
import { faClock, faUser, faUsers, faCashRegister } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { i18n } from '../assets/translate/i18n'

export function MyToast(props) {
  return (
    <Toast className={`text-white ${props.type === "success" ? "border-success bg-success" : "border-danger bg-danger"}`}
     >
      <Toast.Header className={`text-white ${props.type === "success" ? "bg-success" : "bg-danger"}`}
        closeButton={false}
      >
        <strong>
          {i18n.t('toast.book')} 💾
        </strong>
      </Toast.Header>
     <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  )}

export function MyToastOut(props) {
  return (
    <Toast style={{ background: "#fff" }}
     >
      <Toast.Header style={{ color: "#444", background: "#fff" }}
        closeButton={false}
      >
        <strong>
          <FontAwesomeIcon icon={faUser}/> {i18n.t('toast.userLogout')}
        </strong>
      </Toast.Header>
     <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  )}

export function MyToastPurchase(props) {
  return (
    <Toast style={{ background: "#61f50c" }}
     >
      <Toast.Header style={{ color: "#444", background: "#61f50c" }}
        closeButton={false}
      >
        <strong>
          <FontAwesomeIcon icon={faCashRegister}/> {i18n.t('toast.item')}
        </strong>
      </Toast.Header>
     <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  )}

export function MyToastTimer(props) {
  return (
    <Toast style={{ color: "#fff", background: "#00adc4" }}
     >
      <Toast.Header style={{ color: "#fff", background: "#00adc4" }}
        closeButton={false}
      >
        <strong>
          <FontAwesomeIcon icon={faClock}/> {i18n.t('toast.clock')}
        </strong>
      </Toast.Header>
     <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  )}
  
export function MyToastUser(props) {
  return (
    <Toast style={{ background: "#ffc107" }}
     >
      <Toast.Header style={{ color: "#444", background: "#ffc107" }}
        closeButton={false}
      >
        <strong>
          <FontAwesomeIcon icon={faUsers}/> {i18n.t('toast.createUser')} 🚧
        </strong>
      </Toast.Header>
     <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  )}
