import { Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'

export default function Help() {
  const [comments, setComments] = useState("")

  useEffect(() => {
    if (comments === "") {
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(response => response.json())
        .then((json) => setComments(json))
    }
  }, [comments])

  return (
    <Card bg="dark" text="light">
      <Card.Header>🗨 Comments</Card.Header>
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