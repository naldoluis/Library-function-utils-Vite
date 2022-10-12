import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import authToken from '../utils/authToken'

const Home = () => {
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken)
  }

  const auth = useSelector(state => state.auth)

  return (
    <Alert style={{ background: "#343A40", color: "#ffffff80" }}>
      Welcome {auth.username}
    </Alert>
  )
}
export default Home