import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroInfo from "../components/introInfo"
import About from "../components/about"
import SidebarInfo from "../components/sidebarInfo"

export default function App() {
  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <IntroInfo>
        <About />
      </IntroInfo>

      <SidebarInfo></SidebarInfo>
    </Layout>
  )
}
