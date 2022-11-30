import { Toast } from 'react-bootstrap'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyToastUser(props) {

  return (
    <div style={props.toast}>
      <Toast style={{ background: "#ffc107" }}
      >
        <Toast.Header style={{ color: "#222", background: "#ffc107" }}
          closeButton={false}
        >
          <strong>
            <FontAwesomeIcon icon={faUsers}/> Registered 🚧
          </strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </div>
  )
}