import React from 'react'
import { connect } from 'react-redux'
import { Alert, Card, FormControl, InputGroup, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { fetchUsers } from '../../services'
import '../../assets/css/Style.css'

class UserList extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      currentPage: 1,
      usersPerPage: 5
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  changePage = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
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

  nextPage = () => {
    if (this.state.currentPage < Math.ceil(this.props.userData.users.length / this.state.usersPerPage)) {
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    }
  }

  lastPage = () => {
    let usersLength = this.props.userData.users.length
    if (this.state.currentPage < Math.ceil(usersLength / this.state.usersPerPage)) {
      this.setState({
        currentPage: Math.ceil(usersLength / this.state.usersPerPage)
      })
    }
  }

  render() {
    const { currentPage, usersPerPage } = this.state
    const lastIndex = currentPage * usersPerPage
    const firstIndex = lastIndex - usersPerPage

    const userData = this.props.userData
    const users = userData.users
    const currentUsers = Array.isArray(users) ? users.slice(firstIndex, lastIndex) : []
    const totalPages = users && users.length / usersPerPage

    return (
      <div>
        {userData.error ? (
          <Alert variant="danger">{userData.error}</Alert>
        ) : (
          <Card className="border-secondary bg-dark text-white">
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
                <div style={{ float: "left", fontSize: 15 }}>
                  Showing Page {currentPage} of {totalPages}
                </div>
                <div style={{ float: "right" }}>
                  <InputGroup size="sm">
                     <b className="prev-fast" onClick={this.firstPage}>➤➤</b>
                     <b className="prev-page" onClick={this.prevPage}>➤</b>
                   <FormControl
                     className="border-secondary text-white page-num bg-dark"
                     value={currentPage}
                     onChange={this.changePage}
                    />
                     <b className="next-page" onClick={this.nextPage}>➤</b>
                     <b className="next-fast" onClick={this.lastPage}>➤➤</b>
                  </InputGroup>
                </div>
              </Card.Footer>
            ) : null}
          </Card>
        )}
      </div>
    )}}

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