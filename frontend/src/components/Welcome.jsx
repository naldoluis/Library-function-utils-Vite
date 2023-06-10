import { Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { i18n } from '../assets/translate/i18n'

export default function Welcome() {
  const [quotes, setQuotes] = useState()

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(json => setQuotes(json))
      .catch(error => console.log('Not Found quotes: ' + error.message))
  }, [])

  return (
    <Card bg="dark" text="light">
     <Card.Header>💭 {i18n.t('messages.quotes')}</Card.Header>
      <Card.Body style={{ overflowY: "scroll", height: 520 }}>
        {quotes &&
          quotes.map((quote, id) => (
           <blockquote className="blockquote mb-0" key={id}>
              <p>{quote.text}</p>
            <footer className="blockquote-footer">{quote.author}</footer>
          </blockquote>
        ))}
      </Card.Body>
    </Card>
  )}