import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "./menu"
import DarkSwitch from "../components/darkSwitch"

const SidebarInfo = () => {
  const { author } = useStaticQuery(graphql`
    query SidebarInfoQuery {
      author: wpUser {
        name
        firstName
        description
      }
    }
  `)
  return (
    <div className="resumo_fn_right">
      <Menu />
      <DarkSwitch />
      <div className="right_in">
        <div className="right_top">
          <div className="border1"></div>
          <div className="border2"></div>

          <div className="img_holder">
            <div className="abs_img">
              <StaticImage
                src="../../content/assets/right.jpg"
                alt="portfolio"
                placeholder="blurred"
                width={480}
                height={480}
              />
            </div>
          </div>
          <div className="title_holder">
            <h5>Hi There! I am</h5>
            <h3>
              <span className="animated_title">{author.name}</span>
              <span className="typed-cursor"></span>
            </h3>
          </div>
        </div>
        <div className="right_bottom">
          <a>
            <span className="circle"></span>
            <span className="text">
              I’m available for a freelance job. Hire me
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SidebarInfo
