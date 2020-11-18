import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Title from "../components/Title"
import arrow from "../assets/arrow.svg"
import Loading from "../components/Loading"

const Login = () => {
  const [show, setShow] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    console.log(data)
    setShow(true)
    setTimeout(() => {
      navigate("/dashboard")
    }, 2500)
  }

  return (
    <Layout>
      <section className="section">
        <div className="section-center">
          <AniLink fade to="/">
            <img src={arrow} className="back-link" alt="Back to home" />
          </AniLink>
          <Title title="Log in" />
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              ref={register({ required: true })}
            />
            {errors.email && <span>* The email is required</span>}

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Input your password..."
              ref={register({ required: true })}
            />
            {errors.password && <span>* The password is required</span>}

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
