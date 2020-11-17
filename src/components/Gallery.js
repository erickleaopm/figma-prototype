import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../components/Title"

const query = graphql`
  {
    allUnsplashLatestPhoto(sort: { fields: created_at, order: DESC }) {
      nodes {
        urls {
          raw
          full
          regular
          small
          thumb
        }
        unsplashId
        user {
          id
          name
          username
          profile_image {
            large
            medium
            small
          }
          link
        }
        alt_description
        links {
          html
        }
        likes
      }
    }
  }
`

const Gallery = ({ title }) => {
  const {
    allUnsplashLatestPhoto: { nodes: images },
  } = useStaticQuery(query)

  return (
    <>
      <Title title={title} styleClass="subtitle" />
      <div className="grid-gallery">
        {images.map(photo => {
          return (
            <div
              className={`grid-gallery__item ${
                Math.floor(Math.random() * 100 + 1) > 50 ? "big" : ""
              }`}
              key={photo.unsplashId}
            >
              <img
                src={photo.urls.regular}
                alt={photo.alt_description}
                className="grid-gallery__img"
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Gallery
