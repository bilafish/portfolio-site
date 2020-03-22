import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GithubIcon from "../../images/github-2.svg"
import styled from "styled-components"
import ProjectsGrid from "../../components/projectsGrid"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Work" />
    <Content>
      <div>
        <h1 style={{ color: "#61BABB" }}>Here's a selection of projects </h1>
        <h1 style={{ color: "#61BABB" }}>that I've been working on recently</h1>
        <span style={{ lineHeight: "2rem" }}>
          For even fresher work, you can check out the latest repos on my{" "}
          <GithubIcon /> <a href="https://github.com/bilafish">Github</a>.
        </span>
      </div>
      <ProjectsGrid />
    </Content>
  </Layout>
)

export default SecondPage
