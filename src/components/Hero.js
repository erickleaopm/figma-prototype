import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import logo from "../assets/logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const query = graphql`
  {
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxHeight: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <section className="hero">
      <img className="hero-logo" src={logo} alt="Photoe an amazing app" />
      <Image fluid={fluid} className="hero-img" />
      <div className="hero-btns">
        <AniLink fade to="/login" className="btn btn-alt">
          Log in
        </AniLink>
        <AniLink fade to="/register" className="btn">
          Register
        </AniLink>
        <div className="underline"></div>
      </div>
    </section>
  )
}

export default Hero
