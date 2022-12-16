import { Toast } from 'react-bootstrap'

export default function MyToast(props) {

  return (
    <div style={props.toast}>
      <Toast
        className={`text-white ${props.type === "success" ? "border-success bg-success" : "border-danger bg-danger"}`}
      >
        <Toast.Header className={`text-white ${props.type === "success" ? "bg-success" : "bg-danger"}`}
          closeButton={false}
        >
          <strong>Success 💾</strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </div>
  )
}