import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import authToken from '../utils/authToken'

const Home = () => {
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken)
  }

  const auth = useSelector(state => state.auth)

  return (
    <Alert style={{ background: "#343A40", color: "#fff", fontSize: "30px", fontWeight: "bold", fontFamily: "sans-serif" }}>
      Welcome to Book Shop {auth/* .username */}
      <p className='title-home'>Good friends, good books, and a sleepy conscience: this is the ideal life.</p>
      <p className='title-home'>-- Mark Twain</p>
    </Alert>
  )
}
export default Home