import { Toast } from 'react-bootstrap'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyToastTimer(props) {
  const toastCss = {position: "fixed",top: "10px",right: "10px",zIndex: "1",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .2)"}

  return (
    <div style={props.show ? toastCss : null}>
      <Toast
        className={`text-white ${
          props.type === "info" ? "border-info bg-info" : "border-info bg-info"}`}
        show={props.show}
      >
        <Toast.Header className={`text-white ${props.type === "info" ? "bg-info" : "bg-info"}`}
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