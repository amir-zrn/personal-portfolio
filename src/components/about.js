import React from "react"
import { graphql } from "gatsby"
import { map } from "lodash"

function About() {
  const values = ["test", "def"]
  const list = values.map((item, i) => {
    return <li key={i}>{item}</li>
  })
  return (
    <div id="about">
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            <span className="subtitle">ABOUT ME</span>
            <ul>{list}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
