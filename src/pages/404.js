import React from "react"
import Title from "../components/Title"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import sign from "../assets/404.svg"

const Error = () => {
  return (
    <main className="error-page">
      <div className="error-container">
        <img src={sign} alt="404 Not Found" className="error-img" />
        <Title title="Oops, something went wrong!" styleClass="error-message" />
        <AniLink to="/" className="btn">
          Back to Home
        </AniLink>
      </div>
    </main>
  )
}

export default Error
