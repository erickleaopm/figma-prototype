import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Title from "../components/Title"
import arrow from "../assets/arrow.svg"
import Saving from "../components/Saving"

const Register = () => {
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
          <AniLink to="/">
            <img src={arrow} className="back-link" alt="Back to home" />
          </AniLink>
          <Title title="Register" />
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Choose your username..."
              ref={register({ required: true })}
            />
            {errors.username && <span>* The username is required</span>}

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter a valid email..."
              ref={register({ required: true })}
            />
            {errors.email && <span>* The email is required</span>}

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Set your password..."
              ref={register({ required: true })}
            />
            {errors.password && <span>* The password is required</span>}

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
