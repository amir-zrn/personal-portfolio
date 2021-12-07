import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const IntroInfo = () => {
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
        <div className="home">
          <div className="container">
            <div className="roww">
              <div className="resumo_fn_main_title">
                <h3 className="subtitle">{author.firstName}</h3>
                <h3 className="title">Web Dev</h3>
                <p className="desc">{author.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroInfo
