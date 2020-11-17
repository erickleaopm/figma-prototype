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

const Results = () => {
  const {
    allUnsplashLatestPhoto: { nodes: images },
  } = useStaticQuery(query)
  return (
    <>
      <Title title="All Results" styleClass="subtitle" />
      <div className="grid-results">
        {images.map(photo => {
          return (
            <div className="grid-results__item" key={photo.unsplashId}>
              <img
                src={photo.urls.thumb}
                alt={photo.alt_description}
                className="grid-results__img"
              />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Results
