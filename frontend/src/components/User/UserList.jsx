import React from 'react'
import { connect } from 'react-redux'
import { Alert, Button, Card, FormControl, InputGroup, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFastBackward, faFastForward, faStepBackward, faStepForward, faUsers } from '@fortawesome/free-solid-svg-icons'
import { fetchUsers } from '../../services'
import '../../assets/css/Style.css'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      currentPage: 1,
      usersPerPage: 5
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  changePage = event => {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    })
  }

  firstPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: 1
      })
    }
  }

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      })
    }
  }

  lastPage = () => {
    let usersLength = this.props.userData.users.length
    if (
      this.state.currentPage < Math.ceil(usersLength / this.state.usersPerPage)
    ) {
      this.setState({
        currentPage: Math.ceil(usersLength / this.state.usersPerPage)
      })
    }
  }

  nextPage = () => {
    if (this.state.currentPage < Math.ceil(this.props.userData.users.length / this.state.usersPerPage)) {
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    }
  }

  render() {
    const { currentPage, usersPerPage } = this.state
    const lastIndex = currentPage * usersPerPage
    const firstIndex = lastIndex - usersPerPage

    const userData = this.props.userData
    const users = userData.users
    const currentUsers = users && users.slice(firstIndex, lastIndex)
    const totalPages = users && users.length / usersPerPage

    return (
      <div>
        {userData.error ? (
          <Alert variant="danger">{userData.error}</Alert>
        ) : (
          <Card className="border-dark bg-dark text-white">
            <Card.Header>
              <FontAwesomeIcon icon={faUsers}/> User List
            </Card.Header>
            <Card.Body>
              <Table bordered hover striped variant="dark">
                <thead>
                  <tr>
                    <td className="border-secondary">Name</td>
                    <td className="border-secondary">Email</td>
                    <td className="border-secondary">Address</td>
                    <td className="border-secondary">Created</td>
                    <td className="border-secondary">Balance</td>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr align="center">
                      <td colSpan="6">No Users Available</td>
                    </tr>
                  ) : (
                    currentUsers.map((user, index) => (
                      <tr key={index}>
                        <td className="table-content border-secondary">
                          {user.first} {user.last}
                        </td>
                        <td className="table-content border-secondary">{user.email}</td>
                        <td className="table-content border-secondary">{user.address}</td>
                        <td className="table-content border-secondary">{user.created}</td>
                        <td className="table-content border-secondary">{user.balance}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Card.Body>
            {users.length > 0 ? (
              <Card.Footer>
                <div style={{ float: "left" }}>
                  Showing Page {currentPage} of {totalPages}
                </div>
                <div style={{ float: "right" }}>
                  <InputGroup size="sm">
                  <div>
                      <Button
                        className="first bg-warning text-dark"
                        size="sm"
                        variant="outline-warning"
                        disabled={currentPage === 1 ? true : false}
                        onClick={this.firstPage}
                      >
                        <FontAwesomeIcon icon={faFastBackward}/> First
                      </Button>
                      <Button
                        className="prev bg-success text-light"
                        size="sm"
                        variant="outline-success"
                        disabled={currentPage === 1 ? true : false}
                        onClick={this.prevPage}
                      >
                        <FontAwesomeIcon icon={faStepBackward}/> Prev
                      </Button>
                  </div>
                    <FormControl
                      size="sm"
                      className="border-secondary text-white page-num bg-dark"
                      name="currentPage"
                      value={currentPage}
                      onChange={this.changePage}
                    />
                    <div>
                      <Button
                        className="next bg-success text-light"
                        size="sm"
                        variant="outline-success"
                        disabled={currentPage === totalPages ? true : false}
                        onClick={this.nextPage}
                      >
                        <FontAwesomeIcon icon={faStepForward}/> Next
                      </Button>
                      <Button
                        className="last bg-warning text-dark"
                        size="sm"
                        variant="outline-warning"
                        disabled={currentPage === totalPages ? true : false}
                        onClick={this.lastPage}
                      >
                        <FontAwesomeIcon icon={faFastForward}/> Last
                      </Button>
                    </div>
                  </InputGroup>
                </div>
              </Card.Footer>
            ) : null}
          </Card>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)