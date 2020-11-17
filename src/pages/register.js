import React, { useState } from "react"
import { navigate } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Title from "../components/Title"
import arrow from "../assets/arrow.svg"
import Saving from "../components/Saving"

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
}

const Register = () => {
  const [values, setValues] = useState(INITIAL_STATE)
  const [show, setShow] = useState(false)

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log(values)
    setShow(true)
    setTimeout(() => {
      navigate("/dashboard")
    }, 1500)
  }

  return (
    <Layout>
      <section className="section">
        <div className="section-center">
          <AniLink to="/">
            <img src={arrow} className="back-link" alt="Back to home" />
          </AniLink>
          <Title title="Register" />
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Choose your username..."
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter a valid email..."
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Set your password..."
              onChange={handleChange}
            />
            <input type="submit" value="Sign up" className="btn" />
          </form>
          <p>
            By signing up, you agree to Photo’s <span>Terms of Service</span>{" "}
            and <span>Privacy Policy</span>.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-center d-flex">{show && <Saving />}</div>
      </section>
    </Layout>
  )
}
export default Register
