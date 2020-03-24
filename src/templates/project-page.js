import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import GlobeIcon from "../images/globe.svg"
import GithubIcon from "../images/github-2.svg"
import Img from "gatsby-image"

const ProjectContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 2rem;
`

const ExternalLinks = styled.div`
  display: flex;
  flex-direction: row;
`
const Badge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.09rem solid white;
  width: 7rem;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  margin-right: 1rem;
`

const GithubBadge = styled(Badge)`
  width: 9rem;
`

const ProjectPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <ProjectContent>
        <section>
          <h1>{post.frontmatter.title}</h1>

          <ExternalLinks>
            {post.frontmatter.weburl && (
              <a href={post.frontmatter.weburl} style={{ border: "none" }}>
                <Badge>
                  <GlobeIcon />
                  <span style={{ marginLeft: "0.5rem" }}>Live Demo</span>
                </Badge>
              </a>
            )}
            {post.frontmatter.githubrepo && (
              <a href={post.frontmatter.githubrepo} style={{ border: "none" }}>
                <GithubBadge>
                  <GithubIcon width="24" height="24" />
                  <span style={{ marginLeft: "0.5rem" }}>View on Github</span>
                </GithubBadge>
              </a>
            )}
          </ExternalLinks>
          <p>{post.frontmatter.description}</p>
        </section>
        <section>
          {post.frontmatter.screenshots &&
            post.frontmatter.screenshots.map(image => (
              <div style={{ width: "250px" }}>
                <Img fluid={image.childImageSharp.fluid} />
              </div>
            ))}
        </section>
      </ProjectContent>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        githubrepo
        weburl
        tags
        screenshots {
          childImageSharp {
            fluid(maxWidth: 250, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
