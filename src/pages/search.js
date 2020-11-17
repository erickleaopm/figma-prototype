import React, { useState } from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Navbar from "../components/Navbar"
import Results from "../components/Results"

const INITIAL_STATE = {
  query: "",
}

const Search = () => {
  const [values, setValues] = useState(INITIAL_STATE)
  const [show, setShow] = useState(false)

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
    if (values.query.length >= 3) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    setShow(true)
  }

  return (
    <Layout>
      <section className="section section-xl">
        <div className="section-center">
          <Title title="Search" />
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="query"
              id="query"
              placeholder="Search all photos..."
              onChange={handleChange}
            />
          </form>
          {show && <Results />}
        </div>
      </section>
      <Navbar />
    </Layout>
  )
}

export default Search
