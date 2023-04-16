import { Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { i18n } from '../assets/translate/i18n'

export default function Help() {
  const [comments, setComments] = useState()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(response => response.json())
      .then(json => setComments(json))
      .catch(error => console.log('Not Found Comments: ' + error.message))
  })

  return (
    <Card bg="dark" text="light">
      <Card.Header>🗨 {i18n.t('messages.comments')}</Card.Header>
      <Card.Body style={{ overflowY: "scroll", height: 570 }}>
        {comments &&
          comments.map((comments, id) => (
            <blockquote className="blockquote mb-0" key={id}>
              <p>{comments.name}</p>
            <footer className="blockquote-footer">{comments.email}</footer>
           </blockquote>
        ))}
      </Card.Body>
    </Card>
  )}