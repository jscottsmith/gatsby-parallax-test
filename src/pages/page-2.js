import React from "react"
import { Link } from "gatsby"
import { Parallax } from "react-scroll-parallax"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
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
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
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
    <Link to="/">Go Home</Link>
  </Layout>
)

export default SecondPage
