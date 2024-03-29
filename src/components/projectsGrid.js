import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  a {
    border: none;
  }
`

// A simple component to render a grid of project thumbnails on my main page
const ProjectsGrid = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "project-page" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              projectthumbnail {
                childImageSharp {
                  fluid(maxWidth: 120, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              thumbnailbgcolour
            }
          }
        }
      }
    }
  `)
  const { edges: projects } = data.allMarkdownRemark
  // console.log(projects)
  return (
    <StyledGrid>
      {projects &&
        projects.map(({ node: project }) => (
          <Link to={project.fields.slug}>
            <div
              style={{
                marginTop: "1rem",
                marginRight: "1rem",
                width: "180px",
                height: "180px",
                background: project.frontmatter.thumbnailbgcolour,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "25px",
              }}
            >
              <div style={{ width: "120px", height: "120px" }}>
                <Img
                  fluid={
                    project.frontmatter.projectthumbnail.childImageSharp.fluid
                  }
                  alt="carpark finder"
                />
              </div>
            </div>
          </Link>
        ))}
    </StyledGrid>
  )
}

export default ProjectsGrid
