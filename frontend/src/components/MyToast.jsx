import { Toast } from 'react-bootstrap'
import { faUserGraduate, faContactCard, faCashRegister } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { i18n } from '../assets/translate/i18n'

export function MyToast(props) {
  return (
    <Toast style={{ zIndex: 12 }} className={`text-white ${props.type === "success" ? "border-success bg-success" : "border-danger bg-danger"}`}
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
    <Toast style={{ background: "#fff", zIndex: 12 }}
     >
      <Toast.Header style={{ color: "#444", background: "#fff" }}
        closeButton={false}
      >
        <strong>
          <FontAwesomeIcon icon={faUserGraduate}/> {i18n.t('toast.userLogout')} ⛔️
        </strong>
      </Toast.Header>
     <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  )}

export function MyToastPurchase(props) {
  return (
    <Toast style={{ background: "#61f50c", zIndex: 12 }}
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
    <Toast style={{ color: "#444", background: "#fffbc3", zIndex: 12 }}
     >
      <Toast.Header style={{ color: "#444", background: "#fffbc3" }}
        closeButton={false}
      >
        <strong>
          🕡 {i18n.t('toast.clock')}
        </strong>
      </Toast.Header>
     <Toast.Body>⚠️ {props.message}</Toast.Body>
    </Toast>
  )}
  
export function MyToastUser(props) {
  return (
    <Toast style={{ background: "#ffc107", zIndex: 12 }}
     >
      <Toast.Header style={{ color: "#444", background: "#ffc107" }}
        closeButton={false}
      >
        <strong>
          <FontAwesomeIcon icon={faContactCard}/> {i18n.t('toast.createUser')} ✅
        </strong>
      </Toast.Header>
     <Toast.Body>ℹ️ {props.message}</Toast.Body>
    </Toast>
  )}
