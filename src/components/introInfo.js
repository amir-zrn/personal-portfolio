import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const IntroInfo = () => {
  const { author } = useStaticQuery(graphql`
    query InfoQuery {
      author: wpUser {
        firstName
        twitter: name
        description
        avatar {
          url
        }
      }
    }
  `)

  return (
    <div className="resumo_fn_main_title">
      <h3 className="subtitle">{author.firstName}</h3>
      <h3 className="title">Web Dev</h3>
      <p className="desc">{author.description}</p>
    </div>
  )
}

export default IntroInfo
