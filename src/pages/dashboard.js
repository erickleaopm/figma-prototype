import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Carousel from "../components/Carousel"
import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"

const Dashboard = ({ data }) => {
  const {
    featured: { nodes: slides },
  } = data
  return (
    <Layout>
      <section className="section section-xl">
        <div className="section-center">
          <Title title="Discover" />
          <Carousel slides={slides} title="What's new today" />
          <Gallery title="Browse All" />
          <AniLink fade to="/" className="btn btn-alt">
            See more
          </AniLink>
        </div>
      </section>
      <Navbar />
    </Layout>
  )
}

export const query = graphql`
  {
    featured: allUnsplashLatestPhoto(
      limit: 4
      filter: { likes: { gt: 10 } }
      sort: { fields: likes, order: DESC }
    ) {
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

export default Dashboard
