import { Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'

export default function Welcome() {
  const [quotes, setQuotes] = useState()

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
       .then(response => response.json())
       .then(json => setQuotes(json))
  }, [])

  return (
    <Card bg="dark" text="light">
      <Card.Header>💭 Quotes</Card.Header>
      <Card.Body style={{ overflowY: "scroll", height: 570 }}>
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