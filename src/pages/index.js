import React from "react"
import Layout from "../components/layout"
import Header from "../templates/header"
import Hero from "../components/hero"
import Footer from "../templates/footer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

export default () => (
  <Layout>
    {/* <AniLink paintDrip to="/about/"> */}
    <Header />
    <Hero />
    <Footer />
    {/* </AniLink> */}
  </Layout>
)
