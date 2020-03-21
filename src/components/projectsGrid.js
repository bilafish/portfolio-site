import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

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
            }
          }
        }
      }
    }
  `)
  const { edges: projects } = data.allMarkdownRemark
  // console.log(projects)
  return (
    <div>
      {projects &&
        projects.map(({ node: project }) => (
          <Link to={project.fields.slug}>
            <div
              style={{
                marginTop: "1rem",
                width: "180px",
                height: "180px",
                background: "#292929",
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
    </div>
  )
}

export default ProjectsGrid
