import React, { useState } from "react"
import { navigate } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Title from "../components/Title"
import arrow from "../assets/arrow.svg"
import Loading from "../components/Loading"

const INITIAL_STATE = {
  email: "",
  password: "",
}

const Login = () => {
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
          <AniLink fade to="/">
            <img src={arrow} className="back-link" alt="Back to home" />
          </AniLink>
          <Title title="Log in" />
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Input your password..."
              onChange={handleChange}
            />
            <input type="submit" value="Log in" className="btn" />
          </form>
        </div>
      </section>
      <section className="section">
        <div className="section-center d-flex">{show && <Loading />}</div>
      </section>
    </Layout>
  )
}
export default Login
