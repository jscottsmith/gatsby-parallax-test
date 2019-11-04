import React from "react"
import { Link } from "gatsby"
import { Parallax } from "react-scroll-parallax"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Scroll Down</h1>
    <div
      style={{
        maxWidth: `300px`,
        margin: "4rem auto",
        background: "slateblue",
      }}
    >
      <Parallax y={[100, -100]}>
        <Image />
      </Parallax>
    </div>
    <p>And navigate pages.</p>
    <div
      style={{ height: "300vh", background: "darkslateblue", width: "100%" }}
    />
    <div
      style={{
        maxWidth: `300px`,
        margin: "4rem auto",
        background: "slateblue",
      }}
    >
      <Parallax y={[100, -100]}>
        <Image />
      </Parallax>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
