import React from "react"
import Author from "../components/Author"

const Slide = ({ alt_description, urls, user, index }) => {
  return (
    <article className="slide" key={index}>
      <img
        src={urls.small}
        alt={alt_description}
        loading="lazy"
        className="slide-img"
      />
      <Author {...user} />
    </article>
  )
}

export default Slide
