import React from "react"
import { graphql } from "gatsby"
import Container from "./container"

function About() {
  const values = ["test", "def"]
  const list = values.map((item, i) => {
    return <li key={i}>{item}</li>
  })
  return (
    <Container id="about">
      <div className="resumo_fn_main_title">
        <h3 className="subtitle">ABOUT ME</h3>
        <h3 className="title">Biography</h3>
        <p className="desc">
          I'm a Freelancer Front-end Developer with over 12 years of experience.
          I'm from San Francisco. I code and create web elements for amazing
          people around the world. I like work with new people. New people are
          new experiences.
        </p>
        <ul>{list}</ul>
      </div>
    </Container>
  )
}

export default About
