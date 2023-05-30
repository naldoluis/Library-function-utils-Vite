import { useEffect, useState } from 'react'
import { Col, Container, Navbar } from 'react-bootstrap'
import { i18n } from '../assets/translate/i18n'

export default function Footer() {
  const [fullYear, setFullYear] = useState()

  useEffect(() => {
    setFullYear(new Date().getFullYear() - 4)
  }, [fullYear])

  return (
    <Navbar fixed="bottom" bg="dark">
      <Container>
        <Col lg={12} className="text-center text-muted">
          {fullYear} - {fullYear + 4}, {i18n.t('footer.message')} ☢️
        </Col>
      </Container>
    </Navbar>
  )}