import { Toast } from 'react-bootstrap'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyToastOut(props) {
  const toastCss = {position: "fixed",top: "10px",right: "10px",zIndex: "1",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .2)"}

  return (
    <div style={toastCss}>
      <Toast style={{ color: "#fff", background: "#7548d6" }}
      >
        <Toast.Header style={{ color: "#fff", background: "#7548d6" }}
          closeButton={false}
        >
          <strong>
            <FontAwesomeIcon icon={faUser}/> - User Disconnected
          </strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </div>
  )
}