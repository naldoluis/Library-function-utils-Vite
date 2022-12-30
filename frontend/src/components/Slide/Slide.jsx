import { Carousel } from 'react-bootstrap'

export default function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: 400, margin: "80px 0 0 280px" }}
          src="https://miro.medium.com/max/1200/1*KzTdEF4HH8syparjt3vVwg.png"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: 400, margin: "80px 0 0 280px" }}
          src="https://miro.medium.com/max/1200/1*_aGiGt0gYVUmE9QfUxjTgA.png"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: 400, margin: "80px 0 0 280px" }}
          src="https://miro.medium.com/max/1200/1*WB8h3NUdG7qgSKJ74W9qyw.png"
        />
      </Carousel.Item>
    </Carousel>
  )}