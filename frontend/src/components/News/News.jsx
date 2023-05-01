import { Carousel } from 'react-bootstrap'
import { i18n } from '../../assets/translate/i18n'

export default function News() {
  return (
    <>
     <div className="text-white">📰 {i18n.t('navigate.news')}</div>
      <Carousel style={{ fontSize: 14.5 }} prevLabel={i18n.t('buttons.previus')} nextLabel={i18n.t('buttons.next')} indicators={false}>
        <Carousel.Item className="slide">
         <h5 align="center" style={{ fontSize: 17.5 }}>Reactive Spring</h5>
          <img
            style={{ width: 550, height: 300, margin: "20px 0 0 290px", borderRadius: 10 }}
            src="https://miro.medium.com/max/1200/1*WB8h3NUdG7qgSKJ74W9qyw.png"
          />
          <div className="py-3" align="center">1 / 3</div>
        </Carousel.Item>
        <Carousel.Item className="slide">
         <h5 align="center" style={{ fontSize: 17.5 }}>Grokking The Spring Boot Interview</h5>
          <img
            style={{ width: 550, height: 300, margin: "20px 0 0 290px", borderRadius: 10 }}
            src="https://miro.medium.com/max/1200/1*_aGiGt0gYVUmE9QfUxjTgA.png"
          />
          <div className="py-3" align="center">2 / 3</div>
        </Carousel.Item>
        <Carousel.Item className="slide">
         <h5 align="center" style={{ fontSize: 17.5 }}>Java A Beginner's Guide Eighth Edition</h5>
          <img
            style={{ width: 550, height: 300, margin: "20px 0 0 290px", borderRadius: 10 }}
            src="https://miro.medium.com/max/1200/1*KzTdEF4HH8syparjt3vVwg.png"
          />
          <div className="py-3" align="center">3 / 3</div>
        </Carousel.Item>
      </Carousel>
    </>
   )}