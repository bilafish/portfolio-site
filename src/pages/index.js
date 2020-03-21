import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsGrid from "../components/projectsGrid"
import styled from "styled-components"

const PageContainer = styled.div`
  padding: 0 2rem;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justifycontent: flex-start;
  align-items: center;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const HeroText = styled.div`
  font-size: 72px;
  color: #c8a8ca;
  font-weight: 600;
  max-width: 700px;
  @media (max-width: 980px) {
    font-size: 60px;
  }
`

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  @media (max-width: 980px) {
    margin-top: 2rem;
    margin-left: 0rem;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <PageContainer>
        <SEO title="Home" />
        <Content>
          <div>
            <h1>Hey, I'm Jason.</h1>
            <p style={{ fontWeight: "300", fontSize: "1.2rem" }}>
              Front-End Web Developer
            </p>
            <HeroText>I create web apps to solve real-world problems.</HeroText>
          </div>
          <Projects>
            <span style={{ color: "#61BABB", fontSize: "1.5em" }}>
              {"Featured Works"}
            </span>
            <ProjectsGrid />
          </Projects>
        </Content>
      </PageContainer>
    </Layout>
  )
}

export default IndexPage
