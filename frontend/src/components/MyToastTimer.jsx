import { Toast } from 'react-bootstrap'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyToastTimer(props) {

  return (
    <div style={props.toast}>
      <Toast style={{ color: "#fff", background: "#17a2b8" }}
      >
        <Toast.Header style={{ color: "#fff", background: "#17a2b8" }}
          closeButton={false}
        >
          <strong>
            <FontAwesomeIcon icon={faClock}/> - Login Time Limit
          </strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </div>
  )
}