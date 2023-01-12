import { Carousel } from 'react-bootstrap'

export default function Slide() {
  return (
      <Carousel style={{ fontSize: 15 }} prevLabel="⮜ Previus" nextLabel="Next ➤" indicators={false}>
        <Carousel.Item className="slide">
        <h5 style={{ textAlign: "center", fontSize: 17.5 }}>Reactive Spring</h5>
          <img
            style={{ width: 700, height: 400, margin: "20px 0 0 220px", borderRadius: 10 }}
            src="https://miro.medium.com/max/1200/1*WB8h3NUdG7qgSKJ74W9qyw.png"
          />
        </Carousel.Item>
        <Carousel.Item className="slide">
        <h5 style={{ textAlign: "center", fontSize: 17.5 }}>Grokking The Spring Boot Interview</h5>
          <img
            style={{ width: 700, height: 400, margin: "20px 0 0 220px", borderRadius: 10 }}
            src="https://miro.medium.com/max/1200/1*_aGiGt0gYVUmE9QfUxjTgA.png"
          />
        </Carousel.Item>
        <Carousel.Item className="slide">
        <h5 style={{ textAlign: "center", fontSize: 17.5 }}>Java A Beginner's Guide Eighth Edition</h5>
          <img
            style={{ width: 700, height: 400, margin: "20px 0 0 220px", borderRadius: 10 }}
            src="https://miro.medium.com/max/1200/1*KzTdEF4HH8syparjt3vVwg.png"
          />
        </Carousel.Item>
      </Carousel>
   )}