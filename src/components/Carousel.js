import React from "react"
import Title from "../components/Title"
import Slide from "../components/Slide"

const Carousel = ({ slides, title }) => {
  return (
    <section className="section">
      <Title title={title} styleClass="subtitle" />
      <div className="section-center">
        <div className="carousel">
          {slides.map((slide, index) => {
            return <Slide key={slide.unsplashId} index={index} {...slide} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Carousel
