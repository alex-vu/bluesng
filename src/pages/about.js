import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <AniLink paintDrip to="/">
      Go to Page 4
    </AniLink>
  </Layout>
)

export default AboutPage
