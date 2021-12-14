import React from "react"
import { graphql } from "gatsby"

const ComponentName = () => {
  return ""
}

const query = graphql`
  {
    nodeByUri(uri: "http://localhost/portfolio/testing/")
    post(id: "") {
      acfDocs {
        email
      }
    }
  }
`

export default ComponentName
