import { Toast } from 'react-bootstrap'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyToastUser(props) {
  const toastCss = {position: "fixed",top: "10px",right: "10px",zIndex: "1",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .2)"}

  return (
    <div style={toastCss}>
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