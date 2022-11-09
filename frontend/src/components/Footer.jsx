import { useState, useEffect } from 'react'
import { Navbar, Container, Col } from 'react-bootstrap'

const Footer = () => {
  const [fullYear, setFullYear] = useState()

  useEffect(() => {
    setFullYear(new Date().getFullYear() - 3)
  }, [fullYear])

  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Col lg={12} className="text-center text-muted">
          <div>
            {fullYear} - {fullYear + 3}, All Left Reserved by Naldo Luis ☢️
          </div>
        </Col>
      </Container>
    </Navbar>
  )}
  export default Footer