import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"

const IntroInfo = props => {
  const { author } = useStaticQuery(graphql`
    query InfoQuery {
      author: wpUser {
        firstName
        description
      }
    }
  `)

  return (
    <div className="resumo_fn_left">
      <div className="resumo_fn_page">
        <Container className="home">
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">{author.firstName}</h3>
            <h3 className="title">Web Dev</h3>
            <p className="desc">{author.description}</p>
          </div>
        </Container>
        {props.children}
      </div>
    </div>
  )
}

export default IntroInfo
