import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const PageContainer = styled.div`
  padding: 0 2rem;
`

const IndexPage = () => (
  <Layout>
    <PageContainer>
      <SEO title="Home" />
      <h1>Hey, I'm Jason.</h1>
      <p>Front-End Web Developer</p>
      <div style={{ fontSize: "72px", color: "#C8A8CA", maxWidth: "500px" }}>
        I create web apps to solve real-world problems.
      </div>
      <br />
      <Link to="/works/">Featured Works</Link>
    </PageContainer>
  </Layout>
)

export default IndexPage
