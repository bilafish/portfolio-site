import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default ProjectsGrid = () => {
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
              projectthumbnail
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return <h1>Hello</h1>
}
