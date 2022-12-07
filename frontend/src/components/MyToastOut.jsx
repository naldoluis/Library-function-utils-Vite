import { Toast } from 'react-bootstrap'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyToastOut(props) {

  return (
    <div style={props.toast}>
      <Toast style={{ color: "#fff", background: "#e95313" }}
      >
        <Toast.Header style={{ color: "#fff", background: "#e95313" }}
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